import CardProduct from "../components/layout/CardProduct";
import CarruselImgs from "../components/layout/CarruselImgs";
import motosData from "../data/motos.json";

const motoDestacada =
  motosData.motos.find((moto) => moto.destacada) ?? motosData.motos[0];

function Start() {
  return (
    <section id="inicio" className="relative scroll-mt-20 w-full min-h-[92vh] bg-black text-white overflow-hidden flex items-center justify-center px-4 sm:px-8 py-10">
      
      {/* Efecto de resplandor ambiental en amarillo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
        
        {/* Columna Izquierda: Información Principal y CTAs (5 columnas) */}
        <div className="lg:col-span-5 flex flex-col items-start gap-6 text-left">
          
          {/* Tag de Estado */}
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-black tracking-widest text-yellow-400 uppercase bg-yellow-400/10 border border-yellow-400/30 rounded-full">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Concesionaria Oficial
          </div>

          {/* Headline impactante */}
          <h1 className="text-4xl sm:text-6xl font-mono uppercase tracking-tight leading-none">
            Tu Moto <span className="text-yellow-400">0KM</span> <br />
            al mejor precio
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg max-w-md font-sans">
            Financiación en cuotas fijas, aprobación en el acto y entrega inmediata. Súbete a tu próxima moto hoy.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-4 w-full sm:w-auto pt-2">
            <a
              href="#catalogo"
              className="w-full sm:w-auto text-center px-8 py-3.5 font-extrabold text-black uppercase bg-yellow-400 hover:bg-yellow-300 active:scale-95 transition-all rounded-xl shadow-lg shadow-yellow-400/20"
            >
              Ver Catálogo
            </a>
            <a
              href="#contacto"
              className="w-full sm:w-auto text-center px-8 py-3.5 font-bold text-white uppercase border border-zinc-800 hover:border-yellow-400 hover:text-yellow-400 active:scale-95 transition-all rounded-xl"
            >
              Cotizar Financiación
            </a>
          </div>

          {/* Indicadores / Ventajas clave */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-900 w-full max-w-md mt-2">
            <div>
              <p className="text-xl sm:text-2xl font-black text-yellow-400">100%</p>
              <p className="text-[11px] text-zinc-400 uppercase font-bold tracking-wider">Financiado</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-yellow-400">0km</p>
              <p className="text-[11px] text-zinc-400 uppercase font-bold tracking-wider">Garantía Oficial</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-yellow-400">24hs</p>
              <p className="text-[11px] text-zinc-400 uppercase font-bold tracking-wider">Entrega</p>
            </div>
          </div>
        </div>

        {/* Columna Central: Slider Principal Cuadrado (4 columnas) */}
        <div className="lg:col-span-4 flex items-center justify-center w-full">
          <div className="relative w-full max-w-[450px] aspect-square rounded-2xl p-[2px] bg-gradient-to-b from-yellow-400/80 via-yellow-400/20 to-transparent shadow-2xl shadow-yellow-400/10">
            <div className="w-full h-full bg-zinc-950 rounded-[14px] overflow-hidden flex items-center justify-center p-2">
              <CarruselImgs />
            </div>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta Destacada / Oferta del Día (3 columnas) */}
        <div className="lg:col-span-3 flex flex-col items-center lg:items-end w-full">
          <div className="w-full max-w-[280px]">
            <p className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-3 text-center lg:text-left">
              ★ Destacado de la Semana
            </p>
            <CardProduct
              name={motoDestacada.nombre}
              price={motoDestacada.precio}
              category={motoDestacada.categoria}
              image={motoDestacada.imagen}
              condition={motoDestacada.condicion}
              href={`/producto/${motoDestacada.id}`}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Start;