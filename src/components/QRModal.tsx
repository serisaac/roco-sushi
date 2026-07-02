import { X } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

interface QRModalProps {
  onClose: () => void;
}

export function QRModal({ onClose }: QRModalProps) {
  const url = window.location.origin + window.location.pathname;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-sm flex-col items-center gap-6 rounded-3xl bg-brand-surface p-8 text-center shadow-2xl ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-white/60 transition duration-300 ease-theater hover:bg-white/10 hover:text-white"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 className="font-display text-2xl font-semibold text-white">
          Escanea para ver el menú
        </h2>
        <div className="rounded-2xl bg-white p-6">
          <QRCodeSVG value={url} size={200} fgColor="#0f0f0f" level="M" />
        </div>
        <p className="text-sm text-brand-muted">
          Coloca este código en las mesas para que los clientes vean el menú
          digital desde su celular.
        </p>
      </div>
    </div>
  );
}
