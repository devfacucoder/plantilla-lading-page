import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const enlaces = [
  { nombre: "Inicio", url: "#inicio" },
  { nombre: "Catálogo", url: "#catalogo" },
  { nombre: "Preguntas", url: "#preguntas" },
  { nombre: "Contacto", url: "#contacto" },
];

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const alternarMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#inicio" aria-label="CC Motos - Inicio" className="h-14 shrink-0">
        <img
            className="h-full w-auto object-contain"
          src="logo-header-removebg-preview.png"
            alt="CC Motos"
        />
        </a>

        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {enlaces.map((enlace) => (
            <a
              key={enlace.nombre}
              href={enlace.url}
              className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-yellow-400 transition-colors duration-300"
            >
              {enlace.nombre}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="#catalogo"
          className="hidden md:inline-flex items-center px-6 py-2.5 text-sm font-extrabold uppercase text-black bg-yellow-400 hover:bg-yellow-300 active:scale-95 transition-all rounded-xl shadow-lg shadow-yellow-400/20"
        >
          Ver Catálogo
        </a>

        {/* Botón menú mobile */}
        <button
          type="button"
          onClick={alternarMenu}
          aria-expanded={menuAbierto}
          aria-controls="menu-mobile"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-zinc-800 text-yellow-400 hover:border-yellow-400/60 hover:bg-yellow-400/10 active:scale-95 transition-all"
        >
          {menuAbierto ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Navegación mobile */}
      <nav
        id="menu-mobile"
        className={`md:hidden overflow-hidden bg-black border-t border-zinc-900 transition-all duration-300 ease-out ${
          menuAbierto ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {enlaces.map((enlace) => (
            <li key={enlace.nombre}>
              <a
                href={enlace.url}
                onClick={cerrarMenu}
                className="block px-4 py-3 text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-yellow-400 hover:bg-yellow-400/5 rounded-xl transition-colors duration-300"
              >
                {enlace.nombre}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#catalogo"
              onClick={cerrarMenu}
              className="block px-4 py-3 text-center text-sm font-extrabold uppercase text-black bg-yellow-400 hover:bg-yellow-300 rounded-xl transition-colors"
            >
              Ver Catálogo
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
