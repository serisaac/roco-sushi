import type { MenuCategory } from "../data/menu";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  category: MenuCategory;
  items: MenuCategory["items"];
  query: string;
}

export function ProductGrid({ category, items, query }: ProductGridProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      <h2 className="mb-1 flex items-center gap-2 font-display text-2xl font-bold text-white">
        <span>{category.icon}</span> {category.label}
      </h2>
      {category.note && (
        <p className="mb-4 text-sm italic text-brand-muted">{category.note}</p>
      )}

      {items.length === 0 ? (
        <p className="py-10 text-center text-sm text-brand-muted">
          No encontramos resultados para "{query}".
        </p>
      ) : (
        <ul
          key={category.id}
          className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, index) => (
            <ProductCard key={item.id} item={item} category={category} index={index} />
          ))}
        </ul>
      )}
    </section>
  );
}
