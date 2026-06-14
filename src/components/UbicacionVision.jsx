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
          {/* Instrucciones */}
          <div className="bg-[#0f120e] border border-neutral-800 rounded-md p-6">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <h3 className="text-lg font-bold uppercase tracking-wide text-white">
                Protocolo de Llegada
              </h3>
              <span className="font-mono text-2xl font-extrabold text-[#7a8c4f] opacity-60">
                ◎
              </span>
            </div>

            <p className="mt-6 text-xs font-mono text-orange-500 uppercase tracking-widest mb-3">
              Instrucciones Tácticas
            </p>
            <ul className="space-y-3.5">
              {intelData.instrucciones.map((paso, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-400">
                  <span className="font-mono text-[#7a8c4f] font-bold flex-shrink-0 mt-0.5">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <span>{paso}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mapa Satelital Inyectado */}
          <div className="bg-[#0f120e] border border-neutral-800 rounded-md p-2 flex flex-col relative overflow-hidden group">
            <div className="absolute top-4 left-4 z-10 bg-black/80 border border-neutral-800 px-3 py-1.5 rounded-sm backdrop-blur-sm pointer-events-none">
              <p className="text-[10px] font-mono text-orange-500 uppercase tracking-widest mb-0.5">
                Enlace Satelital Activo
              </p>
              <p className="text-xs font-bold text-white font-mono">
                {intelData.coordenadas}
              </p>
            </div>
            
            <div className="w-full h-full min-h-[300px] rounded-sm overflow-hidden bg-neutral-900 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1781478117932!6m8!1m7!1spnkyxVaxBqxxRLKAbo_mkg!2m2!1d-35.46048505856353!2d-71.70442266788469!3f207.7719902548942!4f-1.6133527758348407!5f0.7820865974627469"
                width="100%"
                height="100%"
                style={{ 
                  border: 0, 
                  // Este filtro mágico convierte el mapa normal en un mapa oscuro táctico
                  filter: "invert(90%) hue-rotate(180deg) brightness(80%) contrast(120%) grayscale(20%)" 
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 transition-opacity duration-500 opacity-80 group-hover:opacity-100"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}