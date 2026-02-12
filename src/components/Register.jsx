import React from 'react';

const Register = () => {
  return (
    <div className="bg-[#f8fafc] dark:bg-[#0a0a0a] min-h-screen text-[#111418] dark:text-white font-display">
      <div className="flex flex-col min-h-screen">
        
        {/* --- Header avec accents aux couleurs nationales --- */}
        <header className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-md px-6 md:px-10 py-4 sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-tr from-[#FF8200] to-[#009A44] rounded-lg flex items-center justify-center text-white font-bold">I</div>
            <h2 className="text-gray-900 dark:text-white text-xl font-black tracking-tight">Ivoire<span className="text-[#FF8200]">Service</span></h2>
          </div>
          
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
             <button className="cursor-pointer rounded-xl h-10 px-6 bg-gray-900 dark:bg-white dark:text-black text-white text-sm font-bold transition-all hover:shadow-lg active:scale-95">
              <a className="text-sm font-semibold hover:text-[#FF8200] transition-colors" href="/">Accueil</a>
              </button>
              <button className="cursor-pointer rounded-xl h-10 px-6 bg-gray-900 dark:bg-white dark:text-black text-white text-sm font-bold transition-all hover:shadow-lg active:scale-95">
              <a className="text-sm font-semibold hover:text-[#FF8200] transition-colors" href="/login">Connexion</a>
              </button>
            </nav>
          </div>
        </header>

        {/* --- Main Content --- */}
        <main className="flex-1 flex flex-col items-center py-12 px-4 relative">
          {/* Décorations d'arrière-plan */}
          <div className="absolute top-20 right-[10%] w-64 h-64 bg-[#FF8200]/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-20 left-[10%] w-64 h-64 bg-[#009A44]/5 rounded-full blur-3xl -z-10"></div>

          <div className="max-w-2xl w-full flex flex-col gap-8">
            
            {/* Page Heading */}
            <div className="flex flex-col gap-3 text-center">
              <span className="text-[#009A44] font-bold text-sm tracking-widest uppercase">Devenez Prestataire</span>
              <h1 className="text-gray-900 dark:text-white text-4xl md:text-5xl font-black leading-tight">
                Boostez votre activité <br /> en <span className="text-[#FF8200]">Côte d'Ivoire</span>
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md mx-auto">
                Rejoignez des milliers de professionnels et trouvez des clients près de chez vous.
              </p>
            </div>

            {/* Registration Form Card */}
            <div className="bg-white dark:bg-[#111111] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-gray-800 rounded-3xl p-6 md:p-10 transition-all hover:border-[#FF8200]/30">
              <form className="flex flex-col gap-6">
                
                {/* Identité Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Nom & Prénom</label>
                    <div className="relative">
                      <input className="w-full rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800/50 dark:text-white focus:ring-2 focus:ring-[#FF8200] focus:border-transparent h-12 pl-12 pr-4 transition-all outline-none" placeholder="Ex: Koffi Kouassi" type="text" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Numéro WhatsApp</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1 border-r border-gray-200 pr-2">
                         <span className="text-xs font-bold text-gray-500">+225</span>
                      </div>
                      <input className="w-full rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800/50 dark:text-white focus:ring-2 focus:ring-[#009A44] focus:border-transparent h-12 pl-20 pr-4 transition-all outline-none" placeholder="07 00 00 00 00" type="tel" />
                    </div>
                  </div>
                </div>

                {/* Profession & Localisation */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Votre Métier</label>
                  <div className="relative">
                    <input className="w-full rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800/50 dark:text-white focus:ring-2 focus:ring-[#FF8200] focus:border-transparent h-12 pl-12 pr-4 transition-all outline-none" placeholder="Ex: Plombier, Électricien, Menuisier..." type="text" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Ville</label>
                    <input className="w-full rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800/50 dark:text-white focus:ring-2 focus:ring-[#FF8200] focus:border-transparent h-12 px-4 transition-all outline-none" placeholder="Ex: Abidjan" type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Commune / Quartier</label>
                    <input className="w-full rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800/50 dark:text-white focus:ring-2 focus:ring-[#FF8200] focus:border-transparent h-12 px-4 transition-all outline-none" placeholder="Ex: Cocody" type="text" />
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Description de vos services</label>
                  <textarea className="w-full rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800/50 dark:text-white focus:ring-2 focus:ring-[#FF8200] focus:border-transparent p-4 transition-all outline-none resize-none" placeholder="Décrivez votre expérience en quelques lignes..." rows="3"></textarea>
                </div>

                {/* Availability Toggle */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/30 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col">
                    <span className="text-gray-900 dark:text-gray-200 text-sm font-bold">Disponibilité immédiate</span>
                    <span className="text-xs text-gray-500">Êtes-vous prêt à travailler maintenant ?</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox" />
                    <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#009A44]"></div>
                  </label>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-linear-to-r from-[#FF8200] to-[#FF9500] hover:shadow-[0_10px_20px_rgba(255,130,0,0.3)] text-white font-black py-4 rounded-xl transition-all text-lg active:scale-95 flex items-center justify-center gap-2" type="submit">
                  <span>Créer mon profil</span>
                  <span className="material-icons text-sm">send</span>
                </button>
              </form>
            </div>

            {/* Footer Form */}
            <div className="text-center space-y-4">
              <p className="text-gray-500 text-xs px-6">
                En vous inscrivant, vous rejoignez la communauté <a href="/terms"><button className="font-bold text-[#009A44] underline">IvoireService</button></a> et acceptez nos conditions.
              </p>
              <a href="/login" className="inline-block text-gray-900 dark:text-white font-bold text-sm bg-white dark:bg-gray-800 px-6 py-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-700">
                Déjà membre ? <span className="text-[#FF8200]">Me connecter</span>
              </a>
            </div>
          </div>
        </main>

        {/* Minimal Footer */}
        <footer className="py-10 px-6 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 grayscale opacity-50">
               <div className="w-4 h-4 bg-[#FF8200]"></div>
               <div className="w-4 h-4 bg-white border border-gray-200"></div>
               <div className="w-4 h-4 bg-[#009A44]"></div>
               <span className="text-xs font-bold ml-2 uppercase tracking-tighter">Fait en CI</span>
            </div>
            <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">© 2026 IvoireService. La force du local.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Register;