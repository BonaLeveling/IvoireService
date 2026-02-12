import './App.css'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router'
import { Menu } from 'lucide-react'

function Navbar() {
    return (
        <nav className='flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-gray-100 w-full fixed top-0 font-["DM_Sans"] z-50'>
            {/* --- Logo --- */}
            <RouterLink to="/" className='cursor-pointer group'>
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-linear-to-tr from-[#FF8200] to-[#009A44] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
                        I
                    </div>
                    <h2 className="text-gray-900 text-xl font-black tracking-tight">
                        Ivoire<span className="text-[#FF8200]">Service</span>
                    </h2>
                </div>
            </RouterLink>

            {/* --- Liens de Navigation (Desktop) --- */}
            <ul className='hidden md:flex items-center gap-8 text-[15px] font-bold text-gray-600'>
                {[
                    { name: "Accueil", to: "Accueil", type: "scroll" },
                    { name: "À propos", to: "A propos", type: "scroll" },
                    { name: "Comment ça marche", to: "Comment ça marche", type: "scroll" },
                    { name: "Services", to: "Services", type: "scroll" },
                    { name: "Contact", to: "Contact", type: "scroll" }
                ].map((item) => (
                    <li key={item.name}>
                        <ScrollLink 
                            to={item.to} 
                            spy={true} 
                            smooth={true} 
                            offset={-80} 
                            duration={500} 
                            className='relative cursor-pointer py-2 transition-colors hover:text-[#FF8200] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF8200] after:transition-all hover:after:w-full'
                        >
                            {item.name}
                        </ScrollLink>
                    </li>
                ))}
            </ul>

            {/* --- Boutons d'Action --- */}
            <div className='hidden lg:flex items-center gap-4'>
                <RouterLink 
                    to="/login" 
                    className='text-gray-700 font-bold text-sm px-4 py-2 hover:text-[#009A44] transition-colors'
                >
                    Connexion
                </RouterLink>
                <RouterLink 
                    to="/register" 
                    className='bg-[#009A44] text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-[#00853a] transition-all shadow-md shadow-green-500/10 active:scale-95'
                >
                    Inscription
                </RouterLink>
            </div>

            {/* --- Menu Mobile Icon --- */}
            <button className='md:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors'>
                <Menu size={28} />
            </button>
        </nav>
    )
}

export default Navbar