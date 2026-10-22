import CardProduct from "../components/layout/CardProduct";
import motosData from "../data/motos.json";

function Catalogo() {
  return (
    <section
      id="catalogo"
      className="relative scroll-mt-20 w-full min-h-screen bg-black text-white overflow-hidden px-4 sm:px-8 py-20"
    >
      {/* Efecto de resplandor ambiental en amarillo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-12">
        {/* Encabezado de la sección */}
        <header className="flex flex-col items-center text-center gap-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-black tracking-widest text-yellow-400 uppercase bg-yellow-400/10 border border-yellow-400/30 rounded-full">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Stock Disponible
          </div>

          <h3 className="text-4xl sm:text-6xl font-mono uppercase tracking-tight leading-none">
            Catálogo de <span className="text-yellow-400">Motos 0KM</span>
          </h3>

          <p className="text-zinc-400 text-base sm:text-lg max-w-md font-sans">
            Elegí la tuya y consultá sin compromiso. Financiación en cuotas
            fijas y entrega inmediata.
          </p>
        </header>

        {/* Grilla de productos */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
          {motosData.motos.map((moto) => (
            <li key={moto.id} className="w-full flex justify-center">
              <CardProduct
                name={moto.nombre}
                price={moto.precio}
                category={moto.categoria}
                image={moto.imagen}
                condition={moto.condicion}
                href={`/producto/${moto.id}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Catalogo;
