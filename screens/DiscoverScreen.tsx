
import React from 'react';
import { EXERCISES } from '../data/mockData';

interface DiscoverScreenProps {
  onBack: () => void;
}

const DiscoverScreen: React.FC<DiscoverScreenProps> = ({ onBack }) => {
  return (
    <div className="pb-24 animate-in fade-in duration-500 bg-white min-h-screen">
      <header className="px-5 pt-10 pb-4 flex items-center justify-between border-b border-slate-50">
        <button onClick={onBack} className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 border border-slate-100 active:scale-90 transition-transform">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
          </div>
          <span className="text-sm font-bold text-slate-800">Keşfet</span>
        </div>
        <div className="w-10" />
      </header>

      <main className="px-5 mt-8">
        <div className="mb-10">
           <h2 className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Workout Central</h2>
           <h1 className="text-4xl font-black text-slate-900 tracking-tight">Antrenmanlar</h1>
           <p className="text-slate-400 text-sm font-medium mt-1">Sana uygun seviyeyi seç ve başla.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {EXERCISES.map((ex) => (
            <div key={ex.id} className="relative aspect-[4/5] rounded-[40px] overflow-hidden group cursor-pointer shadow-sm active:scale-95 transition-all">
              <img src={ex.image} alt={ex.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-black text-base leading-tight uppercase tracking-tight">{ex.title}</h3>
                <p className="text-white/70 text-[9px] font-bold uppercase mt-1 tracking-widest">{ex.subtitle}</p>
              </div>
            </div>
          ))}
          
          <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-sm bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-6 text-center group cursor-pointer active:scale-95 transition-all">
            <div className="text-slate-300 mb-3 group-hover:scale-110 transition-transform">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"/></svg>
            </div>
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Çok Yakında</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DiscoverScreen;
