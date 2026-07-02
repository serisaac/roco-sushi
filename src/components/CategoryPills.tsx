import { useEffect, useRef } from "react";
import type { MenuCategory } from "../data/menu";

interface CategoryPillsProps {
  categories: MenuCategory[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function CategoryPills({ categories, activeId, onSelect }: CategoryPillsProps) {
  const activeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeId]);

  return (
    <div className="bg-brand-bg">
      <div className="scrollbar-hide mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
        {categories.map((category) => {
          const isActive = category.id === activeId;
          return (
            <button
              key={category.id}
              ref={isActive ? activeRef : null}
              type="button"
              onClick={() => onSelect(category.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition duration-300 ease-theater ${
                isActive
                  ? "bg-brand-orange text-white shadow"
                  : "bg-brand-surface text-white/70 hover:bg-white/10"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
