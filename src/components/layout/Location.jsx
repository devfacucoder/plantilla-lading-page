function Location() {
  return (
    <section className="w-full bg-zinc-950 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Información del Negocio */}
        <div className="flex flex-col gap-4">
          <span className="text-yellow-400 font-extrabold uppercase text-xs tracking-widest">
            Visítanos
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            Nuestra <span className="text-yellow-400">Sucursal</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Ven a conocer todos nuestros modelos 0km en exhibición. Contamos con
            estacionamiento exclusivo para clientes y prueba de manejo.
          </p>

          <div className="space-y-3 pt-2 text-sm">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-yellow-400/10 text-yellow-400 rounded-lg font-bold">
                📍
              </span>
              <span>Av. Principal 1234, Ciudad</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="p-2 bg-yellow-400/10 text-yellow-400 rounded-lg font-bold">
                🕒
              </span>
              <span>Lunes a Sábados: 09:00 - 20:00 hs</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="p-2 bg-yellow-400/10 text-yellow-400 rounded-lg font-bold">
                📞
              </span>
              <span>+54 11 1234-5678</span>
            </div>
          </div>
        </div>

        {/* Mapa Embebido */}
        <div className="w-full h-[350px] sm:h-[400px] rounded-2xl overflow-hidden border border-zinc-800 shadow-xl relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.52525876821718!2d-68.52542320358953!3d-31.540521657286224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968140279b336bf1%3A0xc22ed4a72d16a75d!2sCC%20Motos!5e0!3m2!1ses-419!2sar!4v1792698197007!5m2!1ses-419!2sar"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500 border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Location;