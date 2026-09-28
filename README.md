# Super Pretinha — site oficial

Site da Aline Reitter (@superpretinha), feito em **Next.js 16 + Tailwind CSS 4**, pronto para a **Vercel**.

## Rodar localmente

```bash
npm install
npm run dev
# abre http://localhost:3000
```

## Publicar na Vercel (primeira vez)

1. Crie uma conta em https://vercel.com (pode entrar com GitHub).
2. No terminal, dentro desta pasta:
   ```bash
   npm i -g vercel
   vercel login
   vercel          # responde as perguntas com Enter (projeto novo, pasta atual)
   vercel --prod   # publica a versão final em https://superpretinha.vercel.app
   ```
3. Quando registrar o domínio no Registro.br: no painel da Vercel → Settings → Domains → adicionar
   `superpretinha.com.br` e apontar o DNS no Registro.br conforme a Vercel indicar (registro A / CNAME).

Alternativa sem terminal: subir a pasta para um repositório no GitHub e importar em https://vercel.com/new.

## Onde editar

| O quê | Arquivo |
|---|---|
| Textos, contatos, links, estatísticas | `src/data/site.ts` |
| Produtos da lojinha (nome, link, foto, badge) | `src/data/site.ts` → `products` |
| Fotos | `public/img/` (troque mantendo os nomes ou ajuste em `site.ts`) |
| Seções da home | `src/components/Sections.tsx` |
| Página da lojinha | `src/app/loja/page.tsx` |
| Cores e animações | `src/app/globals.css` |

## Fotos

As imagens em `public/img` foram capturadas do perfil público e passaram por limpeza dos textos
(inpainting). Para o site ficar impecável, substitua pelas fotos originais em alta resolução:

- `perfil-laranja.jpg` — hero (retrato vertical, 4:5)
- `mala.jpg` — seção "Sobre"
- `estrelas.jpg` — Projeto Rapunzel
- `avatar.png` — foto de perfil redonda (512×512)
- fotos dos produtos: adicione em `public/img/` e aponte em `products[].image`

## Lojinha

É uma vitrine com links: cada botão leva ao checkout externo (Eduzz, Mercado Livre, Ápice, WhatsApp).
Para virar loja com carrinho/pagamento próprio, o próximo passo é integrar Mercado Pago ou Stripe.
