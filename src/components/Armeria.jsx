import React from "react";

const replicasData = [
  {
    id: 1,
    nombre: "M4A1 Carbine",
    tipo: "Rifle de Asalto",
    fps: 320,
    peso: "0.25g",
    rareza: "Estándar",
    disponible: true,
  },
  {
    id: 2,
    nombre: "MP5 SD6",
    tipo: "Subfusil (SMG)",
    fps: 300,
    peso: "0.25g",
    rareza: "Estándar",
    disponible: true,
  },
  {
    id: 3,
    nombre: "AK-74U",
    tipo: "Rifle Compacto",
    fps: 325,
    peso: "0.25g",
    rareza: "Avanzado",
    disponible: true,
  },
  {
    id: 4,
    nombre: "G36C",
    tipo: "Rifle de Asalto",
    fps: 315,
    peso: "0.25g",
    rareza: "Avanzado",
    disponible: false,
  },
  {
    id: 5,
    nombre: "Glock 18C",
    tipo: "Pistola Secundaria",
    fps: 280,
    peso: "0.20g",
    rareza: "Estándar",
    disponible: true,
  },
  {
    id: 6,
    nombre: "M870 Shotgun",
    tipo: "Escopeta",
    fps: 330,
    peso: "0.25g",
    rareza: "Élite",
    disponible: false,
  },
];

const rarezaColor = {
  Estándar: "text-neutral-400 border-neutral-700",
  Avanzado: "text-[#7a8c4f] border-[#7a8c4f]/40",
  Élite: "text-orange-500 border-orange-500/40",
};

export default function Armeria() {
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
            // Inventario Disponible
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Arme<span className="text-[#7a8c4f]">ría</span>
          </h2>
          <p className="mt-3 text-sm text-neutral-500 font-mono">
            Réplicas asignables a Operador Rental
          </p>
          <div className="mt-4 mx-auto h-[2px] w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {replicasData.map((rep) => (
            <article
              key={rep.id}
              className={`group relative bg-[#0f120e] border rounded-md overflow-hidden transition-colors duration-300 ${
                rep.disponible
                  ? "border-neutral-800 hover:border-orange-500"
                  : "border-neutral-900 opacity-60"
              }`}
            >
              {/* Slot de imagen estilo inventario */}
              <div className="relative h-40 bg-neutral-900 border-b border-neutral-800 flex items-center justify-center">
                <span className="font-mono text-xs text-neutral-600 uppercase tracking-widest">
                  [ RÉPLICA ]
                </span>
                {/* Etiqueta de rareza */}
                <span
                  className={`absolute top-2 left-2 text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider bg-black/60 ${
                    rarezaColor[rep.rareza]
                  }`}
                >
                  {rep.rareza}
                </span>
                {/* Estado */}
                <span
                  className={`absolute top-2 right-2 text-[10px] font-mono px-2 py-0.5 rounded uppercase ${
                    rep.disponible
                      ? "bg-[#7a8c4f]/15 text-[#7a8c4f]"
                      : "bg-red-500/10 text-red-500"
                  }`}
                >
                  {rep.disponible ? "Disponible" : "En uso"}
                </span>
              </div>

              {/* Datos */}
              <div className="p-5">
                <h3 className="text-lg font-bold uppercase tracking-wide text-white">
                  {rep.nombre}
                </h3>
                <p className="text-xs text-neutral-500 uppercase tracking-wider mt-1">
                  {rep.tipo}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="bg-black/40 border border-neutral-800 rounded-sm p-2 text-center">
                    <p className="text-neutral-500 uppercase">FPS</p>
                    <p className="text-orange-500 text-lg font-bold">{rep.fps}</p>
                  </div>
                  <div className="bg-black/40 border border-neutral-800 rounded-sm p-2 text-center">
                    <p className="text-neutral-500 uppercase">Balín</p>
                    <p className="text-white text-lg font-bold">{rep.peso}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}