import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Connexion() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Connexion avec:', { identifier, role, password });
    
    // Simulation de connexion réussie
    // Ici vous pouvez ajouter votre logique d'authentification
    if (role === 'worker') {
      navigate('/dashboard'); // Redirection vers le dashboard utilisateur
    } else if (role === 'admin') {
      navigate('/admin'); // Redirection vers le dashboard admin
    }
  };

  return (
    <div className="font-display bg-slate-50 dark:bg-[#0a0a0a] min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Éléments de design en arrière-plan (Drapeau subtil) */}
      <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-[#FF8200] via-white to-[#009A44]"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF8200]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#009A44]/10 rounded-full blur-3xl"></div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-md">
        
        {/* Header */}
        <div className="text-center mb-8">
         <div className="flex items-center gap-2 pl-35">
            <div className="w-8 h-8   bg-linear-to-tr from-[#FF8200] to-[#009A44] rounded-lg flex items-center justify-center text-white font-bold">I</div>
            <h2 className="text-gray-900 dark:text-white text-xl font-black tracking-tight">Ivoire<span className="text-[#FF8200]">Service</span></h2>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Bienvenue <span className="text-[#FF8200]">!</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Accédez à vos services en Côte d'Ivoire.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white dark:bg-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Identifier */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                Numéro WhatsApp ou Email
              </label>
              <div className="relative">
                <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></span>
                <input
                  type="text"
                  placeholder=""
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-[#FF8200] focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                  required
                />
              </div>
            </div>

            {/* Role Selection */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                Vous êtes ?
              </label>
              <div className="relative">
                <select 
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="appearance-none w-full pl-12 pr-10 py-3.5 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-[#009A44] focus:border-transparent transition-all outline-none text-gray-900 dark:text-white cursor-pointer"
                  required
                >
                  <option value="" disabled>Sélectionnez votre profil</option>
                  <option value="worker">Travailleur / Prestataire</option>
                  <option value="admin">Administrateur</option>
                </select>
                <span className="material-icons absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  Mot de passe
                </label>
                <a href="#" className="text-xs font-semibold text-[#FF8200] hover:text-[#e67600] transition-colors">
                  Oublié ?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3.5 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-[#FF8200] focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                  <span className="material-icons text-lg">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-linear-to-r from-[#FF8200] to-[#FF9500] hover:from-[#e67600] hover:to-[#FF8200] text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 transform transition active:scale-[0.98] flex items-center justify-center space-x-2 mt-4"
            >
              <span>Se connecter</span>
              <span className="material-icons text-sm">arrow_forward</span>
            </button>
          </form>

          {/* Footer Card */}
          <div className="mt-8 text-center border-t border-gray-100 dark:border-gray-800 pt-6">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Nouveau sur la plateforme ? 
              <a href="/register" className="text-[#009A44] font-bold ml-1 hover:underline">Créer un compte</a>
            </p>
            
          </div>
        </div>
      </div>
      
    </div>
  );
}