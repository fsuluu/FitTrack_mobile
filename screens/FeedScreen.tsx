
import React from 'react';
import { EVENTS } from '../data/mockData';

interface FeedScreenProps {
  onBack: () => void;
}

const FeedScreen: React.FC<FeedScreenProps> = ({ onBack }) => {
  return (
    <div className="pb-32 animate-in fade-in duration-500 bg-slate-50 min-h-screen">
      <header className="px-5 pt-10 pb-6 flex items-center justify-between bg-white border-b border-slate-100 sticky top-0 z-40">
        <button onClick={onBack} className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 border border-slate-100 active:scale-90 transition-transform">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h1 className="text-xl font-black text-slate-900 uppercase tracking-widest">Etkinlikler</h1>
        <div className="flex gap-2">
           <button className="w-10 h-10 rounded-xl bg-[#FF3B30] flex items-center justify-center text-white shadow-lg shadow-red-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
           </button>
        </div>
      </header>

      <main className="px-5 mt-8 space-y-10">
        {EVENTS.map((event) => (
          <div key={event.id} className="bg-white rounded-[48px] overflow-hidden shadow-sm border border-slate-100 transition-transform active:scale-[0.98]">
            <div className="relative h-72">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              <div className="absolute top-6 left-6 bg-white rounded-3xl p-3 px-5 shadow-2xl flex flex-col items-center min-w-[70px] border border-slate-100">
                <span className="text-xl font-black text-slate-900 leading-none">{event.date?.split(' ')[0]}</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mt-1">{event.date?.split(' ')[1]}</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-xl rounded-[32px] p-6 border border-white/20">
                <h3 className="text-white font-black text-xl leading-tight mb-1">{event.title}</h3>
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{event.subtitle}</span>
              </div>
            </div>
            
            <div className="p-7 flex flex-col gap-6">
              <div className="flex items-center justify-between text-slate-500 text-[10px] font-black uppercase tracking-[0.15em]">
                <div className="flex items-center gap-3">
                   <div className="p-1.5 bg-red-50 rounded-lg">
                      <svg className="w-4 h-4 text-[#FF3B30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                   </div>
                   <span>{event.location}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                 <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <img 
                        key={i} 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${event.id + i}`} 
                        className="w-10 h-10 rounded-full border-4 border-white bg-slate-100 shadow-sm" 
                        alt="participant" 
                      />
                    ))}
                    <div className="w-10 h-10 rounded-full border-4 border-white bg-slate-50 flex items-center justify-center text-[10px] font-black text-slate-400">
                      +12
                    </div>
                 </div>
                 <button className="bg-[#FF3B30] text-white px-8 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-red-100 active:scale-95 transition-transform">
                    Katıl
                 </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default FeedScreen;
