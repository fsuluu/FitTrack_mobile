
import React from 'react';
import { MOCK_STATS } from '../data/mockData';

interface ProfileScreenProps {
  onBack: () => void;
  onLogout: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onBack, onLogout }) => {
  return (
    <div className="pb-32 px-6 pt-10 animate-in fade-in duration-700 bg-white min-h-screen">
      <header className="flex justify-between items-center mb-12">
        <button onClick={onBack} className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 border border-slate-100 active:scale-90 transition-transform">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Profilim</span>
        <div className="w-10" />
      </header>

      <div className="flex flex-col items-center mb-16">
        <div className="relative mb-8">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
            alt="Profile" 
            className="w-36 h-36 rounded-[56px] bg-slate-50 border-4 border-slate-50 shadow-2xl"
          />
          <button className="absolute bottom-1 right-1 w-12 h-12 bg-indigo-600 rounded-3xl border-4 border-white flex items-center justify-center text-white shadow-xl shadow-indigo-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
          </button>
        </div>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Alex Johnson</h2>
        <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.25em] mt-2">Premium Üye</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-16">
        <div className="bg-slate-50 rounded-[40px] p-8 text-center border border-slate-100 transition-transform active:scale-95">
           <span className="block text-3xl font-black text-slate-900">{MOCK_STATS.workoutsCompleted}</span>
           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Egzersiz</span>
        </div>
        <div className="bg-slate-50 rounded-[40px] p-8 text-center border border-slate-100 transition-transform active:scale-95">
           <span className="block text-3xl font-black text-slate-900">12.5k</span>
           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Ort. Adım</span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-black text-slate-900 px-1 uppercase tracking-[0.3em] text-[10px] mb-6 opacity-40">Ayarlar</h3>
        <SettingsItem icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} label="Profili Düzenle" />
        <SettingsItem icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>} label="Bildirimler" />
        
        <button 
          onClick={onLogout}
          className="w-full mt-10 bg-rose-50 text-rose-600 p-6 rounded-[32px] font-black text-xs uppercase tracking-[0.2em] border border-rose-100 flex items-center justify-center gap-4 active:scale-95 transition-all shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          Oturumu Kapat
        </button>
      </div>
    </div>
  );
};

const SettingsItem: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="bg-white border border-slate-100 p-6 rounded-[32px] flex justify-between items-center group cursor-pointer active:bg-slate-50 transition-colors shadow-sm">
    <div className="flex items-center gap-5">
      <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors flex items-center justify-center">
        {icon}
      </div>
      <span className="font-bold text-slate-900 text-sm">{label}</span>
    </div>
    <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
  </div>
);

export default ProfileScreen;
