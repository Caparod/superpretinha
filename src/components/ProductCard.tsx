import type { Product } from "@/data/site";
import { ArrowIcon } from "./Icons";

const categoryEmoji: Record<Product["category"], string> = {
  Planner: "📒",
  Escovas: "🪮",
  Produtos: "🧴",
};

export function ProductCard({ product: p }: { product: Product }) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener"
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-plum/8 bg-white shadow-soft transition hover:-translate-y-1 hover:border-pink/50 hover:shadow-glow"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-blush via-cream to-lilac">
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        ) : (
          <div className="flex h-full items-center justify-center text-7xl drop-shadow-md transition duration-500 group-hover:scale-110">
            {categoryEmoji[p.category]}
          </div>
        )}
        {p.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-pink-deep to-coral px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-soft">
            {p.badge}
          </span>
        )}
        <span className="absolute right-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-plum/70 backdrop-blur">
          {p.store}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-bold uppercase tracking-wider text-pink-deep">{p.category}</p>
        <h3 className="font-display mt-1 text-xl font-semibold leading-tight">{p.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-plum/65">{p.note}</p>
        <span className="mt-5 inline-flex items-center justify-between rounded-full bg-plum px-5 py-3 text-sm font-bold text-cream transition group-hover:bg-pink-deep">
          {p.cta} <ArrowIcon className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
}
