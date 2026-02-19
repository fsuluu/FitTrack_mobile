
import React from 'react';
import { Screen } from '../types';

interface HealthListMenuScreenProps {
  onBack: () => void;
  onNavigate: (screen: Screen) => void;
}

const HealthListMenuScreen: React.FC<HealthListMenuScreenProps> = ({ onBack, onNavigate }) => {
  const listItems = [
    { title: 'Anasayfa', icon: 'https://cdn-icons-png.flaticon.com/512/2619/2619277.png', id: 'HOME' },
    { title: 'Formda mısın?', icon: 'https://cdn-icons-png.flaticon.com/512/3201/3201243.png', id: 'HEALTH_MENU' },
    { title: 'Adım Ölçer', icon: 'https://cdn-icons-png.flaticon.com/512/2619/2619280.png', id: 'PROGRESS' },
    { title: 'Kalori Cetveli', icon: 'https://cdn-icons-png.flaticon.com/512/2666/2666505.png', id: 'CALORIE_CHART' },
    { title: 'Aktiviteler', icon: 'https://cdn-icons-png.flaticon.com/512/2964/2964514.png', id: 'DISCOVER' },
    { title: 'Nasıl Yakarım?', icon: 'https://cdn-icons-png.flaticon.com/512/414/414167.png', id: 'DISCOVER' },
    { title: 'Vücut Değerlerim', icon: 'https://cdn-icons-png.flaticon.com/512/1043/1043444.png', id: 'PROFILE' },
    { title: 'Bazal Metabolizma', icon: 'https://cdn-icons-png.flaticon.com/512/822/822143.png', id: 'HEALTH_MENU' },
    { title: 'Protein İhtiyacı', icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046751.png', id: 'PROTEIN_CALC' }
  ];

  return (
    <div className="bg-white min-h-screen pb-32">
      <header className="bg-black h-16 flex items-center justify-between px-4 sticky top-0 z-50">
        <button onClick={onBack} className="text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center border-2 border-slate-800">
          <img src="https://seeklogo.com/images/S/saglik-bakanligi-logo-D0E03C1167-seeklogo.com.png" alt="logo" className="w-8 h-8" />
        </div>
        <div className="w-10" />
      </header>

      <main className="divide-y divide-slate-100">
        {listItems.map((item, index) => (
          <div 
            key={index} 
            onClick={() => onNavigate(item.id as Screen)}
            className="flex items-center gap-4 px-6 py-4 active:bg-slate-50 transition-colors cursor-pointer group"
          >
            <div className="w-8 h-8 flex items-center justify-center grayscale group-active:grayscale-0 transition-all">
              <img src={item.icon} alt={item.title} className="w-6 h-6 object-contain" />
            </div>
            <span className="text-sm font-semibold text-slate-500 group-active:text-black">
              {item.title}
            </span>
          </div>
        ))}
      </main>
    </div>
  );
};

export default HealthListMenuScreen;
