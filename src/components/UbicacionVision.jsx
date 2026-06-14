import React from "react";

const intelData = {
  coordenadas: "35°25'34\"S 71°39'19\"O",
  ciudad: "Talca, Región del Maule",
  instrucciones: [
    "Acceso por Ruta K-25, desvío km 12 hacia sector rural.",
    "Punto de reunión en portón verde con señalética táctica.",
    "Estacionamiento interno habilitado para operadores.",
    "Llegada recomendada 30 min antes del briefing.",
  ],
};

export default function UbicacionVision() {
  return (
    <section className="relative bg-[#0a0c0a] text-neutral-200 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#4d5d3a 1px, transparent 1px), linear-gradient(90deg, #4d5d3a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-xs tracking-[0.4em] text-orange-500 font-mono mb-3 uppercase">
            // Coordenadas de Operación
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Ubicación y <span className="text-[#7a8c4f]">Visión</span>
          </h2>
          <div className="mt-4 mx-auto h-[2px] w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Coordenadas e instrucciones */}
          <div className="bg-[#0f120e] border border-neutral-800 rounded-md p-6">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <h3 className="text-lg font-bold uppercase tracking-wide text-white">
                Punto de Despliegue
              </h3>
              <span className="font-mono text-2xl font-extrabold text-[#7a8c4f] opacity-60">
                ◎
              </span>
            </div>

            <div className="mt-5 bg-black/40 border border-neutral-800 rounded-sm p-4">
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">
                Coordenadas GPS
              </p>
              <p className="font-mono text-xl text-orange-500 font-bold">
                {intelData.coordenadas}
              </p>
              <p className="text-sm text-neutral-400 mt-1">{intelData.ciudad}</p>
            </div>

            <p className="mt-6 text-xs font-mono text-orange-500 uppercase tracking-widest mb-3">
              Instrucciones Tácticas de Llegada
            </p>
            <ul className="space-y-2.5">
              {intelData.instrucciones.map((paso, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-400">
                  <span className="font-mono text-[#7a8c4f] font-bold flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{paso}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visión */}
          <div className="bg-[#0f120e] border border-neutral-800 rounded-md p-6 flex flex-col">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <h3 className="text-lg font-bold uppercase tracking-wide text-white">
                Visión del Campo
              </h3>
              <span className="font-mono text-2xl font-extrabold text-orange-500 opacity-60">
                ★
              </span>
            </div>

            <div className="mt-6 space-y-4 text-neutral-300 leading-relaxed flex-1">
              <p>
                <span className="text-[#7a8c4f] font-bold">La Trinchera Oficial</span> no
                es solo un campo: es el estándar de evolución del Airsoft táctico en
                la Región del Maule.
              </p>
              <p className="text-sm text-neutral-400">
                Construimos un entorno donde la disciplina, el realismo y el juego
                limpio definen al operador. Cada partida está diseñada para elevar el
                nivel competitivo y proyectar superioridad operativa.
              </p>
              <p className="text-sm text-neutral-400">
                Nuestra misión: consolidar una comunidad de élite, con infraestructura
                profesional y reglas claras que posicionen a Talca como referente
                nacional.
              </p>
            </div>

            <div className="mt-6 border-l-2 border-orange-500 pl-4">
              <p className="font-mono text-sm text-white italic">
                "El terreno se respeta. El operador se forja."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}