import { useMemo, useState } from "react";
import { menu } from "./data/menu";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SearchBar } from "./components/SearchBar";
import { CategoryPills } from "./components/CategoryPills";
import { ProductGrid } from "./components/ProductGrid";
import { QRModal } from "./components/QRModal";
import { Footer } from "./components/Footer";

function App() {
  const [activeCategoryId, setActiveCategoryId] = useState(menu[0].id);
  const [query, setQuery] = useState("");
  const [showQR, setShowQR] = useState(false);

  const activeCategory = menu.find((c) => c.id === activeCategoryId) ?? menu[0];

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return activeCategory.items;
    return activeCategory.items.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q),
    );
  }, [activeCategory, query]);

  const selectCategory = (id: string) => {
    setActiveCategoryId(id);
    setQuery("");
  };

  return (
    <div className="min-h-svh bg-brand-bg">
      <Header onShowQR={() => setShowQR(true)} />

      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <Hero />

      <CategoryPills categories={menu} activeId={activeCategoryId} onSelect={selectCategory} />

      <ProductGrid category={activeCategory} items={filteredItems} query={query} />

      <Footer />

      {showQR && <QRModal onClose={() => setShowQR(false)} />}
    </div>
  );
}

export default App;
