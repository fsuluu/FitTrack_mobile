
import React from 'react';
import { Screen } from '../types';

interface HealthMenuScreenProps {
  onBack: () => void;
  onNavigate: (screen: Screen) => void;
  onOpenList: () => void;
}

const HealthMenuScreen: React.FC<HealthMenuScreenProps> = ({ onBack, onNavigate, onOpenList }) => {
  const menuItems = [
    { title: 'FORMDA MISIN?', icon: 'https://cdn-icons-png.flaticon.com/512/3201/3201243.png', id: 'PROGRESS' },
    { title: 'ADIM ÖLÇER', icon: 'https://cdn-icons-png.flaticon.com/512/2619/2619280.png', id: 'PROGRESS' },
    { title: 'KALORİ CETVELİ', icon: 'https://cdn-icons-png.flaticon.com/512/2666/2666505.png', id: 'CALORIE_CHART' },
    { title: 'VÜCUT DEĞERLERİM', icon: 'https://cdn-icons-png.flaticon.com/512/1043/1043444.png', id: 'PROFILE' },
    { title: 'NASIL YAKARIM?', icon: 'https://cdn-icons-png.flaticon.com/512/414/414167.png', id: 'DISCOVER' },
    { title: 'AKTİVİTELER', icon: 'https://cdn-icons-png.flaticon.com/512/2619/2619277.png', id: 'HOME' },
    { title: 'PROTEİN İHTİYACI', icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046751.png', id: 'PROTEIN_CALC' },
    { title: 'BAZAL METABOLİZMA', icon: 'https://cdn-icons-png.flaticon.com/512/822/822143.png', id: 'HEALTH_MENU' }
  ];

  return (
    <div className="bg-[#EBEBEB] min-h-screen pb-32">
      <header className="bg-black h-16 flex items-center justify-between px-4 sticky top-0 z-50 shadow-md">
        <button onClick={onOpenList} className="text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center border-2 border-slate-800 shadow-inner">
          <img src="https://seeklogo.com/images/S/saglik-bakanligi-logo-D0E03C1167-seeklogo.com.png" alt="logo" className="w-8 h-8" />
        </div>
        <button onClick={onBack} className="text-white p-2">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </header>
      
      <div className="bg-black h-[1px]" />

      <main className="grid grid-cols-2 gap-[1px] bg-slate-300">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            onClick={() => onNavigate(item.id as Screen)}
            className="bg-white aspect-square flex flex-col items-center justify-center p-4 active:bg-slate-50 transition-colors cursor-pointer relative group"
          >
            <div className="w-20 h-20 mb-3 flex items-center justify-center">
              <img src={item.icon} alt={item.title} className="w-14 h-14 object-contain opacity-90 group-active:scale-110 transition-transform" />
            </div>
            <span className="text-[11px] font-black text-black text-center tracking-tight leading-tight px-2 uppercase">
              {item.title}
            </span>
          </div>
        ))}
      </main>
      
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
    </div>
  );
};

export default HealthMenuScreen;
