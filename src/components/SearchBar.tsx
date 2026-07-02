import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Busca un platillo…"
        className="w-full rounded-full border border-white/10 bg-brand-surface py-3 pl-10 pr-4 text-sm text-white placeholder:text-brand-muted focus:border-brand-orange focus:outline-none"
      />
    </div>
  );
}
