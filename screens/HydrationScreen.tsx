
import React, { useState } from 'react';
import { MOCK_STATS } from '../data/mockData';

interface HydrationScreenProps {
  onBack: () => void;
}

const HydrationScreen: React.FC<HydrationScreenProps> = ({ onBack }) => {
  const [currentHydration, setCurrentHydration] = useState(MOCK_STATS.hydration);
  const goal = MOCK_STATS.hydrationGoal;
  const progress = (currentHydration / goal) * 100;
  const isGoalReached = currentHydration >= goal;

  const addWater = (amount: number) => {
    setCurrentHydration(prev => Math.min(prev + amount, goal + 500));
  };

  return (
    <div className="pb-32 px-6 pt-12 animate-in fade-in duration-700 bg-white min-h-screen">
      <div className="flex justify-between items-start mb-10">
        <div className="flex flex-col">
          <button onClick={onBack} className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 mb-6 border border-slate-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Hydration</h1>
          <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em] mt-2">Daily Fluid Goal</p>
        </div>
        <div className={`p-4 rounded-3xl ${isGoalReached ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'} transition-colors shadow-sm`}>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" /></svg>
        </div>
      </div>

      <div className="relative flex justify-center mb-12">
        <div className="relative w-64 h-64">
           <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="45" fill="transparent" stroke="#F1F5F9" strokeWidth="10" />
             <circle 
              cx="50" cy="50" r="45" 
              fill="transparent" 
              stroke={isGoalReached ? '#10B981' : '#3B82F6'} 
              strokeWidth="10" 
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * Math.min(100, progress)) / 100}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
             />
           </svg>
           <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-black text-slate-900">{currentHydration}</span>
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">/ {goal} ml</span>
           </div>
        </div>
        {isGoalReached && (
          <div className="absolute -top-4 bg-emerald-500 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full animate-bounce shadow-lg shadow-emerald-100">
            Goal Reached!
          </div>
        )}
      </div>

      <div className="bg-slate-50 rounded-[40px] p-8 mb-10">
        <h3 className="font-black text-slate-900 mb-6 text-center uppercase tracking-widest text-xs">Quick Add</h3>
        <div className="flex gap-4">
           {[100, 250, 500].map(amount => (
             <button key={amount} onClick={() => addWater(amount)} className="flex-1 bg-white p-5 rounded-[28px] border border-slate-200 shadow-sm active:scale-90 transition-all group">
                <span className="block text-lg font-black text-slate-900 group-hover:text-blue-600">+{amount}</span>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-tighter">ml</span>
             </button>
           ))}
        </div>
      </div>

      <div className="space-y-4">
         <h3 className="font-black text-slate-900 px-1 uppercase tracking-widest text-[10px]">Today's Logs</h3>
         {[
           { time: '08:45 AM', amount: 250 },
           { time: '10:30 AM', amount: 500 },
           { time: '12:15 PM', amount: 100 },
         ].map((log, i) => (
           <div key={i} className="bg-white border border-slate-100 p-5 rounded-[24px] flex justify-between items-center">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" /></svg>
                 </div>
                 <span className="font-bold text-slate-900">{log.amount} ml</span>
              </div>
              <span className="text-slate-400 font-bold text-xs uppercase">{log.time}</span>
           </div>
         ))}
      </div>
    </div>
  );
};

export default HydrationScreen;
