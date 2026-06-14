import React from "react";

const modosData = [
  {
    id: 1,
    nombre: "Rescate de VIP",
    codigo: "OP-VIP",
    descripcion: "Extracción de objetivo de alto valor bajo fuego enemigo.",
    jugadores: "10-20",
    dificultad: "Alta",
    estado: "Próximamente",
  },
  {
    id: 2,
    nombre: "Dominación",
    codigo: "OP-DOM",
    descripcion: "Control y defensa de puntos estratégicos del mapa.",
    jugadores: "12-24",
    dificultad: "Media",
    estado: "Próximamente",
  },
  {
    id: 3,
    nombre: "Desactivación",
    codigo: "OP-BOMB",
    descripcion: "Plantar o desactivar el artefacto antes del tiempo límite.",
    jugadores: "8-16",
    dificultad: "Alta",
    estado: "Próximamente",
  },
  {
    id: 4,
    nombre: "Último en Pie",
    codigo: "OP-FFA",
    descripcion: "Todos contra todos. Sin respawn, sin aliados.",
    jugadores: "6-12",
    dificultad: "Extrema",
    estado: "Próximamente",
  },
];

export default function ModosDeJuego() {
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
            // Protocolos de Combate
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Modos de <span className="text-[#7a8c4f]">Juego</span>
          </h2>
          <div className="mt-4 mx-auto h-[2px] w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modosData.map((modo) => (
            <article
              key={modo.id}
              className="group relative bg-[#0f120e] border border-neutral-800 hover:border-orange-500 transition-colors duration-300 rounded-md p-5 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#7a8c4f] tracking-widest">
                  {modo.codigo}
                </span>
                <span className="text-[10px] font-mono bg-orange-500/10 text-orange-500 px-2 py-0.5 rounded uppercase">
                  {modo.estado}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-bold uppercase tracking-wide text-white">
                {modo.nombre}
              </h3>
              <p className="mt-2 text-sm text-neutral-400 flex-1">
                {modo.descripcion}
              </p>

              <div className="mt-5 pt-4 border-t border-neutral-800 space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-neutral-500 uppercase">Operadores</span>
                  <span className="text-white">{modo.jugadores}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 uppercase">Dificultad</span>
                  <span className="text-orange-500">{modo.dificultad}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}