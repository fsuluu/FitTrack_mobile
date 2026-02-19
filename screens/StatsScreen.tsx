
import React from 'react';
import { MOCK_STATS } from '../data/mockData';

const StatsScreen: React.FC = () => {
  const hydrationPercent = (MOCK_STATS.hydration / MOCK_STATS.hydrationGoal) * 100;

  return (
    <div className="min-h-screen bg-white pb-24 animate-in fade-in duration-500">
      <header className="px-6 pt-10 pb-6 bg-[#34AADC] text-white">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold uppercase tracking-widest">Sonraki Bildirim</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        </div>
        <div className="flex items-center gap-2 mb-2">
           <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" /></svg>
           <span className="text-xl font-bold">18:00</span>
        </div>
        <p className="text-white/80 text-[10px] leading-tight">Vücut sıvı dengenizi korumak için egzersiz öncesinde ve sonrasında su içmeyi unutmayın.</p>
      </header>

      <main className="px-6 mt-8 flex flex-col items-center">
        <p className="text-slate-400 text-[10px] font-bold uppercase mb-8">Günlük hedefine ulaşmana 1000 ml kaldı.</p>
        
        <div className="relative w-48 h-96 mb-12">
          {/* Human Silhouette Placeholder SVG */}
          <svg className="w-full h-full text-slate-100" viewBox="0 0 200 500" fill="currentColor">
             <path d="M100 0C85 0 75 10 75 25C75 40 85 50 100 50C115 50 125 40 125 25C125 10 115 0 100 0ZM100 60C70 60 50 80 50 110L50 250C50 260 55 270 65 270L75 270L75 480C75 490 85 500 100 500C115 500 125 490 125 480L125 270L135 270C145 270 150 260 150 250L150 110C150 80 130 60 100 60Z" />
          </svg>
          {/* Progress Overlay */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'path("M100 0C85 0 75 10 75 25C75 40 85 50 100 50C115 50 125 40 125 25C125 10 115 0 100 0ZM100 60C70 60 50 80 50 110L50 250C50 260 55 270 65 270L75 270L75 480C75 490 85 500 100 500C115 500 125 490 125 480L125 270L135 270C145 270 150 260 150 250L150 110C150 80 130 60 100 60Z")' }}>
            <div 
              className="absolute bottom-0 left-0 right-0 bg-[#34AADC] transition-all duration-1000" 
              style={{ height: `${hydrationPercent}%` }}
            />
          </div>
          <div className="absolute top-1/3 right-[-80px] text-center">
             <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-[#34AADC]">{MOCK_STATS.hydration}</span>
                <span className="text-slate-300 font-bold text-lg">/</span>
                <span className="text-slate-900 font-black text-lg">{MOCK_STATS.hydrationGoal} ml</span>
             </div>
          </div>
        </div>

        <button className="w-full bg-[#34AADC] text-white py-4 rounded-xl font-bold flex items-center justify-between px-6 shadow-lg shadow-blue-100">
           <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" /></svg>
              <span>1 Bardak (200 ml) Ekle</span>
           </div>
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
        </button>
      </main>
    </div>
  );
};

export default StatsScreen;
