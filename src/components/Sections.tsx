import Link from "next/link";
import { products, site } from "@/data/site";
import {
  ArrowIcon,
  InstagramIcon,
  PinterestIcon,
  SparkleIcon,
  TiktokIcon,
  WhatsappIcon,
  YoutubeIcon,
} from "./Icons";
import { ProductCard } from "./ProductCard";

export const socialIcon: Record<string, (p: { className?: string }) => React.JSX.Element> = {
  Instagram: InstagramIcon,
  YouTube: YoutubeIcon,
  TikTok: TiktokIcon,
  Pinterest: PinterestIcon,
};

const nav = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#conteudos", label: "Conteúdos" },
  { href: "/#rapunzel", label: "Projeto Rapunzel" },
  { href: "/loja", label: "Lojinha" },
  { href: "/#contato", label: "Contato" },
];

function Sparkles({ n = 14, seed = 1 }: { n?: number; seed?: number }) {
  const items = Array.from({ length: n }, (_, i) => {
    const a = Math.sin(i * 12.9898 * seed) * 43758.5453;
    const b = Math.sin(i * 78.233 * seed) * 43758.5453;
    const x = (a - Math.floor(a)) * 100;
    const y = (b - Math.floor(b)) * 100;
    const d = ((i * 37) % 30) / 10;
    const s = 6 + ((i * 13) % 10);
    return { x, y, d, s };
  });
  return (
    <>
      {items.map((p, i) => (
        <span
          key={i}
          className="sparkle"
          style={{ left: `${p.x}%`, top: `${p.y}%`, animationDelay: `${p.d}s`, width: p.s, height: p.s }}
        />
      ))}
    </>
  );
}

/* ---------------------------------------------------------------- Header */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-plum/5 bg-cream/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={site.images.avatar} alt="" className="h-9 w-9 rounded-full ring-2 ring-pink/60" />
          <span className="font-display text-xl font-bold tracking-tight">
            Super<span className="grad-text">Pretinha</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-plum/70 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="transition hover:text-pink-deep">
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href={site.social[0].href}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-full bg-plum px-4 py-2 text-sm font-semibold text-cream shadow-soft transition hover:bg-pink-deep"
        >
          <InstagramIcon className="h-4 w-4" />
          Seguir
        </a>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ Hero */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="blob -left-24 top-10 h-96 w-96 bg-pink" />
      <div className="blob right-0 top-32 h-[28rem] w-[28rem] bg-coral" />
      <div className="blob bottom-0 left-1/3 h-72 w-72 bg-grape opacity-40" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 md:grid-cols-[1fr_0.95fr] md:pt-20">
        <div className="relative z-10">
          <p className="rise glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-pink-deep">
            <SparkleIcon className="h-3.5 w-3.5" />
            Oi irmã! Seja bem-vinda
          </p>
          <h1 className="rise rise-2 font-display mt-6 text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Seus cachos <span className="grad-text">3B/3C</span> do jeito que eles merecem.
          </h1>
          <p className="rise rise-3 mt-6 max-w-xl text-lg leading-relaxed text-plum/70">
            Eu sou a <strong className="text-plum">{site.person}</strong>, a Super Pretinha. Aqui você encontra
            tutoriais sem enrolação, rotina capilar de verdade e conversa de irmã sobre
            autoestima — direto de {site.location}.
          </p>
          <div className="rise rise-4 mt-8 flex flex-wrap gap-3">
            <a
              href="#rapunzel"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-deep to-coral px-6 py-3.5 font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              Conhecer o Projeto Rapunzel
              <ArrowIcon className="h-4 w-4" />
            </a>
            <Link
              href="/loja"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-plum transition hover:-translate-y-0.5"
            >
              🛍️ Ver a lojinha
            </Link>
          </div>

          <dl className="rise rise-4 mt-12 flex max-w-lg flex-wrap gap-3">
            {site.stats.map((s) => (
              <div key={s.label} className="glass flex min-w-[6.5rem] flex-1 flex-col justify-center rounded-2xl px-4 py-3 text-center">
                <dt className="font-display whitespace-nowrap text-2xl font-bold leading-none text-plum md:text-3xl">{s.value}</dt>
                <dd className="mt-1.5 whitespace-nowrap text-[11px] font-bold uppercase tracking-wider text-plum/50">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="animate-spin-slow absolute -inset-10 rounded-full bg-[conic-gradient(from_0deg,transparent_0%,rgb(255_79_154/0.35)_20%,transparent_40%,rgb(255_200_97/0.35)_60%,transparent_80%)] blur-2xl" />
          <div className="animate-float relative aspect-[4/5]" style={{ ["--rot" as string]: "2deg" }}>
            <div className="grad-ring absolute inset-0 rounded-[3rem] rounded-t-[12rem]" />
            <div className="photo-shine absolute inset-[6px] overflow-hidden rounded-[2.7rem] rounded-t-[11.6rem] bg-blush">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={site.images.hero}
                alt={`${site.person}, a Super Pretinha, com seus cachos 3B/3C`}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-plum/90 via-plum/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-cream">
                <div>
                  <p className="font-display text-2xl font-bold">{site.person}</p>
                  <p className="text-sm text-cream/80">{site.tagline} · {site.location}</p>
                </div>
                <SparkleIcon className="h-8 w-8 text-gold" />
              </div>
              <Sparkles n={16} seed={2} />
            </div>

            <div className="glass absolute -left-2 top-16 rounded-2xl md:-left-8 px-4 py-3 shadow-soft">
              <p className="text-[10px] font-bold uppercase tracking-wider text-plum/50">Cupom Ápice</p>
              <p className="font-display text-2xl font-bold text-pink-deep">{site.partner.coupon}</p>
            </div>
            <a
              href={site.social[0].href}
              target="_blank"
              rel="noopener"
              className="absolute -right-1 top-10 flex items-center md:-right-4 gap-3 rounded-2xl bg-plum px-4 py-3 text-cream shadow-soft transition hover:bg-pink-deep"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={site.images.avatar} alt="" className="h-9 w-9 rounded-full ring-2 ring-pink" />
              <span>
                <span className="block text-xs font-semibold">{site.handle}</span>
                <span className="block text-sm font-bold">405 mil irmãs 💗</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Marquee */
export function Marquee() {
  const items = [...site.marquee, ...site.marquee];
  return (
    <div className="overflow-hidden bg-gradient-to-r from-plum via-grape to-plum py-4 text-cream">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-lg font-semibold">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t}
            <SparkleIcon className="h-4 w-4 text-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- Sobre */
export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rotate-[-4deg] rounded-[2.5rem] bg-gradient-to-br from-pink/30 via-coral/30 to-gold/30" />
          <div className="photo-shine relative overflow-hidden rounded-[2.2rem] shadow-soft">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={site.images.about} alt={`${site.person} sorrindo`} className="aspect-[4/5] w-full object-cover" />
            <Sparkles n={10} seed={3} />
          </div>
          <div className="glass absolute -bottom-6 right-2 max-w-[15rem] rounded-2xl p-4 text-sm shadow-soft">
            <p className="font-display text-lg font-semibold leading-tight">“Cabelo bom é o que te faz se olhar no espelho e sorrir.”</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-pink-deep">— Aline</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-deep">Quem é a Super Pretinha</p>
          <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Uma irmã que já errou tudo — e hoje te ensina a acertar.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-plum/70">
            {site.person} é criadora de conteúdo de {site.location}, referência em cachos 3B/3C para
            mais de 405 mil mulheres. Ela testa cada escova, mousse e técnica no próprio cabelo e mostra
            o que funciona (e o que não funciona) sem filtro, com humor e muita autoestima.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              ["✨", "Tutoriais diretos ao ponto"],
              ["🧪", "Tudo testado no cabelo dela"],
              ["📺", "Já esteve na Record TV Brasília"],
              ["🌍", "Viagens, fitness e vida real"],
            ].map(([e, t]) => (
              <li key={t} className="glass flex items-center gap-3 rounded-2xl px-4 py-3 font-semibold">
                <span className="text-xl">{e}</span> {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            {site.social.map((s) => {
              const Icon = socialIcon[s.name];
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-plum/15 bg-white/60 px-4 py-2 text-sm font-semibold transition hover:border-pink-deep hover:text-pink-deep"
                >
                  <Icon className="h-4 w-4" /> {s.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Feed */
export function Feed() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-deep">Direto do feed</p>
          <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            O que rolou por lá <span className="grad-text">esta semana</span>
          </h2>
        </div>
        <a
          href={site.social[0].href}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-full bg-plum px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-pink-deep"
        >
          <InstagramIcon className="h-4 w-4" /> Ver tudo no Instagram
        </a>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {site.images.feed.map((f, i) => (
          <a
            key={f.href}
            href={f.href}
            target="_blank"
            rel="noopener"
            className={`photo-shine group relative overflow-hidden rounded-3xl bg-blush shadow-soft transition hover:-translate-y-1 ${
              i === 0 ? "col-span-2 row-span-2 lg:col-span-2" : ""
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={f.src}
              alt={f.alt}
              className="aspect-[3/4] h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum/85 to-transparent p-4 pt-12 text-cream">
              <p className="text-xs font-bold uppercase tracking-wider text-gold">Reels</p>
              <p className="font-display text-base font-semibold leading-tight md:text-lg">{f.tag}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Conteúdos */
export function Topics() {
  return (
    <section id="conteudos" className="relative overflow-hidden bg-plum text-cream">
      <div className="blob -left-20 top-0 h-96 w-96 bg-pink opacity-30" />
      <div className="blob right-0 bottom-0 h-96 w-96 bg-grape opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Conteúdos</p>
          <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Tudo que você precisa saber, sem enrolação.
          </h2>
          <p className="mt-4 text-lg text-cream/70">
            Mais de 2 mil vídeos testando escovas, produtos e técnicas no meu próprio cabelo
            para você errar menos e ganhar tempo.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.topics.map((t) => (
            <article
              key={t.title}
              className="glass-dark group rounded-3xl p-7 transition hover:-translate-y-1 hover:border-pink/60"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink to-coral text-2xl shadow-soft">
                {t.emoji}
              </span>
              <h3 className="font-display mt-5 text-2xl font-semibold">{t.title}</h3>
              <p className="mt-2 leading-relaxed text-cream/70">{t.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Rapunzel */
export function Rapunzel() {
  const p = site.planner;
  return (
    <section id="rapunzel" className="mx-auto max-w-6xl px-5 py-24">
      <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blush via-cream to-lilac p-8 shadow-soft md:p-14">
        <Sparkles n={18} seed={5} />
        <div className="relative grid items-center gap-12 md:grid-cols-2">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="grad-ring absolute -inset-1.5 rounded-[2.5rem] rotate-[-3deg]" />
            <div className="photo-shine relative overflow-hidden rounded-[2.3rem] rotate-[-3deg]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={site.images.rapunzel} alt="Cabelo longo e definido com presilhas" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-plum/80 to-transparent p-6 text-cream">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Planner capilar</p>
                <p className="font-display text-4xl font-bold leading-tight">Projeto Rapunzel</p>
              </div>
            </div>
            <div className="glass absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl p-4 text-sm shadow-soft">
              <ul className="grid grid-cols-2 gap-1 font-semibold">
                <li>☑ Cronograma</li><li>☑ Finalização</li><li>☑ Crescimento</li><li>☑ E-book</li>
              </ul>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-deep">Projeto Rapunzel</p>
            <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{p.title}</h2>
            <p className="mt-4 text-lg text-plum/70">{p.subtitle}</p>
            <ul className="mt-8 space-y-4">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink to-coral text-[11px] font-bold text-white">✓</span>
                  <span className="text-plum/80">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={p.buy}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-deep to-coral px-6 py-3.5 font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                Quero meu Planner <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-plum/15 bg-white/70 px-6 py-3.5 font-semibold text-plum transition hover:border-plum/40"
              >
                <WhatsappIcon className="h-5 w-5 text-[#25D366]" /> Tirar dúvidas no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Loja preview */
export function ShopPreview() {
  const featured = products.filter((p) => ["planner-projeto-rapunzel", "escova-definicao", "apice-cupom"].includes(p.slug));
  return (
    <section id="loja" className="mx-auto max-w-6xl px-5 pb-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-deep">Lojinha</p>
          <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            O que eu uso <span className="grad-text">de verdade</span>.
          </h2>
          <p className="mt-4 text-lg text-plum/65">
            Planner, escovas e produtos que aparecem nos meus vídeos — com os links e cupons oficiais.
          </p>
        </div>
        <Link
          href="/loja"
          className="inline-flex items-center gap-2 rounded-full bg-plum px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-pink-deep"
        >
          Ver a lojinha completa <ArrowIcon className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {featured.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Contato */
export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-5 pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pink-deep via-pink to-coral p-10 text-white shadow-soft md:p-16">
        <Sparkles n={14} seed={7} />
        <SparkleIcon className="absolute -right-6 -top-6 h-40 w-40 text-white/15" />
        <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Contato & parcerias</p>
            <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Vamos criar juntas?</h2>
            <p className="mt-4 max-w-md text-lg text-white/85">
              Campanhas, publis, presença em eventos e conteúdo para marcas que falam com a mulher
              cacheada. Para o Planner, chame no WhatsApp.
            </p>
            <div className="mt-6 flex gap-2">
              {site.social.map((s) => {
                const Icon = socialIcon[s.name];
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={s.name}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 transition hover:bg-white hover:text-pink-deep"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
          <ul className="grid gap-3">
            <li>
              <a href={`mailto:${site.email}`} className="glass flex items-center gap-4 rounded-2xl px-5 py-4 text-plum transition hover:-translate-y-0.5">
                <span className="text-2xl">💌</span>
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-plum/50">E-mail (parcerias)</span>
                  <span className="block font-bold">{site.email}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={site.whatsapp} target="_blank" rel="noopener" className="glass flex items-center gap-4 rounded-2xl px-5 py-4 text-plum transition hover:-translate-y-0.5">
                <WhatsappIcon className="h-7 w-7 text-[#25D366]" />
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-plum/50">WhatsApp (Planner)</span>
                  <span className="block font-bold">{site.whatsappNumber}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={site.social[0].href} target="_blank" rel="noopener" className="glass flex items-center gap-4 rounded-2xl px-5 py-4 text-plum transition hover:-translate-y-0.5">
                <InstagramIcon className="h-7 w-7 text-pink-deep" />
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-plum/50">Instagram</span>
                  <span className="block font-bold">{site.handle} · {site.location}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Footer */
export function Footer() {
  return (
    <footer className="border-t border-plum/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-plum/55 md:flex-row">
        <p>© {new Date().getFullYear()} {site.name} · {site.person} · {site.location}</p>
        <div className="flex items-center gap-4">
          <a href={site.facebook} target="_blank" rel="noopener" className="hover:text-pink-deep">Facebook</a>
          <a href={site.linkInBio} target="_blank" rel="noopener" className="hover:text-pink-deep">Link da bio</a>
          <span className="font-display">Autoestima • Cachos • Rotina</span>
        </div>
      </div>
    </footer>
  );
}
