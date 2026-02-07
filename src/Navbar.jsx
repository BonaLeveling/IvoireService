import './App.css'
import {Link as ScrollLink} from 'react-scroll'
import {Link as RouterLink} from 'react-router'
import {TextAlignJustify} from 'lucide-react'

function Navbar() {
    const menu= ['Accueil', 'A propos','Comment ça marche','Services','Aide', 'Contact']
    return (
        <nav className='flex items-center justify-between px-6 py-4 bg-white/80 w-full fixed font-["DM_Sans"] z-50'>
            <div className='text-xl font-bold cursor-default'>
                <span>IvoireService</span>
            </div>
            <ul className='hidden md:flex items-center gap-6 text-sm font-medium'>
                {menu.map((item) => <ScrollLink to={item} spy={true} smooth={true} offset={-70} duration={500} className='relative cursor-pointer after:inline-block after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#f27f0c] after:rounded-full hover:after:w-full hover:after:duration-150 hover:after:ease-in'>{item}</ScrollLink>)}
            </ul>
            <ul className='lg:flex items-center gap-4 text-sm font-medium hidden'>
                <RouterLink to="/login" className='bg-green-500 text-white px-3 py-1.5 rounded-md hover:bg-green-600 hover:duration-300 hover:ease-in'>Connexion</RouterLink>
                <RouterLink to="/register" className='bg-[#f27f0c] text-white px-3 py-1.5 rounded-md hover:bg-amber-600 hover:duration-300 hover:ease-in'>Inscription</RouterLink>
            </ul>
            <button className='md:hidden'>
                <TextAlignJustify />
            </button>
        </nav>
    )
}

export default Navbar