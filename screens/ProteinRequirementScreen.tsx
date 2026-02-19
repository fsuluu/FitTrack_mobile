
import React, { useState } from 'react';

interface ProteinRequirementScreenProps {
  onBack: () => void;
}

const ProteinRequirementScreen: React.FC<ProteinRequirementScreenProps> = ({ onBack }) => {
  const [weight, setWeight] = useState<string>('70');
  const [activityLevel, setActivityLevel] = useState<number>(1.2);

  const proteinNeed = parseFloat(weight) * activityLevel;

  return (
    <div className="bg-white min-h-screen flex flex-col animate-in fade-in duration-500">
      <header className="bg-black h-16 flex items-center px-4 sticky top-0 z-50">
        <button onClick={onBack} className="text-white p-2 -ml-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="flex-1 flex justify-center">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center border-2 border-slate-800">
              <img src="https://seeklogo.com/images/S/saglik-bakanligi-logo-D0E03C1167-seeklogo.com.png" alt="logo" className="w-6 h-6" />
            </div>
        </div>
      </header>

      <div className="bg-black text-white py-6 px-6 text-center">
        <h1 className="text-xl font-black tracking-widest uppercase">PROTEİN İHTİYACI</h1>
        <p className="text-[10px] text-slate-400 mt-2 italic">Günlük almanız gereken protein miktarını vücut ağırlığınıza göre hesaplayın.</p>
      </div>

      <main className="flex-1 p-8 space-y-10">
        <div className="space-y-4">
          <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Vücut Ağırlığınız (KG)</label>
          <input 
            type="number" 
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-[24px] text-3xl font-black text-center focus:border-black transition-all"
          />
        </div>

        <div className="space-y-4">
          <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Aktivite Seviyeniz</label>
          <div className="grid grid-cols-1 gap-3">
            {[
              { label: 'Sedanter (Hareketsiz)', val: 0.8 },
              { label: 'Hafif Aktif (Haftada 1-3 gün)', val: 1.2 },
              { label: 'Orta Aktif (Haftada 3-5 gün)', val: 1.5 },
              { label: 'Çok Aktif (Haftada 6-7 gün)', val: 2.0 }
            ].map((level) => (
              <button 
                key={level.val}
                onClick={() => setActivityLevel(level.val)}
                className={`p-4 rounded-2xl border-2 text-sm font-bold transition-all ${activityLevel === level.val ? 'border-black bg-black text-white shadow-lg' : 'border-slate-100 bg-white text-slate-500'}`}
              >
                {level.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 rounded-[32px] p-8 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-10 -mt-10" />
          <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-50">Günlük İhtiyaç</p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-5xl font-black">{proteinNeed.toFixed(1)}</span>
            <span className="text-lg font-bold opacity-50">GR</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProteinRequirementScreen;
