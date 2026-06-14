import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase"; // Conectamos con el túnel que creaste

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Evita que la página recargue
    setLoading(true);
    setError(null);

    // Protocolo de Autenticación con Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("ACCESO DENEGADO. Credenciales inválidas.");
      setLoading(false);
    } else {
      // Si el acceso es correcto, te enviamos al Centro de Mando
      navigate("/studio");
    }
  };

  return (
    <section className="min-h-screen bg-[#0a0c0a] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#0f120e] border border-neutral-800 rounded-md p-8 relative overflow-hidden">
        
        {/* Decoración Táctica */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />
        
        <div className="mb-8 text-center">
          <p className="text-xs tracking-[0.3em] text-orange-500 font-mono mb-2 uppercase">
            // Nivel de Acceso: ADMIN
          </p>
          <h2 className="text-2xl font-extrabold text-white uppercase tracking-wider">
            Credenciales de <span className="text-[#7a8c4f]">Operador</span>
          </h2>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Mensaje de Error */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 rounded-sm p-3 text-center">
              <p className="text-xs font-mono text-red-500 tracking-wider">{error}</p>
            </div>
          )}

          <div>
            <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-black/50 border border-neutral-800 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-[#7a8c4f] focus:ring-1 focus:ring-[#7a8c4f] transition-all font-mono text-sm"
              placeholder="operador@latrinchera.cl"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
              Código de Seguridad
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-black/50 border border-neutral-800 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-[#7a8c4f] focus:ring-1 focus:ring-[#7a8c4f] transition-all font-mono text-sm"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#7a8c4f] hover:bg-[#687a41] text-black font-bold uppercase tracking-widest text-sm py-4 rounded-sm transition-all duration-200 mt-4 shadow-[0_0_15px_rgba(122,140,79,0.2)] hover:shadow-[0_0_25px_rgba(122,140,79,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Verificando..." : "Autenticar"}
          </button>
        </form>
      </div>
    </section>
  );
}