"""Remove overlay text from reel covers: crop the player chrome, mask white/black text
inside a given band and inpaint it. Usage is data-driven in JOBS below."""
import cv2, numpy as np
from PIL import Image

def text_mask(img, band, white_thr=185, black_thr=45, dilate=4):
    y0, y1 = band
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    h, s, v = cv2.split(hsv)
    m = np.zeros(v.shape, np.uint8)
    white = ((v > white_thr) & (s < 60)).astype(np.uint8)
    black = (v < black_thr).astype(np.uint8)
    band_m = np.zeros_like(m); band_m[y0:y1, :] = 1
    m = ((white | black) & band_m).astype(np.uint8) * 255
    k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * dilate + 1, 2 * dilate + 1))
    return cv2.dilate(m, k)

def process(src, dst, bands=(), crop_bottom=45, crop_top=0, upscale=1.0):
    img = cv2.imread(src)
    img = img[crop_top: img.shape[0] - crop_bottom, :]
    for band in bands:
        m = text_mask(img, band)
        img = cv2.inpaint(img, m, 6, cv2.INPAINT_TELEA)
    if upscale != 1.0:
        img = cv2.resize(img, None, fx=upscale, fy=upscale, interpolation=cv2.INTER_LANCZOS4)
    cv2.imwrite(dst, img, [cv2.IMWRITE_JPEG_QUALITY, 90])
    print(dst, img.shape)

JOBS = [
    # (source, output, text bands (y0,y1) in source px, crop_top)
    ("screenshot-1790602056802-2.png", "../public/img/perfil-laranja.jpg", [(385, 470)], 0),
    ("screenshot-1790602069859-3.png", "../public/img/mala.jpg", [], 125),
    ("screenshot-1790602093502-4.png", "../public/img/estrelas.jpg", [], 0),
    ("screenshot-1790602093503-5.png", "../public/img/mousse.jpg", [(45, 115), (395, 475)], 0),
    ("screenshot-1790602174828-6.png", "../public/img/poroso.jpg", [(375, 455)], 0),
    ("screenshot-1790602174829-7.png", "../public/img/lenco.jpg", [(365, 450)], 0),
]
import os; os.makedirs("../public/img", exist_ok=True)
for src, dst, bands, ct in JOBS:
    process(src, dst, bands, crop_top=ct, upscale=2.0)

# avatar: cut inside the story ring and upscale
av = Image.open("screenshot-1790601920333-0.png").convert("RGB")
w, h = av.size
pad = 14
av = av.crop((pad, pad, w - pad, h - pad)).resize((512, 512), Image.LANCZOS)
mask = Image.new("L", (512, 512), 0)
from PIL import ImageDraw
ImageDraw.Draw(mask).ellipse((0, 0, 511, 511), fill=255)
out = Image.new("RGBA", (512, 512), (0, 0, 0, 0)); out.paste(av, (0, 0), mask)
out.save("../public/img/avatar.png")
print("avatar ok")
