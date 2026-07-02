import { useState } from "react";
import { Menu, QrCode, X } from "lucide-react";
import logo from "../assets/logo.png";

interface HeaderProps {
  onShowQR: () => void;
}

export function Header({ onShowQR }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-brand-bg text-brand-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Roco Sushi and Wings"
            className="h-11 w-11 rounded-full bg-white object-cover"
          />
          <div>
            <h1 className="font-display text-lg font-semibold leading-tight">
              Roco Sushi <span className="text-brand-orange">and Wings</span>
            </h1>
            <p className="text-xs text-white/60">Mazatlán, Sin.</p>
          </div>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-full p-2 text-white/80 transition duration-300 ease-theater hover:bg-white/10"
            aria-label="Menú"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-12 w-56 overflow-hidden rounded-xl bg-brand-surface shadow-2xl ring-1 ring-white/10">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  onShowQR();
                }}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-white transition duration-300 ease-theater hover:bg-white/10"
              >
                <QrCode className="h-4 w-4 text-brand-orange" />
                Ver código QR
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
