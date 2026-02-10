import './App.css'
import { useState } from 'react'
import {Link as ScrollLink} from 'react-scroll'
import {Link as RouterLink} from 'react-router'
import {TextAlignJustify, X } from 'lucide-react'

function Navbar() {
    const [MenuIsOpen, setMenuIsOpen]= useState (false)
    const menu= ['Accueil', 'A propos','Comment ça marche','Services','Aide', 'Contact']
    return (
        <>
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
                <button onClick={() => setMenuIsOpen(! MenuIsOpen)} className='cursor-pointer md:hidden'>
                    <TextAlignJustify />
                </button>
            </nav>
            <div className={`md:hidden fixed right-0 bg-[#f27f0c] text-white font-["DM_Sans"] z-100 h-screen py-10 px-2 w-70 shadow-xl backdrop-blur-lg transition-transform duration-300 ease-in-out  ${MenuIsOpen?'translate-x-0' : 'translate-x-full'}`}>
                <button onClick={() => setMenuIsOpen(false)} className='cursor-pointer absolute top-2 right-2 hover:bg-white/20 rounded-md p-2'>
                    <X  size={20}/>
                </button>
                <ul className='flex flex-col mt-6'>    
                    {menu.map((item) => <ScrollLink to={item} spy={true} smooth={true} offset={-70} duration={500} onClick={() => setMenuIsOpen(false)} className='px-5 py-2 cursor-pointer hover:bg-white/20 rounded-md'>{item}</ScrollLink>)}
                    <RouterLink to="/login" onClick={() => setMenuIsOpen(false)} className='px-5 py-2 cursor-pointer hover:bg-white/20 rounded-md'>Connexion</RouterLink>
                    <RouterLink to="/register" onClick={() => setMenuIsOpen(false)} className='px-5 py-2 cursor-pointer hover:bg-white/20 rounded-md'>Inscription</RouterLink>
                </ul>
            </div>
           
        </>
    )
}

export default Navbar