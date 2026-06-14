import React, { useEffect, useState } from "react";
import { supabase } from "../supabase"; // Conexión a tu base de datos

export default function RegistroFacciones() {
  const [facciones, setFacciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Función para extraer los equipos registrados en la nube
    const obtenerFacciones = async () => {
      const { data, error } = await supabase
        .from("facciones")
        .select("*")
        .order("created_at", { ascending: true }); // Ordena por fecha de creación

      if (data) {
        setFacciones(data);
      }
      if (error) {
        console.error("Error al obtener facciones:", error);
      }
      setCargando(false);
    };

    obtenerFacciones();
  }, []);

  return (
    <section className="bg-[#0a0c0a] py-16 px-4 sm:px-6 lg:px-8 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-xs tracking-[0.4em] text-orange-500 font-mono mb-3 uppercase">
            // Facciones Autorizadas
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Registro de <span className="text-[#7a8c4f]">Equipos</span>
          </h2>
          <div className="mt-4 mx-auto h-[2px] w-24 bg-gradient-to-r from-transparent via-[#7a8c4f] to-transparent" />
        </div>

        {cargando ? (
          // Pantalla de carga táctica
          <div className="flex justify-center items-center py-20">
            <p className="text-[#7a8c4f] font-mono tracking-widest uppercase animate-pulse text-sm">
              Descargando inteligencia satelital...
            </p>
          </div>
        ) : facciones.length === 0 ? (
          // Si no hay equipos registrados aún
          <div className="text-center py-20 border border-dashed border-neutral-800 rounded-md">
            <p className="text-neutral-500 font-mono uppercase tracking-widest text-sm">
              No hay escuadrones registrados en la base de datos.
            </p>
          </div>
        ) : (
          // Grid con las facciones (Actualmente mostrará solo a Sombrero Negro)
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facciones.map((equipo) => (
              <article
                key={equipo.id}
                className="bg-[#0f120e] border border-neutral-800 rounded-md overflow-hidden hover:border-[#7a8c4f] transition-all duration-300 group"
              >
                {/* Imagen del Equipo (Viene de Supabase Storage) */}
                <div className="relative h-48 bg-black overflow-hidden border-b border-neutral-800">
                  {equipo.logo_url ? (
                    <img
                      src={equipo.logo_url}
                      alt={`Logo de ${equipo.nombre}`}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-900">
                      <span className="text-neutral-700 font-mono text-sm">SIN LOGO</span>
                    </div>
                  )}
                  {/* Etiqueta de Especialidad */}
                  <div className="absolute top-4 left-4 bg-black/80 border border-neutral-800 px-3 py-1 rounded-sm backdrop-blur-sm">
                    <p className="text-[10px] font-mono text-orange-500 uppercase tracking-widest">
                      {equipo.especialidad || "Clasificado"}
                    </p>
                  </div>
                </div>

                {/* Info de la Tarjeta */}
                <div className="p-6">
                  <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-2 group-hover:text-[#7a8c4f] transition-colors">
                    {equipo.nombre}
                  </h3>
                  
                  <p className="text-sm text-neutral-400 italic mb-6 border-l-2 border-neutral-700 pl-3">
                    "{equipo.lema || "Sin lema registrado"}"
                  </p>

                  <div className="flex items-center justify-between border-t border-neutral-800 pt-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
                        Operadores Activos
                      </span>
                      <span className="text-white font-bold text-lg font-mono">
                        {equipo.miembros ? String(equipo.miembros).padStart(2, '0') : "00"}
                      </span>
                    </div>
                    <div className="h-8 w-8 rounded-full border border-neutral-700 flex items-center justify-center bg-neutral-800/50 group-hover:bg-[#7a8c4f]/10 group-hover:border-[#7a8c4f]/50 transition-colors">
                      <span className="text-[#7a8c4f] font-mono text-xs">▲</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}