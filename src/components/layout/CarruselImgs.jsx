import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import motosData from "../../data/motos.json";

const slides = motosData.motos.filter((moto) => moto.carrusel);

function CarruselImgs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-full flex justify-center items-center overflow-hidden rounded-xl bg-zinc-950 group">
      
      {/* Botón Anterior */}
      <button
        onClick={prevSlide}
        aria-label="Anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 cursor-pointer bg-black/60 hover:bg-yellow-400 hover:text-black p-3 rounded-full text-white transition-all duration-300 opacity-80 group-hover:opacity-100 shadow-md backdrop-blur-sm"
      >
        <FaChevronLeft className="text-lg" />
      </button>

      {/* Botón Siguiente */}
      <button
        onClick={nextSlide}
        aria-label="Siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 cursor-pointer bg-black/60 hover:bg-yellow-400 hover:text-black p-3 rounded-full text-white transition-all duration-300 opacity-80 group-hover:opacity-100 shadow-md backdrop-blur-sm"
      >
        <FaChevronRight className="text-lg" />
      </button>

      {/* Contenedor de las imágenes */}
      <div className="w-full h-full relative">
        {slides.map((moto, index) => {
          const isActive = index === currentIndex;

          return (
            <div
              key={moto.id}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                isActive
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-95 z-0 pointer-events-none"
              }`}
            >
              {/* Overlay degradado inferior para legibilidad del texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />

              {/* Tag / Categoría sobre la imagen */}
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-yellow-400 text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-md tracking-wider shadow-md">
                  {moto.categoria}
                </span>
              </div>

              {/* Título de la moto en la foto */}
              <div className="absolute bottom-6 left-4 z-20">
                <h3 className="text-xl font-extrabold text-white uppercase tracking-wide drop-shadow-md">
                  {moto.nombre}
                </h3>
              </div>

              {/* Imagen con ajuste responsivo */}
              <img
                src={moto.imagen}
                alt={moto.nombre}
                className="w-full h-full object-cover object-center"
              />
            </div>
          );
        })}
      </div>

      {/* Indicadores lineales (Pulsadores en la parte inferior) */}
      <div className="absolute bottom-3 right-4 z-30 flex gap-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir a imagen ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-6 bg-yellow-400"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

    </div>
  );
}

export default CarruselImgs;