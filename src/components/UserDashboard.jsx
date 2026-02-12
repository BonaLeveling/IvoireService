import React, { useState } from 'react';
import { Home, Calendar, TrendingUp, MessageSquare, Settings, LogOut, Star, MapPin, Phone, Clock, CheckCircle, XCircle, AlertCircle, DollarSign, Users, Award, Lock, Edit3 } from 'lucide-react';

const ProviderDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const [provider] = useState({
    name: 'Mariam Koné',
    profession: 'Électricienne Pro',
    email: 'mariam.kone@email.com',
    phone: '+225 07 00 00 00 00',
    location: 'Abidjan, Cocody',
    rating: 4.9,
    reviews: 127,
    avatar: 'https://via.placeholder.com/100'
  });

  const [demandes] = useState([
    { id: 1, client: 'Jean Dupont', service: 'Réparation Électrique', date: '2024-02-15', time: '14:00', status: 'pending', price: '15,000 FCFA', location: 'Abidjan, Cocody', description: 'Problème d\'électricité dans la cuisine' },
    { id: 2, client: 'Fatou Diallo', service: 'Installation Lumière', date: '2024-02-16', time: '10:00', status: 'accepted', price: '50,000 FCFA', location: 'Abidjan, Plateau', description: 'Installation de lampadaires extérieurs' },
    { id: 3, client: 'Ahmed Hassan', service: 'Dépannage Électrique', date: '2024-02-18', time: '16:00', status: 'completed', price: '20,000 FCFA', location: 'Abidjan, Marcory', description: 'Vérification du tableau électrique' }
  ]);

  const [revenus] = useState({ total: '425,000 FCFA', pending: '65,000 FCFA', thisMonth: '185,000 FCFA', completed: 12 });

  const [avis] = useState([
    { id: 1, client: 'Jean Dupont', rating: 5, comment: 'Excellente prestation, très professionnel!', date: '2024-02-10', service: 'Réparation Électrique' },
    { id: 2, client: 'Marie Brou', rating: 4.5, comment: 'Très satisfait, travail rapide', date: '2024-02-08', service: 'Installation Lumière' },
    { id: 3, client: 'Kofi Mensah', rating: 5, comment: 'Professionnel et courtois', date: '2024-02-05', service: 'Dépannage Électrique' }
  ]);

  const sidebarItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: Home },
    { id: 'demandes', label: 'Demandes', icon: AlertCircle },
    { id: 'interventions', label: 'Interventions', icon: Calendar },
    { id: 'revenus', label: 'Revenus', icon: DollarSign },
    { id: 'avis', label: 'Avis clients', icon: Star },
    { id: 'profil', label: 'Profil Pro', icon: Award },
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { color: 'bg-orange-50 text-[#FF8200] border-orange-100', icon: AlertCircle, text: 'En attente' },
      accepted: { color: 'bg-blue-50 text-blue-600 border-blue-100', icon: CheckCircle, text: 'Accepté' },
      completed: { color: 'bg-green-50 text-[#009A44] border-green-100', icon: CheckCircle, text: 'Terminé' },
      rejected: { color: 'bg-red-50 text-red-600 border-red-100', icon: XCircle, text: 'Refusé' }
    };
    const config = statusConfig[status];
    const Icon = config.icon;
    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${config.color}`}>
        <Icon size={12} /> {config.text}
      </span>
    );
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#FF8200] via-[#ff9a35] to-[#009A44] rounded-2xl p-8 text-white shadow-xl">
        <div className="relative z-10">
          <h1 className="text-3xl font-black mb-2">Akwaba, {provider.name} ! 🇨🇮</h1>
          <p className="text-white/90 text-lg">Votre expertise fait briller la Côte d'Ivoire aujourd'hui.</p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'En attente', val: demandes.filter(d => d.status === 'pending').length, icon: AlertCircle, color: 'text-[#FF8200]', bg: 'bg-orange-50' },
          { label: 'Missions', val: revenus.completed, icon: CheckCircle, color: 'text-[#009A44]', bg: 'bg-green-50' },
          { label: 'Ce mois', val: revenus.thisMonth, icon: DollarSign, color: 'text-[#009A44]', bg: 'bg-green-50' },
          { label: 'Note globale', val: provider.rating, icon: Star, color: 'text-yellow-500', bg: 'bg-yellow-50' }
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center`}>
                <stat.icon className={stat.color} size={24} />
              </div>
              <div>
                <p className="text-2xl font-black text-gray-900">{stat.val}</p>
                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
            <Clock className="text-[#FF8200]" size={20}/> Activités récentes
          </h2>
        </div>
        <div className="space-y-3">
          {demandes.slice(0, 3).map(demande => (
            <div key={demande.id} className="flex items-center justify-between p-4 border border-gray-50 rounded-xl hover:border-orange-100 hover:bg-orange-50/30 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-white transition-colors">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{demande.service}</h3>
                  <p className="text-sm text-gray-500 font-medium">{demande.client} • {demande.date}</p>
                </div>
              </div>
              <div className="text-right">
                {getStatusBadge(demande.status)}
                <p className="text-sm font-black text-gray-900 mt-1">{demande.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDemandes = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-black text-gray-900 tracking-tight">Nouvelles demandes</h1>
      <div className="grid gap-4">
        {demandes.filter(d => d.status === 'pending').length > 0 ? (
          demandes.filter(d => d.status === 'pending').map(demande => (
            <div key={demande.id} className="bg-white rounded-2xl p-6 shadow-sm border-l-[6px] border-[#FF8200] hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-black text-gray-900">{demande.service}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#FF8200] animate-pulse"></div>
                    <p className="text-sm font-bold text-[#FF8200]">Client : {demande.client}</p>
                  </div>
                </div>
                <span className="text-xl font-black text-gray-900 bg-gray-50 px-4 py-2 rounded-lg">{demande.price}</span>
              </div>
              <p className="text-gray-600 mb-6 bg-gray-50/80 p-4 rounded-xl text-sm leading-relaxed border border-gray-100">{demande.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-6 text-gray-500 font-bold">
                <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg"><Calendar size={16} className="text-[#009A44]" /> {demande.date} à {demande.time}</div>
                <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg"><MapPin size={16} className="text-[#009A44]" /> {demande.location}</div>
                <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg"><Phone size={16} className="text-[#009A44]" /> {provider.phone}</div>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 bg-[#009A44] text-white px-6 py-4 rounded-xl hover:bg-[#00853a] transition-all font-black shadow-lg shadow-green-900/10">ACCEPTER LA MISSION</button>
                <button className="px-6 py-4 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all font-bold">Décliner</button>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-2xl p-20 text-center border-2 border-dashed border-gray-100">
            <p className="text-gray-400 font-bold text-lg">Aucune demande pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderInterventions = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-black text-gray-900 tracking-tight">Planning des interventions</h1>
      <div className="space-y-4">
        {demandes.filter(d => d.status !== 'pending').map(demande => (
          <div key={demande.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 group hover:border-[#009A44]/30 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#009A44] font-black">
                  {demande.date.split('-')[2]}
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900">{demande.service}</h3>
                  <p className="text-gray-500 font-medium">Client: {demande.client}</p>
                </div>
              </div>
              {getStatusBadge(demande.status)}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-6 text-gray-500 font-bold">
              <div className="flex items-center gap-2"><Calendar size={16} /> {demande.date}</div>
              <div className="flex items-center gap-2"><MapPin size={16} /> {demande.location}</div>
              <div className="flex items-center gap-2 text-gray-900"><DollarSign size={16} className="text-[#009A44]" /> {demande.price}</div>
            </div>
            {demande.status === 'accepted' && (
              <button className="w-full bg-white border-2 border-[#009A44] text-[#009A44] px-4 py-3 rounded-xl hover:bg-[#009A44] hover:text-white transition-all font-black uppercase tracking-wide">
                Marquer comme terminé
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderRevenus = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-black text-gray-900 tracking-tight">Gestion Financière</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border-b-8 border-[#009A44]">
          <p className="text-gray-400 text-[10px] font-black uppercase mb-2 tracking-[0.2em]">Total accumulé</p>
          <p className="text-3xl font-black text-gray-900">{revenus.total}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border-b-8 border-[#FF8200]">
          <p className="text-gray-400 text-[10px] font-black uppercase mb-2 tracking-[0.2em]">En attente</p>
          <p className="text-3xl font-black text-[#FF8200]">{revenus.pending}</p>
        </div>
        <div className="bg-[#009A44] rounded-2xl p-6 shadow-lg shadow-green-900/20 text-white">
          <p className="text-white/60 text-[10px] font-black uppercase mb-2 tracking-[0.2em]">Ce mois-ci</p>
          <p className="text-3xl font-black">{revenus.thisMonth}</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">Historique des transactions</h2>
        <div className="divide-y divide-gray-50">
          {demandes.filter(d => d.status === 'completed').map(demande => (
            <div key={demande.id} className="flex justify-between items-center py-5 hover:bg-gray-50/50 transition-colors px-2 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-[#009A44]"><DollarSign size={18} /></div>
                <div>
                  <h3 className="font-black text-gray-900">{demande.service}</h3>
                  <p className="text-[10px] text-gray-400 uppercase font-black">{demande.date}</p>
                </div>
              </div>
              <p className="text-lg font-black text-[#009A44]">+ {demande.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAvis = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-black text-gray-900 tracking-tight">Retours clients</h1>
      <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-12">
        <div className="text-center bg-gray-50 p-8 rounded-3xl min-w-[200px]">
          <p className="text-7xl font-black text-gray-900">{provider.rating}</p>
          <div className="flex justify-center gap-1.5 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className={i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-200'} />
            ))}
          </div>
          <p className="text-gray-400 text-[10px] font-black mt-4 uppercase tracking-[0.2em]">Satisfaction client</p>
        </div>
        <div className="flex-1">
          <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-[#FF8200] relative">
            <span className="absolute -top-4 left-6 text-4xl text-[#FF8200] opacity-50">“</span>
            <p className="text-gray-700 font-bold italic text-lg leading-relaxed">
              "Mariam est l'une de nos prestataires d'élite avec un taux de recommandation de 100%."
            </p>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        {avis.map(review => (
          <div key={review.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 hover:border-orange-100 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-black text-gray-400">{review.client.charAt(0)}</div>
                <div>
                  <h3 className="font-black text-gray-900">{review.client}</h3>
                  <p className="text-[10px] font-black text-[#FF8200] uppercase tracking-widest">{review.service}</p>
                </div>
              </div>
              <div className="flex gap-1 bg-yellow-50 px-3 py-1.5 rounded-full">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className={i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-200'} />
                ))}
              </div>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed pl-13">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfil = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-black text-gray-900 tracking-tight">Votre Identité Pro</h1>
      <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10 pb-10 border-b border-gray-50">
          <div className="relative group">
            <div className="w-32 h-32 bg-gradient-to-tr from-[#FF8200] to-[#009A44] rounded-3xl flex items-center justify-center p-1 shadow-xl transform group-hover:rotate-3 transition-transform">
              <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center">
                <Users size={50} className="text-[#FF8200]" />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#009A44] text-white p-2 rounded-xl border-4 border-white"><CheckCircle size={16}/></div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black text-gray-900">{provider.name}</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
              <span className="bg-green-50 text-[#009A44] px-4 py-1 rounded-full font-black text-xs uppercase tracking-widest border border-green-100">{provider.profession}</span>
              <span className="bg-gray-50 text-gray-500 px-4 py-1 rounded-full font-black text-xs uppercase tracking-widest border border-gray-100">{provider.location}</span>
            </div>
          </div>
          <button className="md:ml-auto flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-black hover:bg-black transition-all shadow-lg">
            <Edit3 size={18} /> MODIFIER LE PROFIL
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[ { l: 'Nom Complet', v: provider.name }, { l: 'Profession', v: provider.profession } ].map((field, i) => (
            <div key={i}>
              <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 tracking-[0.2em]">{field.l}</label>
              <input type="text" defaultValue={field.v} className="w-full px-5 py-4 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-[#009A44]/10 focus:border-[#009A44] outline-none bg-gray-50/50 font-bold text-gray-700 transition-all" />
            </div>
          ))}
          <div className="md:col-span-2">
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-3 tracking-[0.2em]">Bio & Expertise Professionnelle</label>
            <textarea className="w-full px-5 py-4 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-[#009A44]/10 focus:border-[#009A44] outline-none bg-gray-50/50 h-40 font-bold text-gray-700 transition-all">Électricienne expérimentée. Spécialisée dans les installations domestiques et le dépannage d'urgence à Cocody et alentours. Travail certifié IvoireService.</textarea>
          </div>
        </div>
        <div className="mt-10 flex justify-end">
          <button className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-[#009A44] to-[#00853a] text-white rounded-2xl font-black hover:shadow-2xl hover:scale-[1.02] transition-all shadow-xl shadow-green-900/20 uppercase tracking-widest">
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      case 'demandes': return renderDemandes();
      case 'interventions': return renderInterventions();
      case 'revenus': return renderRevenus();
      case 'avis': return renderAvis();
      case 'profil': return renderProfil();
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-['DM_Sans'] text-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-72 bg-white shadow-[20px_0_60px_-15px_rgba(0,0,0,0.03)] min-h-screen fixed left-0 top-0 z-50">
          <div className="p-10 border-b border-gray-50/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-tr from-[#FF8200] to-[#009A44] rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-orange-500/20">I</div>
              <h2 className="text-gray-900 text-2xl font-black tracking-tighter">Ivoire<span className="text-[#009A44]">Service</span></h2>
            </div>
          </div>
          <nav className="p-6 mt-6">
            <ul className="space-y-2">
              {sidebarItems.map(item => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 ${
                        isActive ? 'bg-gradient-to-r from-[#009A44] to-[#00853a] text-white shadow-xl shadow-green-900/20' : 'text-gray-400 hover:bg-orange-50 hover:text-[#FF8200]'
                      }`}
                    >
                      <Icon size={22} strokeWidth={isActive ? 3 : 2} />
                      <span className="font-black text-sm uppercase tracking-wide">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="absolute bottom-0 w-72 p-8 border-t border-gray-50 bg-white/80 backdrop-blur-sm">
            <button className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-red-500 hover:bg-red-50 transition-all font-black border-2 border-transparent hover:border-red-100">
              <LogOut size={20} />
              <span className="uppercase text-xs tracking-widest">Déconnexion</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-72 p-12">
          <div className="max-w-5xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;