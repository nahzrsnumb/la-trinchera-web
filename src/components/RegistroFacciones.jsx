import React from "react";

const teamsData = [
  {
    id: 1,
    nombre: "Lobos de Acero",
    especialidad: "Asalto / CQB",
    miembros: 12,
    lema: "Primeros en entrar, últimos en salir.",
  },
  {
    id: 2,
    nombre: "Cuervos Negros",
    especialidad: "Reconocimiento / Sniper",
    miembros: 8,
    lema: "Ven sin ser vistos.",
  },
  {
    id: 3,
    nombre: "Guardia Espectral",
    especialidad: "Defensa / Soporte",
    miembros: 15,
    lema: "El muro no cae.",
  },
  {
    id: 4,
    nombre: "Furia Carmesí",
    especialidad: "Flanqueo Rápido",
    miembros: 10,
    lema: "Velocidad es violencia.",
  },
];

export default function RegistroFacciones() {
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
            // Unidades Registradas
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Registro de <span className="text-[#7a8c4f]">Facciones</span>
          </h2>
          <div className="mt-4 mx-auto h-[2px] w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamsData.map((team) => (
            <article
              key={team.id}
              className="group relative bg-[#0f120e] border border-neutral-800 hover:border-[#7a8c4f] transition-colors duration-300 rounded-md p-5 flex flex-col items-center text-center"
            >
              {/* Placeholder de logo */}
              <div className="relative h-24 w-24 bg-neutral-800 border border-neutral-700 rounded-sm flex items-center justify-center group-hover:border-[#7a8c4f] transition-colors">
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                  LOGO
                </span>
                <span className="absolute top-1 right-1 h-1.5 w-1.5 bg-orange-500 rounded-full" />
              </div>

              <h3 className="mt-4 text-base font-bold uppercase tracking-wide text-white">
                {team.nombre}
              </h3>

              <span className="mt-2 text-[10px] font-mono bg-[#7a8c4f]/10 text-[#7a8c4f] px-2 py-1 rounded uppercase tracking-wider">
                {team.especialidad}
              </span>

              <p className="mt-4 text-xs text-neutral-500 italic">"{team.lema}"</p>

              <div className="mt-4 pt-4 border-t border-neutral-800 w-full flex justify-between font-mono text-xs">
                <span className="text-neutral-500 uppercase">Efectivos</span>
                <span className="text-orange-500 font-bold">{team.miembros}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}