/**
 * Conteúdo do site — edite aqui para atualizar textos, links, contatos e produtos.
 * Fotos ficam em /public/img (troque mantendo os nomes, ou ajuste os caminhos abaixo).
 */
export const site = {
  name: "Super Pretinha",
  handle: "@superpretinha",
  person: "Aline Reitter",
  tagline: "Cachos 3B/3C",
  url: "https://superpretinha.com.br",
  location: "Brasília / Goiás",

  // Contatos públicos (os mesmos divulgados na bio do Instagram e no link da bio)
  email: "contatoalinereitter@gmail.com",
  whatsappNumber: "+55 61 98314-8284",
  whatsapp:
    "https://api.whatsapp.com/send?phone=5561983148284&text=Oi%20Aline!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20o%20Planner%20do%20Projeto%20Rapunzel.",
  facebook: "https://www.facebook.com/474707769057938",
  linkInBio: "https://sandwiche.me/superpretinha",

  social: [
    { name: "Instagram", href: "https://www.instagram.com/superpretinha/", handle: "@superpretinha", followers: "405 mil" },
    { name: "YouTube", href: "https://youtube.com/@superpretinha", handle: "@superpretinha" },
    { name: "TikTok", href: "https://www.tiktok.com/@superpretinha", handle: "@superpretinha" },
    { name: "Pinterest", href: "https://pin.it/2HNdXHqHq", handle: "superpretinha" },
  ],

  stats: [
    { value: "405 mil", label: "seguidoras" },
    { value: "2.250+", label: "tutoriais" },
    { value: "3B/3C", label: "tipo de cacho" },
  ],

  images: {
    avatar: "/img/avatar.png",
    hero: "/img/perfil-laranja.jpg",
    about: "/img/mala.jpg",
    rapunzel: "/img/estrelas.jpg",
    feed: [
      { src: "/img/estrelas.jpg", alt: "Penteado com presilhas de estrela", href: "https://www.instagram.com/superpretinha/reel/DdzTYJ2MuZh/", tag: "Penteado sem tração" },
      { src: "/img/lenco.jpg", alt: "Trança com lenço", href: "https://www.instagram.com/superpretinha/reel/DdpYwSWsEpp/", tag: "Trança com lenço" },
      { src: "/img/poroso.jpg", alt: "Como finalizar cabelo poroso", href: "https://www.instagram.com/superpretinha/reel/DdMl4uDM4Jh/", tag: "Cabelo poroso" },
      { src: "/img/mousse.jpg", alt: "Finalizando com mousse", href: "https://www.instagram.com/superpretinha/reel/DduM9_CsOjA/", tag: "Finalização com mousse" },
      { src: "/img/perfil-laranja.jpg", alt: "Topo do cabelo sem divisão", href: "https://www.instagram.com/superpretinha/reel/Ddr7ncjMe3T/", tag: "Topo sem divisão" },
      { src: "/img/mala.jpg", alt: "Sorteio mala recheada", href: "https://www.instagram.com/superpretinha/reel/DaRBgmyBuHd/", tag: "Mimos para seguidoras" },
    ],
  },

  planner: {
    title: "Planner Capilar Projeto Rapunzel",
    subtitle: "O método que organiza a sua rotina de cachos do zero ao Rapunzel.",
    bullets: [
      "Cronograma capilar pronto para 3B/3C: hidratação, nutrição e reconstrução na ordem certa",
      "Passo a passo de lavagem e finalização sem erros (topo sem divisão, sem frizz, sem ressecar)",
      "E-book com os produtos e escovas que eu realmente uso, e como usar cada um",
      "Acompanhamento do crescimento mês a mês para você ver a evolução",
    ],
    buy: "https://chk.eduzz.com/R9JYGJEY9X",
  },

  topics: [
    { title: "Finalização", text: "Mousse, creme, gelatina: como finalizar do jeito certo e o que não fazer no topo do cabelo.", emoji: "✨" },
    { title: "Escovas & ferramentas", text: "Escova polvo, bola, raquete, pente finalizador — qual usar e como usar (com a trava!).", emoji: "🪮" },
    { title: "Lavagem sem erro", text: "Pré-shampoo, cabelo poroso, cerdas para baixo… os erros que estão travando seus cachos.", emoji: "🚿" },
    { title: "Penteados sem tração", text: "Trança com lenço, meio-preso, coques: beleza sem forçar a raiz.", emoji: "🎀" },
    { title: "Autoestima", text: "Conversas de irmã sobre se enxergar bonita com o cabelo que você tem.", emoji: "💗" },
    { title: "Rotina & fitness", text: "Como manter o cabelo (e a vida) em dia com treino, trabalho e correria.", emoji: "💚" },
  ],

  partner: {
    name: "Ápice Cosméticos",
    coupon: "PRETINHA",
    href: "https://www.apicecosmeticos.com.br/",
    text: "Meus produtos de rotina com desconto usando o cupom",
  },

  marquee: ["Cachos 3B/3C", "Finalização", "Escova polvo", "Projeto Rapunzel", "Rotina capilar", "Autoestima", "Sem tração", "Cabelo poroso"],
};

export type Product = {
  slug: string;
  name: string;
  category: "Planner" | "Escovas" | "Produtos";
  note: string;
  href: string;
  cta: string;
  image?: string;
  badge?: string;
  price?: string;
  store: string;
};

/** Vitrine da lojinha — tudo que a Aline já divulga na bio. Os links levam ao checkout externo. */
export const products: Product[] = [
  {
    slug: "planner-projeto-rapunzel",
    name: "Planner Capilar Projeto Rapunzel",
    category: "Planner",
    note: "Planner + e-book digitais com cronograma, lavagem, finalização e registro de crescimento. Entrega imediata.",
    href: site.planner.buy,
    cta: "Comprar o Planner",
    image: "/img/estrelas.jpg",
    badge: "Mais vendido",
    store: "Eduzz",
  },
  {
    slug: "planner-whatsapp",
    name: "Dúvidas sobre o Planner",
    category: "Planner",
    note: "Fale direto com a equipe da Aline no WhatsApp (atendimento por ordem de mensagem).",
    href: site.whatsapp,
    cta: "Chamar no WhatsApp",
    image: "/img/mala.jpg",
    store: "WhatsApp",
  },
  {
    slug: "escova-definicao",
    name: "Escova de definição",
    category: "Escovas",
    note: "A que mais define os cachos nos meus vídeos — o segredo é usar com a trava.",
    href: "https://mercadolivre.com/sec/1QrzWPy",
    cta: "Comprar no Mercado Livre",
    image: "/img/escova-definicao.jpg",
    badge: "Queridinha",
    store: "Mercado Livre",
  },
  {
    slug: "escova-ricca-flex-curl",
    name: "Escova Ricca Flex Curl",
    category: "Escovas",
    note: "Flexível, ótima para finalização com cerdas para baixo.",
    href: "https://mercadolivre.com/sec/2KbNsRt",
    cta: "Comprar no Mercado Livre",
    store: "Mercado Livre",
  },
  {
    slug: "escova-raquete-flex-pink",
    name: "Escova Raquete Flex Pink Ricca",
    category: "Escovas",
    note: "Para desembaraçar no banho sem quebrar o fio.",
    href: "https://mercadolivre.com/sec/1ChExUS",
    cta: "Comprar no Mercado Livre",
    store: "Mercado Livre",
  },
  {
    slug: "pente-finalizador-marco-boni",
    name: "Pente Finalizador Marco Boni 7604",
    category: "Escovas",
    note: "Divide e finaliza mechas com precisão.",
    href: "https://mercadolivre.com/sec/126xDHP",
    cta: "Comprar no Mercado Livre",
    store: "Mercado Livre",
  },
  {
    slug: "pente-auxiliar-chapinha",
    name: "Pente Auxiliar de Chapinha",
    category: "Escovas",
    note: "Auxilia no alinhamento para quem alterna cachos e escova.",
    href: "https://meli.la/2pyibF4",
    cta: "Ver no Mercado Livre",
    store: "Mercado Livre",
  },
  {
    slug: "apice-cupom",
    name: "Ápice Cosméticos — cupom PRETINHA",
    category: "Produtos",
    note: "Os produtos de rotina que aparecem nos meus vídeos com desconto no site oficial.",
    href: site.partner.href,
    cta: "Usar cupom PRETINHA",
    image: "/img/poroso.jpg",
    badge: "Cupom",
    store: "Ápice",
  },
];
