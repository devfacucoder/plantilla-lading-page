import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const preguntas = [
  {
    pregunta: "¿Qué necesito para financiar una moto?",
    respuesta:
      "Solo necesitás DNI, comprobante de domicilio y demostrar ingresos. La aprobación es en el acto y no requerís tarjeta de crédito.",
  },
  {
    pregunta: "¿Cuáles son los requisitos para la aprobación?",
    respuesta:
      "Ser mayor de 18 años, contar con ingresos comprobables y no registrar deudas en el Veraz. En pocos minutos te confirmamos si calificás.",
  },
  {
    pregunta: "¿Se puede financiar sin anticipo?",
    respuesta:
      "Sí, trabajamos con planes 100% financiados en cuotas fijas. También podés entregar tu moto usada como parte de pago.",
  },
  {
    pregunta: "¿En cuánto tiempo recibo la moto?",
    respuesta:
      "Una vez aprobada la financiación, la entrega es inmediata en el local. Si elegís una unidad con patentamiento, coordinamos en 24 a 48 horas.",
  },
  {
    pregunta: "¿Las motos tienen garantía oficial?",
    respuesta:
      "Todas nuestras unidades son 0KM y cuentan con la garantía oficial del fabricante, además de nuestro servicio de postventa.",
  },
  {
    pregunta: "¿Puedo cuotificar una moto usada?",
    respuesta:
      "Sí, también ofrecemos financiación para motos usadas seleccionadas, siempre que aprueben la revisión técnica previa.",
  },
];

function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="preguntas"
      className="relative scroll-mt-20 w-full min-h-screen bg-black text-white overflow-hidden px-4 sm:px-8 py-20"
    >
      {/* Efecto de resplandor ambiental en amarillo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-12">
        {/* Encabezado de la sección */}
        <header className="flex flex-col items-center text-center gap-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-black tracking-widest text-yellow-400 uppercase bg-yellow-400/10 border border-yellow-400/30 rounded-full">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Resolvé tus dudas
          </div>

          <h2 className="text-4xl sm:text-6xl font-mono uppercase tracking-tight leading-none">
            Preguntas <span className="text-yellow-400">Frecuentes</span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg max-w-md font-sans">
            Todo lo que necesitás saber antes de subirte a tu próxima moto.
          </p>
        </header>

        {/* Acordeón de preguntas */}
        <ul className="flex flex-col gap-3 w-full">
          {preguntas.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <li
                key={item.pregunta}
                className={`bg-zinc-900 border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen
                    ? "border-yellow-400/60 shadow-lg shadow-yellow-400/5"
                    : "border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-respuesta-${index}`}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                >
                  <span
                    className={`font-bold text-base sm:text-lg transition-colors duration-300 ${
                      isOpen ? "text-yellow-400" : "text-white"
                    }`}
                  >
                    {item.pregunta}
          </span>

                  <FaChevronDown
                    className={`shrink-0 text-yellow-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={`faq-respuesta-${index}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm sm:text-base text-zinc-400 leading-relaxed">
                      {item.respuesta}
                    </p>
                  </div>
                </div>
        </li>
            );
          })}
      </ul>
      </div>
    </section>
  );
}

export default Questions;
