import React, { useState } from 'react';
import { Home, Calendar, TrendingUp, MessageSquare, Settings, LogOut, Star, MapPin, Phone, Clock, CheckCircle, XCircle, AlertCircle, DollarSign, Users, Award, Lock, Edit3 } from 'lucide-react';

const ProviderDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Données simulées
  const [provider] = useState({
    name: 'Mariam Koné',
    profession: 'Électricienne',
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

  const [revenus] = useState({
    total: '425,000 FCFA',
    pending: '65,000 FCFA',
    thisMonth: '185,000 FCFA',
    completed: 12
  });

  const [avis] = useState([
    { id: 1, client: 'Jean Dupont', rating: 5, comment: 'Excellente prestation, très professionnel!', date: '2024-02-10', service: 'Réparation Électrique' },
    { id: 2, client: 'Marie Brou', rating: 4.5, comment: 'Très satisfait, travail rapide', date: '2024-02-08', service: 'Installation Lumière' },
    { id: 3, client: 'Kofi Mensah', rating: 5, comment: 'Professionnel et courtois', date: '2024-02-05', service: 'Dépannage Électrique' }
  ]);

  const sidebarItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: Home },
    { id: 'demandes', label: 'Demandes en attente', icon: AlertCircle },
    { id: 'interventions', label: 'Mes interventions', icon: Calendar },
    { id: 'revenus', label: 'Mes revenus', icon: DollarSign },
    { id: 'avis', label: 'Mes avis', icon: Star },
    { id: 'profil', label: 'Mon profil pro', icon: Award },
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { color: 'bg-orange-100 text-[#FF8200]', icon: AlertCircle, text: 'En attente' },
      accepted: { color: 'bg-blue-100 text-blue-800', icon: CheckCircle, text: 'Accepté' },
      completed: { color: 'bg-green-100 text-[#009A44]', icon: CheckCircle, text: 'Complété' },
      rejected: { color: 'bg-red-100 text-red-800', icon: XCircle, text: 'Refusé' }
    };
    const config = statusConfig[status];
    const Icon = config.icon;
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${config.color}`}>
        <Icon size={12} />
        {config.text}
      </span>
    );
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-rfrom-[#FF8200] to-[#009A44] rounded-xl p-8 text-white shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Bienvenue, {provider.name} !</h1>
        <p className="text-white/90">Gérez vos interventions et boostez votre activité sur IvoireService.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
              <AlertCircle className="text-[#FF8200]" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{demandes.filter(d => d.status === 'pending').length}</p>
              <p className="text-sm text-gray-500 uppercase font-semibold">En attente</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
              <CheckCircle className="text-[#009A44]" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{revenus.completed}</p>
              <p className="text-sm text-gray-500 uppercase font-semibold">Missions</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
              <DollarSign className="text-[#009A44]" size={24} />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">{revenus.thisMonth}</p>
              <p className="text-sm text-gray-500 uppercase font-semibold">Ce mois</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center">
              <Star className="text-yellow-500 fill-current" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{provider.rating}</p>
              <p className="text-sm text-gray-500 uppercase font-semibold">{provider.reviews} avis</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Dernières activités</h2>
        <div className="space-y-4">
          {demandes.slice(0, 3).map(demande => (
            <div key={demande.id} className="flex items-center justify-between p-4 border border-gray-50 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{demande.service}</h3>
                  <p className="text-sm text-gray-500">{demande.client} • {demande.date}</p>
                </div>
              </div>
              <div className="text-right">
                {getStatusBadge(demande.status)}
                <p className="text-sm font-bold text-gray-900 mt-1">{demande.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDemandes = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Demandes de service</h1>
      <div className="space-y-4">
        {demandes.filter(d => d.status === 'pending').length > 0 ? (
          demandes.filter(d => d.status === 'pending').map(demande => (
            <div key={demande.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 border-l-4 border-l-[#FF8200]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{demande.service}</h3>
                  <p className="text-sm font-medium text-[#FF8200]">Nouveau client: {demande.client}</p>
                </div>
                <span className="text-lg font-bold text-gray-900">{demande.price}</span>
              </div>
              <p className="text-gray-600 mb-6 bg-gray-50 p-3 rounded-lg">{demande.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-6 text-gray-500">
                <div className="flex items-center gap-2"><Calendar size={16} /> <span>{demande.date} à {demande.time}</span></div>
                <div className="flex items-center gap-2"><MapPin size={16} /> <span>{demande.location}</span></div>
                <div className="flex items-center gap-2"><Phone size={16} /> <span>{provider.phone}</span></div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-[#009A44] text-white px-4 py-3 rounded-lg hover:bg-[#00853a] transition-colors font-bold shadow-sm">Accepter la mission</button>
                <button className="flex-1 bg-gray-100 text-gray-600 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors font-bold">Décliner</button>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-xl p-12 text-center border border-gray-100">
            <p className="text-gray-400">Aucune nouvelle demande pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderInterventions = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Mes interventions</h1>
      <div className="space-y-4">
        {demandes.filter(d => d.status !== 'pending').map(demande => (
          <div key={demande.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{demande.service}</h3>
                <p className="text-gray-500">Client: {demande.client}</p>
              </div>
              {getStatusBadge(demande.status)}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4 text-gray-500">
              <div className="flex items-center gap-2 font-medium"><Calendar size={16} /> {demande.date}</div>
              <div className="flex items-center gap-2 font-medium"><MapPin size={16} /> {demande.location}</div>
              <div className="flex items-center gap-2 font-medium text-gray-900"><DollarSign size={16} /> {demande.price}</div>
            </div>
            {demande.status === 'accepted' && (
              <button className="w-full bg-[#009A44] text-white px-4 py-2 rounded-lg hover:bg-[#00853a] transition-colors font-bold">
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
      <h1 className="text-2xl font-bold text-gray-900">Mes revenus</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border-b-4 border-[#009A44]">
          <p className="text-gray-500 text-sm font-bold uppercase mb-2 tracking-wider">Total accumulé</p>
          <p className="text-3xl font-black text-gray-900">{revenus.total}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border-b-4 border-[#FF8200]">
          <p className="text-gray-500 text-sm font-bold uppercase mb-2 tracking-wider">En attente</p>
          <p className="text-3xl font-black text-[#FF8200]">{revenus.pending}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border-b-4 border-green-200">
          <p className="text-gray-500 text-sm font-bold uppercase mb-2 tracking-wider">Paiements reçus</p>
          <p className="text-3xl font-black text-[#009A44]">{revenus.thisMonth}</p>
        </div>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Historique de paiement</h2>
        <div className="divide-y divide-gray-50">
          {demandes.filter(d => d.status === 'completed').map(demande => (
            <div key={demande.id} className="flex justify-between items-center py-4">
              <div>
                <h3 className="font-bold text-gray-900">{demande.service}</h3>
                <p className="text-xs text-gray-400 uppercase font-bold">{demande.date}</p>
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
      <h1 className="text-2xl font-bold text-gray-900">Mes avis et notes</h1>
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex items-center gap-10">
        <div className="text-center">
          <p className="text-6xl font-black text-gray-900">{provider.rating}</p>
          <div className="flex justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className={i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-200'} />
            ))}
          </div>
          <p className="text-gray-400 text-sm font-bold mt-2 uppercase">Score Global</p>
        </div>
        <div className="flex-1 space-y-2">
          <p className="text-gray-600 font-medium italic">"Mariam est l'une de nos meilleures prestataires ce mois-ci avec 100% de retours positifs."</p>
        </div>
      </div>
      <div className="space-y-4">
        {avis.map(review => (
          <div key={review.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-gray-900">{review.client}</h3>
                <p className="text-xs font-bold text-[#FF8200] uppercase">{review.service}</p>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-200'} />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfil = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Mon profil professionnel</h1>
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center gap-6 mb-8 border-b border-gray-50 pb-8">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center border-4 border-orange-50">
            <Users size={40} className="text-[#FF8200]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{provider.name}</h2>
            <p className="text-[#009A44] font-bold uppercase text-sm tracking-wider">{provider.profession}</p>
            <p className="text-gray-400 text-sm">{provider.location}</p>
          </div>
          <button className="ml-auto flex items-center gap-2 bg-gray-50 text-gray-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            <Edit3 size={18} /> Modifier
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-black text-gray-400 uppercase mb-2 tracking-widest">Nom Complet</label>
            <input type="text" defaultValue={provider.name} className="w-full px-4 py-3 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#009A44] focus:border-transparent outline-none bg-gray-50 font-medium" />
          </div>
          <div>
            <label className="block text-xs font-black text-gray-400 uppercase mb-2 tracking-widest">Profession</label>
            <input type="text" defaultValue={provider.profession} className="w-full px-4 py-3 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#009A44] focus:border-transparent outline-none bg-gray-50 font-medium" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-black text-gray-400 uppercase mb-2 tracking-widest">Description & Services</label>
            <textarea className="w-full px-4 py-3 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#009A44] focus:border-transparent outline-none bg-gray-50 h-32 font-medium">Électricienne expérimentée en Côte d'Ivoire. Spécialisée dans les installations domestiques et le dépannage d'urgence à Cocody et alentours.</textarea>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button className="px-8 py-3 bg-[#009A44] text-white rounded-xl font-bold hover:bg-[#00853a] transition-all shadow-lg shadow-green-900/20">
            Enregistrer le profil
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
    <div className="min-h-screen bg-[#F8FAFC] font-['DM_Sans']">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-72 bg-white shadow-xl min-h-screen fixed left-0 top-0 z-50">
          <div className="p-8 border-b border-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-trfrom-[#FF8200] to-[#009A44] rounded-xl flex items-center justify-center text-white font-black text-xl">I</div>
              <h2 className="text-gray-900 text-xl font-black tracking-tighter">Ivoire<span className="text-[#009A44]">Service</span></h2>
            </div>
          </div>
          <nav className="p-4 mt-4">
            <ul className="space-y-1">
              {sidebarItems.map(item => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl text-left transition-all ${
                        isActive ? 'bg-[#009A44] text-white shadow-lg shadow-green-900/20' : 'text-gray-500 hover:bg-gray-50 hover:text-[#009A44]'
                      }`}
                    >
                      <Icon size={20} strokeWidth={isActive ? 3 : 2} />
                      <span className="font-bold">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="absolute bottom-0 w-72 p-6 border-t border-gray-50 bg-white">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-red-500 hover:bg-red-50 transition-colors font-bold">
              <LogOut size={20} />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-72 p-10">
          <div className="max-w-5xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;