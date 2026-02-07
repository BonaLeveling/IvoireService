import './App.css'
import Footer from './Footer'
import {Link as RouterLink} from 'react-router'
import { Search, Map, BrickWall, Boxes, TextAlignJustify  } from 'lucide-react'

function Research () {
    return (
        <div className=' font-["DM_Sans"]  text-base font-medium '>
            <nav className='flex items-center justify-between px-6 py-4 bg-white/80 w-full fixed font-["DM_Sans"] z-50'>
                <div className='text-xl font-bold cursor-default'>
                    <span>IvoireService</span>
                </div>
                <ul className='sm:flex items-center gap-4 text-sm font-medium hidden'>
                    <RouterLink to="/" className='relative cursor-pointer after:inline-block after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#f27f0c] after:rounded-full hover:after:w-full hover:after:duration-150 hover:after:ease-in mr-26'>Accueil</RouterLink>
                    <RouterLink to="/login" className='bg-green-500 text-white px-3 py-1.5 rounded-md hover:bg-green-600 hover:duration-300 hover:ease-in'>Connexion</RouterLink>
                    <RouterLink to="/register" className='bg-[#f27f0c] text-white px-3 py-1.5 rounded-md hover:bg-amber-600 hover:duration-300 hover:ease-in'>Inscription</RouterLink>
                </ul>
                <button className='md:hidden'>
                    <TextAlignJustify />
                </button>
            </nav>
           
            <div>
                <div className='pt-20 px-6 sm:px-8 flex flex-col items-center justify-center'>
                    <h1 className="text-2xl md:text-3xl font-bold text-center py-2">Recherchez un service</h1>
                    <p className='mx-auto text-black/60 text-center text-base max-w-sm w-full'>
                        Trouvez le professionnel idéal pres de chez vous en quelques clics.
                    </p>
                    <div className='mb-8 flex flex-col md:flex-row gap-4 items-center justify-center mt-8 py-1 max-md:px-2 md:pl-2 border border-slate-100 shadow-xl rounded-xl md:max-w-4xl w-full'>
                        <div className='w-full md:w-1/4 px-6 flex items-center gap-1 group '>
                            < Boxes className='stroke-black/60 group-hover:stroke-[#f27f0c]' size={24}/>
                            <select name="service" id="" className=' w-full px-2 py-3 focus:outline-0'>
                                <option t>type de service</option>
                                <option value="plombier">Plombier</option>
                                <option value="electricien">Electricien</option>
                                <option value="mecanicien">Mecanicien</option>
                                <option value="Jardinier">Jardinier</option>
                                <option value="Autre">Autre</option>
                            </select>
                        </div>
                    
                            
                        <div className='w-full md:w-1/4 px-6 flex items-center gap-1 md:border-x-2 md:border-slate-200 group '>
                            <BrickWall className='stroke-black/60 group-hover:stroke-[#f27f0c]' size={24}/>
                            <input type="text" placeholder='Abidjan' className='w-full px-2 py-3 focus:outline-0'/>
                        </div>
                        <div className='w-full md:w-1/4 px-6 flex items-center gap-1 group '>
                            <Map className='stroke-black/60 group-hover:stroke-[#f27f0c]' size={24}/>
                            <input type="text" placeholder='Cocody' className='w-full px-2 py-3 focus:outline-0'/>
                        </div>
                        <button className='max-md:w-full bg-[#f27f0c] text-white px-5 py-3 rounded-lg cursor-pointer flex items-center justify-center hover:bg-amber-600 hover:duration-300 hover:ease-in'>
                            <Search size={18} className='mr-2'/>
                            Rechercher
                        </button>
                    </div>
                </div>
                <div className='h-[50vh] bg-gray-100 border-t border-slate-200 w-full'>
                    
                </div>
            </div> 
            <Footer />
        </div>
    )
}
export default Research