import { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import { FaWhatsapp } from "react-icons/fa";
import socials from "./data/socials.json";
//section
import Start from "./sections/Start";
import Questions from "./sections/Questions";
import Catalogo from "./sections/Catalogo";
import SobreMi from "./sections/SobreMi";
import Footer from "./sections/Footer";

const whatsapp = socials.redes.find((red) => red.icono === "whatsapp");

function App() {
  return (
    <div className="">
      <a
        href={whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Consultar por WhatsApp"
        className="group fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50 flex items-center gap-3"
      >
        {/* Tooltip (desktop) */}
        <span className="hidden sm:block max-w-0 overflow-hidden whitespace-nowrap rounded-xl bg-zinc-900 border border-zinc-800 px-0 py-2.5 text-sm font-bold text-white opacity-0 transition-all duration-300 group-hover:max-w-[240px] group-hover:px-4 group-hover:opacity-100">
          Consultanos por WhatsApp
        </span>

        {/* Botón flotante */}
        <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-white shadow-lg shadow-black/40 active:scale-95 transition-all duration-300">
          <FaWhatsapp className="relative w-7 h-7" />
        </span>
      </a>

      <Header />
      <main>
        <Start />

        <Questions />

        <Catalogo />

        <SobreMi />
      </main>
      <Footer />
    </div>
  );
}

export default App;
