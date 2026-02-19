
import React from 'react';

interface CalorieChartScreenProps {
  onBack: () => void;
}

const CalorieChartScreen: React.FC<CalorieChartScreenProps> = ({ onBack }) => {
  const foods = [
    { name: 'Bal', amount: '100 gram', cal: 307 },
    { name: 'Beyaz Peynir', amount: '100 gram', cal: 275 },
    { name: 'Dil Peyniri', amount: '100 gram', cal: 271 },
    { name: 'Kaymak', amount: '100 gram', cal: 624 },
    { name: 'Kaşar Peyniri', amount: '100 gram', cal: 413 },
    { name: 'Marmelat', amount: '100 gram', cal: 280 },
    { name: 'Müsli', amount: '1 yemek kaşığı', cal: 30 },
    { name: 'Pastırma', amount: '100 gram', cal: 250 },
    { name: 'Pekmez', amount: '1 yemek kaşığı', cal: 60 },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header siyah yapıldı */}
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

      {/* Page Title Section */}
      <div className="bg-black text-white py-2 px-4 text-center">
        <h1 className="text-sm font-bold tracking-widest uppercase">KALORİ CETVELİ</h1>
        <p className="text-[10px] text-slate-400 mt-1 italic">Tükettiğiniz yiyecekleri listeden işaretleyerek beslenme listenizin toplam kalorisini tespit edin.</p>
      </div>

      {/* Category Header */}
      <div className="bg-[#E74C3C] text-white py-1 px-4 text-[10px] font-bold uppercase tracking-widest">
        KAHVALTILIK ÜRÜNLER
      </div>

      {/* Food List */}
      <div className="flex-1 overflow-y-auto">
        {foods.map((food, index) => (
          <div key={index} className="flex justify-between items-center py-4 px-6 border-b border-slate-100 active:bg-slate-50">
            <div>
              <p className="text-slate-800 text-sm font-semibold">{food.name}</p>
              <p className="text-slate-400 text-[10px]">{food.amount}</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-[#E74C3C]">{food.cal}</span>
              <span className="text-[10px] font-bold text-slate-300 uppercase">kcal</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Controls - Yeşil buton siyah yapıldı */}
      <div className="bg-[#464646] p-1 flex items-center gap-[2px]">
        <button className="flex-1 bg-[#E74C3C] text-white py-3 text-[10px] font-bold uppercase tracking-tighter">
          Kalori ekle
        </button>
        <div className="bg-black/30 w-12 h-10 flex items-center justify-center text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </div>
        <button className="flex-1 bg-black text-white py-3 text-[10px] font-bold uppercase tracking-tighter">
          Egzersiz ekle
        </button>
      </div>
    </div>
  );
};

export default CalorieChartScreen;
