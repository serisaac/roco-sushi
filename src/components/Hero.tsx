import heroImage from "../assets/categories/especiales.jpg";

export function Hero() {
  return (
    <div className="relative h-48 w-full overflow-hidden sm:h-64 lg:h-72">
      <img
        src={heroImage}
        alt="Roco Sushi and Wings"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 text-center sm:p-6">
        <h2 className="font-display text-xl font-bold text-white drop-shadow sm:text-3xl">
          ¿Qué se te antoja hoy?
        </h2>
        <p className="mt-1 text-xs text-white/80 sm:text-sm">
          Descubre nuestras creaciones de sushi y alitas
        </p>
      </div>
    </div>
  );
}
