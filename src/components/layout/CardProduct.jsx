function CardProduct({
  name,
  price,
  category,
  image,
  condition,
  href,
  onBuy = () => {},
}) {
  const url = href ?? `/producto/${name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <article className="group relative w-full max-w-[280px] h-[380px] bg-zinc-900 border border-zinc-800 hover:border-yellow-400 rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-400/10 transition-all duration-300 flex flex-col justify-between shrink-0">
      
      {/* Contenedor de la Imagen con Badge */}
      <div className="relative h-3/5 w-full bg-zinc-950 p-4 flex items-center justify-center overflow-hidden">
        {/* Etiqueta / Categoría */}
        <span className="absolute top-3 left-3 bg-yellow-400 text-black text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider z-10 shadow-md">
          {category}
        </span>

        {/* Imagen con animación al hacer hover */}
        <figure className="w-full h-full flex items-center justify-center">
          <img
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 ease-out"
            src={image}
            alt={name}
            loading="lazy"
          />
        </figure>
      </div>

      {/* Contenido / Información */}
      <div className="p-4 flex flex-col justify-between flex-1 bg-zinc-900 border-t border-zinc-800">
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors line-clamp-1">
            <a href={url}>
              {name}
            </a>
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">{condition}</p>
        </div>

        {/* Precio y Botón de Acción */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-zinc-800/80">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">Financiación</span>
            <span className="text-xl font-extrabold text-yellow-400 tracking-tight">
              {price}
            </span>
          </div>

          <button
            onClick={onBuy}
            className="p-2.5 bg-yellow-400 hover:bg-yellow-300 text-black rounded-xl font-bold transition-colors shadow-md active:scale-95"
            aria-label={`Consultar por ${name}`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

export default CardProduct;