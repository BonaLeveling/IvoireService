import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { ShieldCheck, Scale, Lock, Eye, MessageCircle, Mail, ArrowRightCircle } from 'lucide-react';

const Terms = () => {
  return (
    <>
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
        
      <main className="pt-24 pb-20 font-['DM_Sans'] bg-gray-50">
        {/* Header de la page */}
        <div className="bg-white border-b border-gray-100 py-16 px-6 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#009A44] font-bold uppercase tracking-widest text-sm">Cadre Légal</span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
              Confiance et <span className="text-[#FF8200]">Transparence</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
              Chez IvoireService, nous protégeons vos données et encadrons nos échanges pour garantir la meilleure expérience à Abidjan et partout en Côte d'Ivoire.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            
            {/* --- Section CGU --- */}
            <section className="bg-white rounded-4xl p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-[#FF8200]">
                  <Scale size={28} />
                </div>
                <h2 className="text-3xl font-black text-gray-900">Conditions d'utilisation</h2>
              </div>

              <div className="space-y-8 text-gray-600 leading-relaxed">
                <div className="group">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2 group-hover:text-[#FF8200] transition-colors">
                    <ArrowRightCircle size={18} className="text-[#FF8200]" /> 1. Acceptation
                  </h3>
                  <p className="pl-7">
                    En accédant à <span className="font-bold">IvoireService</span>, vous rejoignez une communauté basée sur le respect. L'utilisation de nos services implique l'adhésion totale à ces règles.
                  </p>
                </div>

                <div className="group">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2 group-hover:text-[#FF8200] transition-colors">
                    <ArrowRightCircle size={18} className="text-[#FF8200]" /> 2. Rôle d'IvoireService
                  </h3>
                  <p className="pl-7">
                    Nous sommes un intermédiaire technologique. Bien que nous vérifiions l'identité des artisans, le contrat de prestation reste un accord direct entre le client et l'artisan.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-[#009A44]">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Engagements de l'artisan</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium">
                    <li className="flex items-center gap-2">✅ Qualité professionnelle</li>
                    <li className="flex items-center gap-2">✅ Ponctualité garantie</li>
                    <li className="flex items-center gap-2">✅ Transparence des prix</li>
                    <li className="flex items-center gap-2">✅ Courtoisie et respect</li>
                  </ul>
                </div>

                <div className="group">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2 group-hover:text-[#FF8200] transition-colors">
                    <ArrowRightCircle size={18} className="text-[#FF8200]" /> 3. Frais de service
                  </h3>
                  <p className="pl-7">
                    La mise en relation peut être soumise à une commission variable, réinvestie pour maintenir la sécurité de la plateforme et la vérification des profils.
                  </p>
                </div>
              </div>
            </section>

            {/* --- Section Privacy --- */}
            <section className="bg-white rounded-4xl p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-[#009A44]">
                  <ShieldCheck size={28} />
                </div>
                <h2 className="text-3xl font-black text-gray-900">Confidentialité</h2>
              </div>

              <div className="space-y-8 text-gray-600">
                <div className="flex gap-4">
                  <div className="mt-1 text-[#009A44]"><Eye size={20}/></div>
                  <div>
                    <h3 className="font-bold text-gray-800">Données collectées</h3>
                    <p className="text-sm mt-1">Nous ne collectons que l'essentiel : Nom, Localisation et Numéro WhatsApp pour permettre la mise en relation directe.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 text-[#009A44]"><Lock size={20}/></div>
                  <div>
                    <h3 className="font-bold text-gray-800">Sécurité Ivoirienne</h3>
                    <p className="text-sm mt-1">Vos données sont stockées sur des serveurs sécurisés et ne sont jamais vendues à des entreprises tierces.</p>
                  </div>
                </div>

                <div className="p-6 bg-[#009A44]/5 rounded-2xl border border-[#009A44]/10">
                  <h4 className="font-bold text-[#009A44] mb-2 uppercase text-xs tracking-widest">Vos Droits</h4>
                  <p className="text-sm leading-relaxed">
                    Conformément aux régulations en vigueur, vous pouvez demander la suppression totale de votre compte et de vos données en un clic depuis votre espace ou via notre support.
                  </p>
                </div>
              </div>
            </section>

            {/* --- Section Contact/Support --- */}
            <section className="text-center py-12">
              <h2 className="text-2xl font-black text-gray-900 mb-6">Une question juridique ?</h2>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/2250700000000" 
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1da851] transition-all shadow-lg shadow-green-500/20"
                >
                  <MessageCircle size={20} />
                  Support WhatsApp
                </a>
                <a 
                  href="mailto:legal@ivoireservice.ci" 
                  className="flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all shadow-lg"
                >
                  <Mail size={20} />
                  Contact Email
                </a>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;