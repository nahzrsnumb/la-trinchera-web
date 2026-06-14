import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

// Menú lateral
const menuItems = [
  { id: "armeria", label: "Armería", icon: "▣" },
  { id: "facciones", label: "Facciones", icon: "⬡" },
  { id: "modos", label: "Modos de Juego", icon: "◈" },
  { id: "operadores", label: "Operadores", icon: "✛" },
];

// Mock data de inventario
const inventarioMock = [
  { id: 1, nombre: "M4A1 Carbine", tipo: "Rifle de Asalto", fps: 320, peso: "0.25g", estado: "Disponible" },
  { id: 2, nombre: "MP5 SD6", tipo: "Subfusil", fps: 300, peso: "0.25g", estado: "Disponible" },
  { id: 3, nombre: "AK-74U", tipo: "Rifle Compacto", fps: 325, peso: "0.25g", estado: "En uso" },
  { id: 4, nombre: "Glock 18C", tipo: "Pistola", fps: 280, peso: "0.20g", estado: "Disponible" },
  { id: 5, nombre: "M870 Shotgun", tipo: "Escopeta", fps: 330, peso: "0.25g", estado: "Mantención" },
];

const estadoColor = {
  Disponible: "bg-[#7a8c4f]/15 text-[#7a8c4f]",
  "En uso": "bg-orange-500/15 text-orange-500",
  Mantención: "bg-red-500/10 text-red-500",
};

export default function DashboardStudio() {
  // Estados de interfaz y seguridad
  const [verificando, setVerificando] = useState(true);
  const [seccionActiva, setSeccionActiva] = useState("armeria");
  const [sidebarAbierto, setSidebarAbierto] = useState(false);
  
  const navigate = useNavigate();

  // Sistema de Blindaje Automático
  useEffect(() => {
    const aplicarBlindaje = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/studio/login");
      } else {
        setVerificando(false);
      }
    };

    aplicarBlindaje();
  }, [navigate]);

  // Función para cerrar sesión y salir del centro de mando
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/studio/login");
  };

  // Pantalla de carga mientras se verifica el nivel de acceso
  if (verificando) {
    return (
      <div className="min-h-screen bg-[#0a0c0a] flex items-center justify-center">
        <p className="text-orange-500 font-mono tracking-widest uppercase animate-pulse text-xs">
          // Verificando autorización de mando...
        </p>
      </div>
    );
  }

  // Interfaz Principal del Dashboard
  return (
    <div className="min-h-screen bg-[#0a0c0a] text-neutral-200 flex">
      {/* ===== SIDEBAR ===== */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-[#0f120e] border-r border-neutral-800 flex flex-col transition-transform duration-300 ${
          sidebarAbierto ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-neutral-800">
          <p className="text-[10px] tracking-[0.3em] text-orange-500 font-mono uppercase">
            // Studio
          </p>
          <h1 className="text-lg font-extrabold uppercase tracking-tight text-white mt-1">
            La Trinchera
          </h1>
        </div>

        {/* Menú */}
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSeccionActiva(item.id);
                setSidebarAbierto(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-mono uppercase tracking-wide transition-colors ${
                seccionActiva === item.id
                  ? "bg-orange-500/10 text-orange-500 border-l-2 border-orange-500"
                  : "text-neutral-400 hover:bg-neutral-800/50 hover:text-white border-l-2 border-transparent"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Footer sidebar con botón funcional de Cerrar Sesión */}
        <div className="p-4 border-t border-neutral-800">
          <div className="flex items-center gap-3 mb-3 px-2">
            <div className="h-8 w-8 bg-neutral-800 border border-neutral-700 rounded-sm flex items-center justify-center font-mono text-xs text-[#7a8c4f]">
              OP
            </div>
            <div className="font-mono text-xs">
              <p className="text-white">Comandante</p>
              <p className="text-neutral-600 text-[10px]">admin@trinchera.cl</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-[10px] font-mono uppercase tracking-widest text-neutral-500 hover:text-red-500 border border-neutral-800 hover:border-red-500/40 rounded-sm py-2 transition-colors"
          >
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Overlay móvil */}
      {sidebarAbierto && (
        <div
          onClick={() => setSidebarAbierto(false)}
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
        />
      )}

      {/* ===== ÁREA PRINCIPAL ===== */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 border-b border-neutral-800 bg-[#0f120e] flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarAbierto(true)}
              className="lg:hidden text-neutral-400 hover:text-white font-mono text-xl"
            >
              ☰
            </button>
            <div>
              <p className="text-[10px] font-mono text-orange-500 uppercase tracking-widest">
                // Panel de Control
              </p>
              <h2 className="text-base font-bold uppercase tracking-wide text-white">
                {menuItems.find((m) => m.id === seccionActiva)?.label}
              </h2>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
            <span className="h-1.5 w-1.5 bg-[#7a8c4f] rounded-full animate-pulse" />
            Sistema Operativo
          </div>
        </header>

        {/* Contenido */}
        <div className="flex-1 p-4 sm:p-6 overflow-auto">
          {/* Barra de acciones */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex gap-3 font-mono text-xs">
              <div className="bg-[#0f120e] border border-neutral-800 rounded-sm px-4 py-3">
                <p className="text-neutral-500 uppercase text-[10px]">Total Registros</p>
                <p className="text-2xl font-bold text-white">{inventarioMock.length}</p>
              </div>
              <div className="bg-[#0f120e] border border-neutral-800 rounded-sm px-4 py-3">
                <p className="text-neutral-500 uppercase text-[10px]">Disponibles</p>
                <p className="text-2xl font-bold text-[#7a8c4f]">
                  {inventarioMock.filter((i) => i.estado === "Disponible").length}
                </p>
              </div>
            </div>

            <button className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-black font-bold uppercase tracking-widest text-xs py-3 px-5 rounded-sm transition-all duration-200 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]">
              <span className="text-base leading-none">+</span>
              Añadir Nuevo Registro
            </button>
          </div>

          {/* Tabla táctica */}
          <div className="bg-[#0f120e] border border-neutral-800 rounded-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-800 bg-black/30">
                    {["ID", "Réplica", "Tipo", "FPS", "Balín", "Estado", "Acciones"].map(
                      (h) => (
                        <th
                          key={h}
                          className="text-left font-mono text-[10px] uppercase tracking-widest text-neutral-500 px-4 py-3 whitespace-nowrap"
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="font-mono">
                  {inventarioMock.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-neutral-800/50 hover:bg-orange-500/5 transition-colors"
                    >
                      <td className="px-4 py-4 text-neutral-600">
                        {String(item.id).padStart(3, "0")}
                      </td>
                      <td className="px-4 py-4 text-white font-bold whitespace-nowrap">
                        {item.nombre}
                      </td>
                      <td className="px-4 py-4 text-neutral-400 whitespace-nowrap">
                        {item.tipo}
                      </td>
                      <td className="px-4 py-4 text-orange-500 font-bold">{item.fps}</td>
                      <td className="px-4 py-4 text-neutral-300">{item.peso}</td>
                      <td className="px-4 py-4">
                        <span
                          className={`text-[10px] px-2 py-1 rounded uppercase tracking-wider ${
                            estadoColor[item.estado]
                          }`}
                        >
                          {item.estado}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <button className="text-[10px] uppercase tracking-wider text-[#7a8c4f] hover:text-white border border-[#7a8c4f]/30 hover:border-[#7a8c4f] rounded-sm px-2 py-1 transition-colors">
                            Editar
                          </button>
                          <button className="text-[10px] uppercase tracking-wider text-red-500/70 hover:text-red-500 border border-red-500/20 hover:border-red-500/50 rounded-sm px-2 py-1 transition-colors">
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}