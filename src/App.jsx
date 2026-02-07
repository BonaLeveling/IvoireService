import {Link as RouterLink} from 'react-router'
import {Link as ScrollLink} from 'react-scroll'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { Search, Handshake, Star, Calendar, Smile, MessageSquareText, Mail, ArrowRight, Hammer, BrushCleaning, Zap, PaintRoller, Flower2, Snowflake, ChevronRight, Gavel, LockKeyhole, UserSearch, TrendingUp } from 'lucide-react'


function App() {

  return (
    <>
      <Navbar />
      <main className='pt-20 font-["DM_Sans"]  text-base font-medium '>
        <header id='Accueil' className='px-6 sm:px-8 flex flex-col gap-6 fc:flex-row fc:items-center'>
          <div className='w-full fc:w-1/2 flex flex-col gap-6'>
            <h1 className='text-4xl font-black sm:text-6xl'>Le talent local, <br /> <span className='text-[#f27f0c]'>a votre porte.</span></h1>
            <p className='text-black/60 sm:w-[60%] md:w-[70%]'>
              La plateforme de référence pour les petits boulots et service a domicile en Cote d'ivoire. Simple, rapide et sécurisée.
            </p>
            <ul className='flex max-sm:flex-col max-sm:gap-2 items-center gap-4 text-sm font-medium sm:w-[60%] sm:min-w-100 lg:w-[80%]'>
                <RouterLink to="/search" className='w-full bg-[#f27f0c] text-white py-3 rounded-md flex items-center justify-center hover:bg-amber-600 hover:duration-300 hover:ease-in'>Trouver un service <Search size={18} className='ml-2' /> </RouterLink>
                <RouterLink to="/register" className='w-full bg-green-500 text-white py-3 rounded-md flex items-center justify-center hover:bg-green-600 hover:duration-300 hover:ease-in'>Proposer vos services <Handshake size={18} className='ml-2'/></RouterLink>
            </ul>
            <div>
              <div className='flex items-center '>
                <img src="avatar.jpg" alt="" className='w-10 h-10 border-2 border-white rounded-full'/>
                <img src="avatar1.jpg" alt="" className='w-10 h-10 border-2 border-white rounded-full -ml-2'/>
                <img src="avatar2.jpg" alt="" className='w-10 h-10 border-2 border-white rounded-full -ml-2'/>
              </div>
              <p className='text-sm text-black/60 font-medium'>Rejoint par +2000 artisans locaux</p>
            </div>
          </div>
          <div className='max-fc:max-w-md max-fc:w-full mx-auto relative fc:w-1/2 md:h-[80vh] h-[60vh] fc:mx-0 bg-linear-to-r from-[#f2dfcb] to-[#cfe3d7] p-1 rounded-2xl'>
            <img src="artisanheader.jpg" alt="" className='rounded-xl shadow-lg h-full w-full'/>
            <div className='text-sm font-bold absolute bg-white rounded-md bottom-5 left-5 p-3 flex items-center justify-between max-sm: w-[90%] sm:w-[70%]'>
              <div className='flex flex-col gap-1'>
                <span className='uppercase text-[#f27f0c] font-bold text-xs'>
                  professionnel verifié
                </span>
                <span className='capitalize'>
                  Mariam, expert électricienne
                </span>
              </div>
              <p className='text-[#f27f0c] flex items-center'>
                <Star className='fill-[#f27f0c] mr-2' size={14} />
                4.9
              </p>
            </div>
          </div>
        </header>
        <section id='A propos' className="py-20 md:px-8 px-6">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <span className="text-[#f27f0c] text-sm md:text-base font-semibold tracking-wide uppercase text-sm">Notre Mission</span>
              <h1 className="text-2xl md:text-3xl font-bold text-center py-2">
                L'humain au cœur de vos projets.
              </h1>
              <p className='mx-auto text-black/60 text-center text-base max-w-sm w-full'>
                Nous connectons les talents de nos quartiers avec ceux qui recherchent l'excellence et la proximité.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-20">
              
              <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="id-card"></path><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-4">Vous cherchez un expert ?</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  Finies les recherches interminables et les mauvaises surprises. Nous sélectionnons rigoureusement chaque artisan pour vous garantir :
                </p>
                <ul class="space-y-3">
                  <li class="flex items-center text-gray-700"><span class="text-green-500 mr-2">✓</span> Profils vérifiés et diplômés</li>
                  <li class="flex items-center text-gray-700"><span class="text-green-500 mr-2">✓</span> Avis clients 100% authentiques</li>
                  <li class="flex items-center text-gray-700"><span class="text-green-500 mr-2">✓</span> Devis clairs et sans frais cachés</li>
                </ul>
              </div>

              <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-4">Vous êtes artisan ?</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  Reprenez le contrôle sur votre visibilité. Nous mettons en valeur votre savoir-faire sans vous noyer sous la publicité :
                </p>
                <ul class="space-y-3">
                  <li class="flex items-center text-gray-700"><span class="text-green-500 mr-2">✓</span> Une vitrine digitale professionnelle</li>
                  <li class="flex items-center text-gray-700"><span class="text-green-500 mr-2">✓</span> Gestion simplifiée de vos demandes</li>
                  <li class="flex items-center text-gray-700"><span class="text-green-500 mr-2">✓</span> Paiements sécurisés et garantis</li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-900 rounded-3xl p-10 text-white overflow-hidden relative">
              <div class="relative z-10 grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 class="text-3xl font-bold text-orange-400">Local</h4>
                  <p class="mt-2 text-gray-400 text-sm">Priorité absolue aux artisans de votre région.</p>
                </div>
                <div>
                  <h4 class="text-3xl font-bold text-orange-400">Éthique</h4>
                  <p class="mt-2 text-gray-400 text-sm">Une commission juste pour protéger les marges des pros.</p>
                </div>
                <div>
                  <h4 class="text-3xl font-bold text-orange-400">Soutien</h4>
                  <p class="mt-2 text-gray-400 text-sm">Un service client humain disponible 6j/7.</p>
                </div>
              </div>
              <div class="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
            </div>

          </div>
        </section>
        <section id='Comment ça marche' className='mt-10 bg-gray-100 px-6 sm:px-8 py-10'>
            <h1 className='text-2xl md:text-3xl font-bold text-center py-2'>Comment ça marche</h1>
            <p className='mx-auto text-black/60 text-center text-base max-w-sm w-full'>
              Trois étapes simples obtenir de l'aide en toute confiance.
            </p>
            <div className='grid gap-6 md:grid-cols-3 md:gap-8 mt-10'>
              <div className='text-center flex flex-col gap-2 cursor-default group'>
                <div className='mx-auto bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-lg -rotate-6 group-hover:rotate-0 group-hover:duration-500 group-hover:ease-in-out'>
                  <Search className='stroke-[#f27f0c]'/>
                </div>
                <h3 className='text-sm font-bold'>1. Recherchez</h3>
                <p className='text-black/60 text-sm'>
                  Décrivez votre besoin et trouvez le professionnel idéal pres de chez vous en quelques secondes.
                </p>
              </div>
              <div className='text-center flex flex-col gap-2 cursor-default group'>
                <div className='mx-auto bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-lg rotate-6 group-hover:rotate-0 group-hover:duration-500 group-hover:ease-in-out'>
                  <Calendar className='stroke-green-500'/>
                </div>
                <h3 className='text-sm font-bold'>2. Réservez</h3>
                <p className='text-black/60 text-sm'>
                  convenez d'un prix, fixer une date et validez la mission via WhatsApp, une appli que vous maitrisez.
                </p>
              </div>
              <div className='text-center flex flex-col gap-2 cursor-default group'>
                <div className='mx-auto bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-lg -rotate-3 group-hover:rotate-0 group-hover:duration-500 group-hover:ease-in-out'>
                <Smile className='stroke-blue-600 ' />
                </div>
                <h3 className='text-sm font-bold'>3. Souriez</h3>
                <p className='text-black/60 text-sm'>
                  Profitez d'un travail bien fait par un artisan de confiance. payez une fois satisfait.
                </p>
              </div>  
            </div>
        </section>
        <section id='Services' className='px-6 sm:px-8 py-5'>
         <div className='flex justify-between gap-4 py-5 border-b border-gray-100'>
          <div>
              <h1 className='text-xl md:text-2xl font-bold'>Nos services populaires</h1>
              <p className='text-black/60 text-sm md:text-base max-w-sm w-full'>
                Tout ce don vous avez besoin, a portée de clic.
              </p>
          </div>  
          <div className='-mt-4 flex flex-col'>
            <button className='w-12 h-12 rounded-full bg-[#25D366] p-2 cursor-pointer'>
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path stroke='white' fill='#25D366' d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>            </button>
            <button className='min-w-19 mt-2 cursor-pointer text-xs md:text-sm text-[#f27f0c] flex items-center gap-1 group'>
              Voir plus
              <ArrowRight size={14} className='group-hover:translate-x-1 group-hover:duration-300 group-hover:ease-in'/>
            </button>
          </div>
         </div>
          
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mt-10'>
            <div className='flex flex-col items-center'>
              <div className='bg-[#fff7ed] w-10 h-10 rounded-full flex justify-center items-center'>
                <Hammer size={20} className='stroke-[#f2800f]'/>
              </div>
              <h3 className='text-sm capitalize font-bold mt-2'>plomberie</h3>
              <span className='text-xs text-black/60 text-center'>Fuites et tuyaux</span>
            </div>
            <div className='flex flex-col items-center'>
              <div className='bg-[#f0f6ff] w-10 h-10 rounded-full flex justify-center items-center'>
                <BrushCleaning size={20} className='stroke-blue-600'/>
              </div>
              <h3 className='text-sm capitalize font-bold mt-2'>menage</h3>
              <span className='text-xs text-black/60 text-center'>Nettoyage expert</span>
            </div>
            <div className='flex flex-col items-center'>
              <div className='bg-[#fffde8] w-10 h-10 rounded-full flex justify-center items-center'>
                <Zap  size={20} className='stroke-[#c98b04]'/>
              </div>
              <h3 className='text-sm capitalize font-bold mt-2'>electricité</h3>
              <span className='text-xs text-black/60 text-center'>Réparations & installations</span>
            </div>
            <div className='flex flex-col items-center'>
              <div className='bg-[#f0fcf4] w-10 h-10 rounded-full flex justify-center items-center'>
                <PaintRoller  size={20} className='stroke-green-400'/>
              </div>
              <h3 className='text-sm capitalize font-bold mt-2'>peinture</h3>
              <span className='text-xs text-black/60 text-center'>Rénovations & murs</span>
            </div>
            <div className='flex flex-col items-center'>
              <div className='bg-[#ebfcf4] w-10 h-10 rounded-full flex justify-center items-center'>
                <Flower2  size={20} className='stroke-green-600'/>
              </div>
              <h3 className='text-sm capitalize font-bold mt-2'>jardinage</h3>
              <span className='text-xs text-black/60 text-center'>Espaces vert</span>
            </div>
            <div className='flex flex-col items-center'>
              <div className='bg-[#fff2f2] w-10 h-10 rounded-full flex justify-center items-center'>
                <Snowflake size={20} className='stroke-[#f04343]'/>
              </div>
              <h3 className='text-sm capitalize font-bold mt-2'>climatisation</h3>
              <span className='text-xs text-black/60 text-center'>Entretien clim</span>
            </div>
          </div>
        </section>
        <section id='Aide' className='my-10 bg-gray-100 py-8 px-6 md:px-8 '>
          <h1 className='text-2xl md:text-3xl font-bold text-center py-2'>Pourquoi IvoireService ?</h1>
          <div className='md:flex md:gap-6'>
            <div className='md:w-[60%]'>
              <div className='my-4 bg-white p-2 md:p-4 border border-slate-200 rounded-2xl flex gap-4'>
                <div className='w-20 h-10 rounded-xl bg-green-100 flex justify-center items-center'>
                  <UserSearch className='stroke-green-500' size={16}/>
                </div>
                <div>
                  <h3 className='font-bold text-lg md:text-xl'>Pour les clients</h3>
                  <p className='mt-2 text-sm md:text-base text-black/60'>
                    Trouvez les professionnels de confiance a proximité en quelques clics. Nous vérifions les prestataires pour garantir votre sérénité et la qualité des interventions.
                  </p>
                </div>
              </div>
              <div className='my-4 bg-white p-2 md:p-4 border border-slate-200 rounded-2xl flex gap-4'>
                <div className='w-20 h-10 rounded-xl bg-green-100 flex justify-center items-center'>
                  <TrendingUp className='stroke-green-500' size={16}/>
                </div>
                <div>
                  <h3 className='font-bold text-lg md:text-xl'>Pour les prestataires</h3>
                  <p className='mt-2 text-sm md:text-base text-black/60'>
                    Boostez votre activité locale, gérez vos réservation et construisez votre e-reputation grace a nos outils de visibilité dédiés aux experts de proximité.             
                  </p>
                </div>
              </div>
            <div className='border-l-4 border-green-400 rounded-2xl p-2 md:p-4 bg-[#ebfcf4]'>
              <h3 className='font-bold text-lg md:text-xl'>Notre vision</h3>
              <p className='mt-2 italic text-sm md:text-base text-black/60'>
                "Faciliter le lien humain et professionnel au sein des quartiers pour un service plus rapide, plus sur et plus équitable."
              </p>
            </div>
            </div>
            <div className='mt-6 text-sm md:text-base flex flex-col gap-2 md:gap-3 md:w-[40%] justify-end'>
              <a href="#" className='p-2 md:p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center'>
                <span className='flex gap-2'><Gavel size={24} className='stroke-black/60 rotate-260 '/> Conditions Générales d'utilisation</span> 
                <ChevronRight size={18} className='stroke-black/60'/>               
              </a>
              <a href="#" className='p-2 md:p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center '>  
                <span  className='flex gap-2'> <LockKeyhole size={24}  className='stroke-black/60 ' /> Politique de confidentialité </span> 
                <ChevronRight size={18} className='stroke-black/60'/>
              </a>
            </div>
          </div>
          
        </section>
        <section id='Contact' className='p-6 md:p-8'>
          <h1 className='text-2xl md:text-3xl font-bold  py-2'>Nous contacter</h1>
          <div className='mt-8 flex flex-col gap-4 md:flex-row max-w-xl w-full mx-auto'>
            <button className='md:w-1/2 flex items-center gap-4 border border-slate-200 p-2 md:p-6 rounded-lg bg-slate-100 cursor-pointer hover:bg-slate-200'>
              <MessageSquareText className='stroke-green-400'/>
              <div className='flex flex-col items-start'>
                <h3 className='text-sm font-bold md:text-base'>WhatsApp</h3>
                <span className='text-black/60 text-sm'>Discuter en direct</span>
              </div>
             
            </button>
            <button className='md:w-1/2 flex items-center gap-4 border border-slate-200 p-2 md:p-6 rounded-lg bg-slate-100 cursor-pointer hover:bg-slate-200'>
              <Mail className='stroke-green-400' />
              <div className='flex flex-col items-start w-[70%]'>
                <h3 className='text-sm font-bold md:text-base'>Email</h3>
                <p className='text-black/60 text-sm'>supIvoireService@gmail.com</p>
              </div> 
            </button>
            
          </div>
          <form action="" className='mt-4 flex flex-col gap-4 max-w-xl w-full mx-auto'>
              <div className='flex flex-col gap-4 md:flex-row  w-full'>
                <div className='flex flex-col gap-2 md:w-1/2'>
                  <label htmlFor="nom">Nom complet</label>
                  <input name='nom' type="text" placeholder='Votre nom' className='border border-slate-200 py-2 px-4 rounded-lg bg-slate-100 focus:border-green-400 focus:border-2 focus:outline-0'/>
                </div>
                <div className='flex flex-col gap-2 md:w-1/2'>
                  <label htmlFor="email">Email</label>
                  <input name='email' type="email" placeholder='Votre@email.com' className='border border-slate-200 py-2 px-4 rounded-lg bg-slate-100 focus:border-green-400 focus:border-2 focus:outline-0'/>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="sujet">Sujet</label>
                <select name="sujet"  id="" className='border border-slate-200 py-2 px-4 rounded-lg bg-slate-100 focus:border-green-400 focus:border-2 focus:outline-0'>
                  <option value="default">Demande d'informations</option> 
                  <option value="retourClient">Retour client</option> 
                </select> 
              </div>
              <div  className='flex flex-col gap-2'>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="" placeholder='Comment pouvons-nous vous aidez ?' className='h-30 border border-slate-200 py-2 px-4 rounded-lg bg-slate-100 focus:border-green-400 focus:border-2 focus:outline-0'></textarea>
              </div>
              <button type='submit' className='bg-green-500 text-white px-3 py-1.5 rounded-md hover:bg-green-600 hover:duration-300 hover:ease-in'>
                Envoyez le message
              </button>
            </form>
         
          <div className='mt-10 bg-linear-to-tr from-green-600  to-amber-600 rounded-2xl'>
            <div className='py-8 px-6 md:px-8 bg-black/80 rounded-2xl flex flex-col items-center gap-4 text-white text-center'>
              <h1 className='text-3xl md:text-4xl font-black max-w-md w-full'>Pret a transformer vos corvées en temps libre</h1>
              <p className='text-sm md:text-base text-white/60 max-w-130 w-full'>
                Rejoingnez des milliers d'ivoirien qui font confiance a IvoireService pour leurs besoins quotidiens.
              </p>
              <div className=' w-full flex flex-col gap-4 md:flex-row mt-2 md:justify-center md:mt-4'>
                <RouterLink to="/search" className='text-center bg-[#f27f0c] text-white px-3 py-2 rounded-md hover:bg-amber-600 hover:duration-300 hover:ease-in'>Je cherche un artisan</RouterLink>
                <RouterLink to="/register" className='text-center border border-white text-white px-3 py-2 rounded-md hover:bg-green-600 hover:duration-300 hover:ease-in hover:border-green-600'>Je propose mes services</RouterLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='pt-20 font-["DM_Sans"] text-base font-medium '>
        <div className='flex flex-col md:flex-row gap-4 px-6 md:px-8 justify-between'>
          <div>
            <div className='text-xl font-bold cursor-default'>
              <span>IvoireService</span>
            </div>
            <p className='mt-2 text-sm text-black/60 md:max-w-sm md:w-full'>
              Le talent local a votre porte. La premiere plateforme de services a domicile en Cote d'ivoire.  
            </p>
          </div>
          <div className='grid grid-cols-2 md:flex md:w-[55%] gap-4 md:justify-between'>
            <div>
              <h1>Plateforme</h1>
              <ul className='mt-2 flex flex-col gap-1 text-sm text-black/60 '>
                <li>
                  <RouterLink to="/register" className='cursor-pointer hover:text-black'>Devenir prestataire</RouterLink>
                </li>
                <li>
                  <ScrollLink to="Comment ça marche" spy={true} smooth={true} offset={-70} duration={500} className='cursor-pointer hover:text-black'>Comment ça marche</ScrollLink>
                </li>
                <li>
                  <ScrollLink to="#" className='cursor-pointer hover:text-black'>Tarif</ScrollLink>
                </li>
              </ul>
            </div>
            <div className='max-sm:ml-4'>
              <h1>Société</h1>
              <ul className='mt-2 flex flex-col gap-1 text-sm text-black/60 '>
                <li>
                  <ScrollLink to="A propos" spy={true} smooth={true} offset={-70} duration={500} className='cursor-pointer hover:text-black'>A propos</ScrollLink>
                </li>
                <li>
                  <ScrollLink to="Contact" spy={true} smooth={true} offset={-70} duration={500} className='cursor-pointer hover:text-black'>Contact</ScrollLink>
                </li>
              </ul>
            </div>
            <div>
              <h1>Légal</h1>
              <ul className='mt-2 flex flex-col gap-1 text-sm text-black/60 '>
                <li>
                  <a href="#" className='cursor-pointer hover:text-black'>CGU</a>
                </li>
                <li>
                  <a href="#" className='cursor-pointer hover:text-black'>confidentialité</a>
                </li>
                <li>
                  <a href="#" className='cursor-pointer hover:text-black'>Mentions légales</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
       <Footer />
      </footer>
    </>
  )
}

export default App

