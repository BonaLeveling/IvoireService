import { Link as RouterLink } from 'react-router'
import { Link as ScrollLink } from 'react-scroll'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'

import { Search, Handshake, Star, Calendar, Smile, MessageSquareText, Mail, ArrowRight, Hammer, BrushCleaning, Zap, PaintRoller, Flower2, Snowflake, ChevronRight, Gavel, LockKeyhole, UserSearch, TrendingUp, Users, Target, Shield, Heart } from 'lucide-react'

function App() {
  // Palette officielle : 
  // Orange: #FF8200
  // Vert: #009A44

  return (
    <>
      <Navbar />
      <main className='pt-20 font-["DM_Sans"] text-base font-medium bg-white'>
        {/* --- Hero Section --- */}
        <header id='Accueil' className='px-6 sm:px-8 flex flex-col gap-6 fc:flex-row fc:items-center py-10'>
          <div className='w-full fc:w-1/2 flex flex-col gap-6'>
            <h1 className='text-4xl font-black sm:text-6xl text-gray-900 leading-tight'>
              Le talent local, <br /> 
              <span className='text-[#FF8200]'>à votre porte.</span>
            </h1>
            <p className='text-gray-600 sm:w-[85%] lg:w-[70%] text-lg'>
              La plateforme de référence pour les services à domicile en Côte d'Ivoire. Simple, rapide et sécurisée.
            </p>
            <ul className='flex max-sm:flex-col items-center gap-4 text-sm font-bold w-full'>
              <RouterLink to="/search" className='w-full sm:w-auto px-8 bg-[#FF8200] text-white py-4 rounded-xl flex items-center justify-center hover:bg-[#e67600] transition-all shadow-lg shadow-orange-500/20 active:scale-95'>
                Trouver un service <Search size={18} className='ml-2' />
              </RouterLink>
              <RouterLink to="/register" className='w-full sm:w-auto px-8 bg-[#009A44] text-white py-4 rounded-xl flex items-center justify-center hover:bg-[#00853a] transition-all shadow-lg shadow-green-500/20 active:scale-95'>
                Proposer mes services <Handshake size={18} className='ml-2'/>
              </RouterLink>
            </ul>
            <div className='flex items-center gap-3 mt-2'>
              <div className='flex -space-x-3'>
                <img src="avatar.jpg" alt="" className='w-12 h-12 border-4 border-white rounded-full object-cover bg-gray-200'/>
                <img src="avatar1.jpg" alt="" className='w-12 h-12 border-4 border-white rounded-full object-cover bg-gray-200'/>
                <img src="avatar2.jpg" alt="" className='w-12 h-12 border-4 border-white rounded-full object-cover bg-gray-200'/>
              </div>
              <p className='text-sm text-gray-500 font-semibold'>Rejoint par <span className="text-[#009A44]">+2000 artisans</span> locaux</p>
            </div>
          </div>

          <div className='max-fc:max-w-md max-fc:w-full mx-auto relative fc:w-1/2 md:h-[75vh] h-[50vh] fc:mx-0 bg-linear-to-tr from-[#FF8200]/20 to-[#009A44]/20 p-1.5 rounded-4xl'>
            <img src="artisanheader.jpg" alt="Artisan Ivoirien" className='rounded-[1.8rem] shadow-2xl h-full w-full object-cover'/>
            <div className='absolute bg-white/90 backdrop-blur-md rounded-2xl bottom-6 left-6 p-4 flex items-center justify-between w-[85%] shadow-xl border border-white/50'>
              <div className='flex flex-col gap-0.5'>
                <span className='uppercase text-[#009A44] font-black text-[10px] tracking-widest'>Professionnel Vérifié</span>
                <span className='font-bold text-gray-900 text-sm'>Mariam, experte électricienne</span>
              </div>
              <p className='text-[#FF8200] font-bold flex items-center bg-orange-50 px-2 py-1 rounded-lg'>
                <Star className='fill-[#FF8200] mr-1' size={14} /> 4.9
              </p>
            </div>
          </div>
        </header>

        {/* --- Section À Propos --- */}
        <section id='A propos' className="py-24 bg-gray-50/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#009A44] font-bold uppercase tracking-widest text-sm">Qui sommes-nous ?</span>
              <h2 className="text-4xl font-black text-gray-900 mt-2">À propos d'IvoireService</h2>
              <div className="w-20 h-1.5 bg-[#FF8200] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">Le pont entre talent et besoin</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  IvoireService comble le fossé en créant une plateforme simple, sécurisée et locale qui met en relation l'offre et la demande de services de proximité.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-2xl shadow-sm border-l-4 border-[#FF8200]">
                    <h4 className="font-bold text-[#FF8200]">Vision</h4>
                    <p className="text-xs text-gray-500 mt-1">Digitaliser l'artisanat local.</p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl shadow-sm border-l-4 border-[#009A44]">
                    <h4 className="font-bold text-[#009A44]">Mission</h4>
                    <p className="text-xs text-gray-500 mt-1">Créer des opportunités.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-4xl shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold mb-8 text-center">Nos valeurs fondamentales</h3>
                <div className="grid gap-6">
                  {[
                    { icon: <Users size={20}/>, title: "Communauté", desc: "La force du réseau local." },
                    { icon: <Shield size={20}/>, title: "Sécurité", desc: "Transactions et données protégées." },
                    { icon: <Target size={20}/>, title: "Fiabilité", desc: "Prestataires triés sur le volet." },
                    { icon: <Heart size={20}/>, title: "Proximité", desc: "L'humain au cœur du service." },
                  ].map((val, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-orange-50 text-[#FF8200] flex items-center justify-center group-hover:bg-[#FF8200] group-hover:text-white transition-colors">
                        {val.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">{val.title}</h4>
                        <p className="text-xs text-gray-500">{val.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Comment ça marche --- */}
        <section id='Comment ça marche' className='py-24 bg-white px-6'>
            <h2 className='text-3xl md:text-4xl font-black text-center text-gray-900'>Comment ça marche ?</h2>
            <p className='mx-auto text-gray-500 text-center mt-4 max-w-md'>Trois étapes simples pour obtenir de l'aide en toute confiance.</p>
            
            <div className='grid gap-8 md:grid-cols-3 mt-16 max-w-6xl mx-auto'>
              <div className='text-center space-y-4 p-8 rounded-3xl hover:bg-gray-50 transition-colors group'>
                <div className='mx-auto bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform'>
                  <Search className='text-[#FF8200]' size={28}/>
                </div>
                <h3 className='text-xl font-bold'>1. Recherchez</h3>
                <p className='text-gray-500 text-sm leading-relaxed'>Trouvez le professionnel idéal près de chez vous en quelques secondes.</p>
              </div>
              
              <div className='text-center space-y-4 p-8 rounded-3xl hover:bg-gray-50 transition-colors group'>
                <div className='mx-auto bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform'>
                  <Calendar className='text-[#009A44]' size={28}/>
                </div>
                <h3 className='text-xl font-bold'>2. Réservez</h3>
                <p className='text-gray-500 text-sm leading-relaxed'>Fixez une date et validez via WhatsApp, l'appli que vous maîtrisez.</p>
              </div>

              <div className='text-center space-y-4 p-8 rounded-3xl hover:bg-gray-50 transition-colors group'>
                <div className='mx-auto bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform'>
                  <Smile className='text-blue-600' size={28} />
                </div>
                <h3 className='text-xl font-bold'>3. Souriez</h3>
                <p className='text-gray-500 text-sm leading-relaxed'>Payez une fois satisfait. Profitez d'un travail bien fait.</p>
              </div>
            </div>
        </section>

        {/* --- Section Services Populaire --- */}
        <section id='Services' className='px-6 sm:px-8 py-20 bg-gray-50'>
          <div className='max-w-6xl mx-auto'>
            <div className='flex justify-between items-end mb-12'>
              <div>
                <h2 className='text-3xl font-black text-gray-900'>Nos services populaires</h2>
                <p className='text-gray-500 mt-2'>Tout ce dont vous avez besoin, à portée de clic.</p>
              </div>
              <RouterLink to="/search" className='hidden md:flex items-center gap-2 text-[#FF8200] font-bold hover:gap-3 transition-all'>
                Tout voir <ArrowRight size={20}/>
              </RouterLink>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6'>
              {[
                { icon: <Hammer />, label: "Plomberie", color: "orange" },
                { icon: <BrushCleaning />, label: "Ménage", color: "blue" },
                { icon: <Zap />, label: "Électricité", color: "yellow" },
                { icon: <PaintRoller />, label: "Peinture", color: "green" },
                { icon: <Flower2 />, label: "Jardinage", color: "emerald" },
                { icon: <Snowflake />, label: "Clim", color: "red" },
              ].map((serv, i) => (
                <div key={i} className='bg-white p-6 rounded-3xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100'>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-${serv.color}-50 text-${serv.color}-600`}>
                    {serv.icon}
                  </div>
                  <h3 className='font-bold text-sm text-gray-800'>{serv.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Section Contact --- */}
        <section id='Contact' className='py-24 px-6 md:px-8 max-w-4xl mx-auto'>
          <div className="text-center mb-12">
            <h2 className='text-3xl font-black text-gray-900'>Besoin d'aide ?</h2>
            <p className="text-gray-500 mt-2">Notre équipe ivoirienne vous répond en moins de 2h.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-10'>
            <a href="https://wa.me/225..." className='flex items-center gap-4 p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all'>
              <MessageSquareText className='text-[#25D366]' size={32}/>
              <div>
                <h3 className='font-bold'>WhatsApp</h3>
                <span className='text-xs text-gray-600'>Discussion instantanée</span>
              </div>
            </a>
            <div className='flex items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100'>
              <Mail className='text-[#FF8200]' size={32} />
              <div>
                <h3 className='font-bold'>Email</h3>
                <p className='text-xs text-gray-600'>contact@ivoireservice.ci</p>
              </div>
            </div>
          </div>

          <form className='bg-white p-8 rounded-4xl shadow-xl border border-gray-100 space-y-5'>
             <div className='grid md:grid-cols-2 gap-5'>
                <div className='space-y-2'>
                  <label className='text-sm font-bold ml-1'>Nom complet</label>
                  <input type="text" className='w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#FF8200] transition-all' placeholder="Koffi Eric" />
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-bold ml-1'>Email</label>
                  <input type="email" className='w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#009A44] transition-all' placeholder="eric@gmail.com" />
                </div>
             </div>
             <div className='space-y-2'>
                <label className='text-sm font-bold ml-1'>Message</label>
                <textarea rows="4" className='w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#FF8200] transition-all' placeholder="Comment pouvons-nous vous aider ?"></textarea>
             </div>
             <button className='w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-black transition-all shadow-lg'>
                Envoyer ma demande
             </button>
          </form>

          {/* Banner Finale */}
          <div className='mt-20 overflow-hidden relative bg-linear-to-r from-[#FF8200] to-[#009A44] rounded-[2.5rem] p-12 text-center text-white shadow-2xl'>
            <div className="relative z-10">
              <h2 className='text-3xl md:text-5xl font-black mb-6'>Prêt à gagner du temps ?</h2>
              <p className='text-white/90 mb-10 max-w-xl mx-auto font-medium'>
                Rejoignez des milliers d'ivoiriens qui font confiance à IvoireService pour leurs besoins quotidiens.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <RouterLink to="/search" className='bg-white text-gray-900 px-10 py-4 rounded-xl font-black hover:bg-gray-100 transition-all'>
                  Trouver un artisan
                </RouterLink>
                <RouterLink to="/register" className='bg-black/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-xl font-black hover:bg-black/30 transition-all'>
                  Je propose mes services
                </RouterLink>
              </div>
            </div>
            {/* Décoration abstraite */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
          </div>
        </section>
      </main>

      <footer className='bg-gray-900 text-white py-20 px-6 md:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
            <div className='col-span-1 md:col-span-2'>
               <div className='text-2xl font-black flex items-center gap-2'>
                 <div className="w-8 h-8 bg-[#FF8200] rounded-lg"></div>
                 IvoireService
               </div>
               <p className='mt-4 text-gray-400 max-w-sm leading-relaxed'>
                 Le talent local à votre porte. La première plateforme de services à domicile en Côte d'Ivoire.
               </p>
            </div>
            <div>
              <h4 className='font-bold mb-6 text-[#FF8200] uppercase tracking-widest text-xs'>Plateforme</h4>
              <ul className='space-y-4 text-gray-400 text-sm'>
                <li><RouterLink to="/register" className="hover:text-white transition-colors">Devenir prestataire</RouterLink></li>
                <li><ScrollLink to="Comment ça marche" className="hover:text-white transition-colors cursor-pointer">Comment ça marche</ScrollLink></li>
                <li><a href="#" className="hover:text-white transition-colors">Tarifs</a></li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold mb-6 text-[#009A44] uppercase tracking-widest text-xs'>Légal</h4>
              <ul className='space-y-4 text-gray-400 text-sm'>
                <li><a href="#" className="hover:text-white transition-colors">CGU</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Aide</a></li>
              </ul>
            </div>
          </div>
          <div className='border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-bold'>
            <p>© 2026 IVOIRESERVICE. FAIT AVEC ❤️ À ABIDJAN.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">FACEBOOK</a>
              <a href="#" className="hover:text-white">INSTAGRAM</a>
              <a href="#" className="hover:text-white">LINKEDIN</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App