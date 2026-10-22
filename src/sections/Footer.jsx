import { FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import socials from "../data/socials.json";

const iconos = {
  instagram: FaInstagram,
  tiktok: FaTiktok,
  whatsapp: FaWhatsapp,
  email: FaEnvelope,
};

const secciones = [
  { nombre: "Inicio", url: "#" },
  { nombre: "Catálogo", url: "#catalogo" },
  { nombre: "Preguntas frecuentes", url: "#preguntas" },
];

function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-zinc-950 text-white border-t border-zinc-900 px-4 sm:px-8 pt-16 pb-8 overflow-hidden">
      {/* Efecto de resplandor ambiental en amarillo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Marca */}
          <div className="flex flex-col gap-4">
            <img
              src="/logo-header-removebg-preview.png"
              alt="CC Motos"
              className="h-14 w-auto object-contain self-start"
            />
            <p className="text-sm text-zinc-400 max-w-xs leading-relaxed">
              Tu concesionaria de confianza. Motos 0KM con financiación en
              cuotas fijas y entrega inmediata.
            </p>
          </div>

          {/* Navegación */}
          <nav className="flex flex-col gap-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-yellow-400">
              Secciones
            </h3>
            <ul className="flex flex-col gap-2.5">
              {secciones.map((seccion) => (
                <li key={seccion.nombre}>
                  <a
                    href={seccion.url}
                    className="text-sm text-zinc-400 hover:text-yellow-400 transition-colors"
                  >
                    {seccion.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes sociales */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-yellow-400">
              Seguinos
            </h3>
            <ul className="flex flex-col gap-3">
              {socials.redes.map((red) => {
                const Icono = iconos[red.icono];
                const esEmail = red.url.startsWith("mailto:");

                return (
                  <li key={red.nombre}>
                    <a
                      href={red.url}
                      target={esEmail ? undefined : "_blank"}
                      rel={esEmail ? undefined : "noopener noreferrer"}
                      aria-label={`${red.nombre}: ${red.usuario}`}
                      className="group flex items-center gap-3"
                    >
                      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300">
                        <Icono className="w-4 h-4" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                          {red.nombre}
                        </span>
                        <span className="text-xs text-zinc-500">
                          {red.usuario}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>© {anio} CC Motos. Todos los derechos reservados.</p>
          <p>Financiación en cuotas fijas · Entrega inmediata</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
