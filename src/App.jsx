import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes Públicos
import LaTrincheraOficial from "./components/LaTrincheraOficial";
import UbicacionVision from "./components/UbicacionVision";
import ModosDeJuego from "./components/ModosDeJuego";
import RegistroFacciones from "./components/RegistroFacciones";
import Armeria from "./components/Armeria";

// Componentes Privados (Modo Studio)
import Login from "./components/Login";
import DashboardStudio from "./components/DashboardStudio";

// Agrupamos la web pública en un solo bloque
function WebPublica() {
  return (
    <main className="bg-[#0a0c0a] min-h-screen">
      <LaTrincheraOficial />
      <UbicacionVision />
      <ModosDeJuego />
      <Armeria />
      <RegistroFacciones />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ZONA PÚBLICA: Lo que ve el mundo */}
        <Route path="/" element={<WebPublica />} />
        
        {/* ZONA RESTRINGIDA: Tu base de operaciones */}
        <Route path="/studio/login" element={<Login />} />
        <Route path="/studio" element={<DashboardStudio />} />
      </Routes>
    </BrowserRouter>
  );
}