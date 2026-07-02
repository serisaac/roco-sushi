import { ArrowRight, Flame } from "lucide-react";
import type { MenuCategory, MenuItem } from "../data/menu";
import { isSpicy } from "../lib/badges";

interface ProductCardProps {
  item: MenuItem;
  category: MenuCategory;
  index: number;
}

export function ProductCard({ item, category, index }: ProductCardProps) {
  const spicy = isSpicy(item);

  return (
    <li
      className="animate-fade-in-up overflow-hidden rounded-2xl bg-brand-surface shadow-lg ring-1 ring-white/10 transition duration-300 ease-theater hover:-translate-y-1 hover:shadow-2xl"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={category.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {spicy && (
          <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-brand-orange px-2.5 py-1 text-xs font-semibold text-white shadow">
            <Flame className="h-3 w-3" /> Picante
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="font-display font-semibold text-white">{item.name}</p>
        {item.description && (
          <p className="mt-1 line-clamp-2 text-sm leading-snug text-brand-muted">
            {item.description}
          </p>
        )}
        <div className="mt-3 flex items-center justify-between">
          <span className="font-display text-lg font-bold text-brand-gold">
            ${item.price}
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange text-white">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </li>
  );
}
