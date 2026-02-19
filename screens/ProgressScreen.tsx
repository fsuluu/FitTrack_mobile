
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { WEEKLY_DATA, MOCK_STATS } from '../data/mockData';
import ProgressCard from '../components/ProgressCard';

interface ProgressScreenProps {
  onBack: () => void;
}

const ProgressScreen: React.FC<ProgressScreenProps> = ({ onBack }) => {
  return (
    <div className="pb-32 px-6 pt-10 animate-in fade-in duration-700 bg-black min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <button onClick={onBack} className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-white border border-white/10 active:scale-90 transition-transform">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="text-right">
          <h1 className="text-3xl font-black text-white tracking-tight uppercase">İstatistikler</h1>
          <p className="text-slate-500 font-bold uppercase text-[9px] tracking-[0.25em]">Haftalık Genel Bakış</p>
        </div>
      </div>

      <div className="bg-slate-900 rounded-[40px] p-8 shadow-2xl border border-white/5 mb-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="font-black text-white text-lg">Performans</h3>
            <p className="text-slate-500 text-xs font-semibold">Günlük Adım Sayısı</p>
          </div>
          <span className="text-[10px] font-black text-white bg-white/10 px-4 py-2 rounded-xl uppercase tracking-widest border border-white/5">Aktif</span>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={WEEKLY_DATA} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#475569', fontSize: 10, fontWeight: 800 }} 
                dy={10}
              />
              <Tooltip 
                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                contentStyle={{ backgroundColor: '#000', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', padding: '12px' }}
                itemStyle={{ color: '#fff', fontWeight: 'bold' }}
              />
              <Bar 
                dataKey="steps" 
                radius={[12, 12, 12, 12]}
                barSize={20}
              >
                {WEEKLY_DATA.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.steps > 9000 ? '#ffffff' : '#1e293b'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <h3 className="font-black text-white mb-6 px-1 uppercase tracking-[0.3em] text-[10px] opacity-40">Sağlık Kartları</h3>
      <div className="grid grid-cols-1 gap-5">
        <ProgressCard 
          label="Sıvı Tüketimi" 
          value={`${MOCK_STATS.hydration}ml`} 
          progress={(MOCK_STATS.hydration / MOCK_STATS.hydrationGoal) * 100}
          color="bg-white"
          accentColor="bg-slate-800"
          icon={<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" /></svg>}
        />
        <ProgressCard 
          label="Kalori Hedefi" 
          value={`${MOCK_STATS.calories} / ${MOCK_STATS.caloriesGoal}`} 
          progress={(MOCK_STATS.calories / MOCK_STATS.caloriesGoal) * 100}
          color="bg-white"
          accentColor="bg-slate-800"
          icon={<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.5-7 3 10 13 11 13 11z" /></svg>}
        />
      </div>
    </div>
  );
};

export default ProgressScreen;
