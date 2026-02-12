import './App.css'
import Footer from './Footer'
import {Link as RouterLink} from 'react-router'
import { Search, Map, BrickWall, Boxes, TextAlignJustify, Star, MessageSquare } from 'lucide-react'
import { useState } from 'react'

function Research () {
    const [service, setService] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');

    // Mock data
    const mockResults = [
        {
            id: 1,
            name: 'Mariam Koné',
            profession: 'Électricienne',
            city: 'Abidjan',
            district: 'Cocody',
            rating: 4.9,
            available: true,
            phone: '+2250700000000'
        },
        {
            id: 2,
            name: 'Jean Dupont',
            profession: 'Plombier',
            city: 'Abidjan',
            district: 'Plateau',
            rating: 4.7,
            available: true,
            phone: '+2250700000001'
        },
        {
            id: 3,
            name: 'Fatou Diallo',
            profession: 'Ménage',
            city: 'Bouaké',
            district: 'Centre',
            rating: 4.8,
            available: false,
            phone: '+2250700000002'
        }
    ];

    const filteredResults = mockResults.filter(result => {
        return (!service || result.profession.toLowerCase().includes(service.toLowerCase())) &&
               (!city || result.city.toLowerCase().includes(city.toLowerCase())) &&
               (!district || result.district.toLowerCase().includes(district.toLowerCase()));
    });

    return (
        <div className=' font-["DM_Sans"]  text-base font-medium '>
            <nav className='flex items-center justify-between px-6 py-4 bg-white/80 w-full fixed font-["DM_Sans"] z-50'>
                <RouterLink to="/" className='text-xl font-bold cursor-default'>
                    <span>IvoireService</span>
                </RouterLink>
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
                        Trouvez le professionnel idéal près de chez vous en quelques clics.
                    </p>
                    <div className='mb-8 flex flex-col md:flex-row gap-4 items-center justify-center mt-8 py-1 max-md:px-2 md:pl-2 border border-slate-100 shadow-xl rounded-xl md:max-w-4xl w-full'>
                        <div className='w-full md:w-1/4 px-6 flex items-center gap-1 group '>
                            < Boxes className='stroke-black/60 group-hover:stroke-[#f27f0c]' size={24}/>
                            <select
                                name="service"
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                                className=' w-full px-2 py-3 focus:outline-0'
                            >
                                <option value="">Type de service</option>
                                <option value="plomberie">Plomberie</option>
                                <option value="électricien">Électricien</option>
                                <option value="ménage">Ménage</option>
                                <option value="jardinage">Jardinage</option>
                                <option value="peinture">Peinture</option>
                            </select>
                        </div>
                    
                            
                        <div className='w-full md:w-1/4 px-6 flex items-center gap-1 md:border-x-2 md:border-slate-200 group '>
                            <BrickWall className='stroke-black/60 group-hover:stroke-[#f27f0c]' size={24}/>
                            <input
                                type="text"
                                placeholder='Abidjan'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className='w-full px-2 py-3 focus:outline-0'
                            />
                        </div>
                        <div className='w-full md:w-1/4 px-6 flex items-center gap-1 group '>
                            <Map className='stroke-black/60 group-hover:stroke-[#f27f0c]' size={24}/>
                            <input
                                type="text"
                                placeholder='Cocody'
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                className='w-full px-2 py-3 focus:outline-0'
                            />
                        </div>
                        <button className='max-md:w-full bg-[#f27f0c] text-white px-5 py-3 rounded-lg cursor-pointer flex items-center justify-center hover:bg-amber-600 hover:duration-300 hover:ease-in'>
                            <Search size={18} className='mr-2'/>
                            Rechercher
                        </button>
                    </div>
                </div>

                {/* Results */}
                <div className='px-6 sm:px-8 pb-12'>
                    <h2 className='text-xl font-bold mb-6'>Résultats ({filteredResults.length})</h2>
                    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {filteredResults.map((result) => (
                            <div key={result.id} className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow'>
                                <div className='flex items-start justify-between mb-4'>
                                    <div>
                                        <h3 className='font-semibold text-lg'>{result.name}</h3>
                                        <p className='text-gray-600'>{result.profession}</p>
                                        <p className='text-sm text-gray-500'>{result.city}, {result.district}</p>
                                    </div>
                                    <div className={`px-2 py-1 rounded-full text-xs ${result.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {result.available ? 'Disponible' : 'Indisponible'}
                                    </div>
                                </div>
                                <div className='flex items-center mb-4'>
                                    <div className='flex items-center'>
                                        <Star className='fill-yellow-400 text-yellow-400 mr-1' size={16} />
                                        <span className='font-medium'>{result.rating}</span>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <a
                                        href={`https://wa.me/${result.phone.replace('+', '')}`}
                                        className='flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center text-sm'
                                    >
                                        <MessageSquare size={16} className='mr-2' />
                                        WhatsApp
                                    </a>
                                    <RouterLink
                                        to={`/profile/${result.id}`}
                                        className='flex-1 border border-primary text-primary py-2 px-4 rounded-md hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-sm'
                                    >
                                        Voir profil
                                    </RouterLink>
                                </div>
                            </div>
                        ))}
                    </div>
                    {filteredResults.length === 0 && (
                        <div className='text-center py-12'>
                            <p className='text-gray-500'>Aucun résultat trouvé. Essayez de modifier vos critères de recherche.</p>
                        </div>
                    )}
                </div>
            </div> 
            <Footer />
        </div>
    )
}
export default Research