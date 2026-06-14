import React from "react";

export default function LaTrincheraOficial() {
  const whatsappUrl = "https://wa.me/56900000000"; // Reemplaza por tu número oficial

  return (
    <section className="relative bg-[#0a0c0a] text-neutral-200 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Grid táctico de fondo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#4d5d3a 1px, transparent 1px), linear-gradient(90deg, #4d5d3a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="mb-12 text-center">
          <p className="text-xs tracking-[0.4em] text-orange-500 font-mono mb-3 uppercase">
            // Briefing de Operación
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase">
            La Trinchera <span className="text-[#7a8c4f]">Oficial</span>
          </h2>
          <div className="mt-4 mx-auto h-[2px] w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </div>

        {/* Grid Táctico */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ============ TARJETA 1: PASES DE OPERACIÓN ============ */}
          <article className="group relative bg-[#0f120e] border border-neutral-800 hover:border-[#7a8c4f] transition-colors duration-300 rounded-md p-6 flex flex-col">
            <CardHeader index="01" title="Pases de Operación" accent="green" />

            <div className="mt-6 space-y-4 flex-1">
              {/* Operador Rental */}
              <div className="border border-neutral-800 rounded-sm p-4 bg-black/40">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white uppercase text-sm tracking-wide">
                    Operador Rental
                  </h4>
                  <span className="font-mono text-orange-500 font-bold">
                    $10.000
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-neutral-400">
                  <Item>Equipo completo incluido</Item>
                  <Item>Marcadora + protección</Item>
                  <Item>Carga inicial de balines</Item>
                  <Item>Ideal para principiantes</Item>
                </ul>
              </div>

              {/* Operador Autónomo */}
              <div className="border border-[#7a8c4f]/40 rounded-sm p-4 bg-[#7a8c4f]/5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white uppercase text-sm tracking-wide">
                    Operador Autónomo
                  </h4>
                  <span className="font-mono text-orange-500 font-bold">
                    $5.000
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-neutral-400">
                  <Item>Trae tu propio equipo</Item>
                  <Item>Solo acceso al campo</Item>
                  <Item>Para jugadores experimentados</Item>
                </ul>
              </div>
            </div>
          </article>

          {/* ============ TARJETA 2: PARÁMETROS CQB ============ */}
          <article className="group relative bg-[#0f120e] border border-neutral-800 hover:border-orange-500 transition-colors duration-300 rounded-md p-6 flex flex-col">
            <CardHeader index="02" title="Parámetros CQB" accent="orange" />

            <div className="mt-6 space-y-5 flex-1">
              <SpecBox label="Límite de Potencia" value="330" unit="FPS" />
              <SpecBox label="Peso Máximo Balín" value="0.25" unit="g" />

              <div className="mt-4 border border-dashed border-neutral-700 rounded-sm p-4">
                <p className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-2">
                  Regla de Compromiso
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Cronografiado obligatorio antes del despliegue. Todo equipo
                  fuera de rango queda fuera de operación.
                </p>
              </div>
            </div>
          </article>

          {/* ============ TARJETA 3: DESPLIEGUE ============ */}
          <article className="group relative bg-[#0f120e] border border-neutral-800 hover:border-[#7a8c4f] transition-colors duration-300 rounded-md p-6 flex flex-col">
            <CardHeader index="03" title="Despliegue" accent="green" />

            <div className="mt-6 space-y-4 flex-1">
              <div className="flex items-start gap-3 border-l-2 border-[#7a8c4f] pl-3">
                <div>
                  <p className="text-white font-semibold text-sm uppercase">
                    Tarde Completa
                  </p>
                  <p className="text-sm text-neutral-400">
                    Operación diurna extendida.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-l-2 border-orange-500 pl-3">
                <div>
                  <p className="text-white font-semibold text-sm uppercase flex items-center gap-2">
                    Night Ops
                    <span className="text-[10px] font-mono bg-orange-500/10 text-orange-500 px-1.5 py-0.5 rounded">
                      NOCTURNO
                    </span>
                  </p>
                  <p className="text-sm text-neutral-400 font-mono">
                    19:00 — 01:00 HRS
                  </p>
                </div>
              </div>
            </div>

            {/* Botón WhatsApp alta visibilidad */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-400 text-black font-bold uppercase tracking-wide text-sm py-3.5 rounded-sm transition-all duration-200 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Unirse al WhatsApp
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------- Subcomponentes ---------- */

function CardHeader({ index, title, accent }) {
  const accentColor = accent === "orange" ? "text-orange-500" : "text-[#7a8c4f]";
  return (
    <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
      <h3 className="text-lg font-bold uppercase tracking-wide text-white">
        {title}
      </h3>
      <span className={`font-mono text-2xl font-extrabold ${accentColor} opacity-60`}>
        {index}
      </span>
    </div>
  );
}

function Item({ children }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1.5 h-1 w-1 bg-orange-500 rounded-full flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}

function SpecBox({ label, value, unit }) {
  return (
    <div className="bg-black/40 border border-neutral-800 rounded-sm p-4 text-center">
      <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">
        {label}
      </p>
      <p className="font-mono">
        <span className="text-4xl font-extrabold text-white">{value}</span>
        <span className="text-orange-500 text-lg ml-1 font-bold">{unit}</span>
      </p>
    </div>
  );
}