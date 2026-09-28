import type { Metadata } from "next";
import { Contact, Footer, Header } from "@/components/Sections";
import { ProductCard } from "@/components/ProductCard";
import { products, site } from "@/data/site";
import { SparkleIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: `Lojinha · ${site.name}`,
  description:
    "Planner Projeto Rapunzel, escovas e produtos que a Aline Reitter usa de verdade nos cachos 3B/3C — com links e cupons oficiais.",
};

const categories: { key: (typeof products)[number]["category"]; title: string; text: string }[] = [
  { key: "Planner", title: "Projeto Rapunzel", text: "O método completo, digital, com entrega imediata." },
  { key: "Escovas", title: "Minhas escovas", text: "As mesmas que aparecem nos vídeos. Links oficiais do Mercado Livre." },
  { key: "Produtos", title: "Produtos & cupons", text: "Parcerias com desconto para as irmãs." },
];

export default function LojaPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden">
          <div className="blob -left-24 top-0 h-96 w-96 bg-pink" />
          <div className="blob right-0 top-10 h-96 w-96 bg-gold opacity-40" />
          <div className="relative mx-auto max-w-6xl px-5 pb-12 pt-16 md:pt-20">
            <p className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-pink-deep">
              <SparkleIcon className="h-3.5 w-3.5" /> Lojinha da Super Pretinha
            </p>
            <h1 className="font-display mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Tudo que eu uso, <span className="grad-text">num lugar só</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-plum/70">
              Nada de lista infinita: só o que funciona em cachos 3B/3C. Os botões levam para as lojas
              oficiais — o cupom <strong className="text-pink-deep">{site.partner.coupon}</strong> vale no site da Ápice.
            </p>
          </div>
        </section>

        {categories.map((c) => {
          const list = products.filter((p) => p.category === c.key);
          if (!list.length) return null;
          return (
            <section key={c.key} className="mx-auto max-w-6xl px-5 py-12">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-deep">{c.key}</p>
                  <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{c.title}</h2>
                </div>
                <p className="text-plum/60">{c.text}</p>
              </div>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </section>
          );
        })}

        <div className="pt-12">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
