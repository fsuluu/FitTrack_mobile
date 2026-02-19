
import React, { useState } from 'react';

interface RegisterScreenProps {
  onBack: () => void;
  onRegister: () => void;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ onBack, onRegister }) => {
  return (
    <div className="min-h-screen bg-black px-8 pt-20 pb-12 flex flex-col animate-in fade-in slide-in-from-right-8 duration-500">
      <button onClick={onBack} className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-white mb-8 border border-zinc-800 active:scale-90 transition-transform">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
      </button>

      <div className="mb-10">
        <h1 className="text-4xl font-black text-white tracking-tight">Yeni <span className="text-zinc-500 font-medium">Hesap</span></h1>
        <p className="text-zinc-500 mt-2 font-bold uppercase text-[10px] tracking-[0.3em]">Yolculuğa Bugün Başlayın</p>
      </div>

      <div className="space-y-6 flex-1">
        <Input label="Ad Soyad" placeholder="Alex Johnson" />
        <Input label="E-Posta" placeholder="alex@fitfocus.com" />
        <Input label="Şifre" placeholder="••••••••" type="password" />
        <Input label="Şifre Onay" placeholder="••••••••" type="password" />
      </div>

      <div className="mt-12">
        <button 
          onClick={onRegister}
          className="w-full bg-white text-black py-5 rounded-[24px] font-black text-lg shadow-xl shadow-white/5 active:scale-95 transition-all"
        >
          Kayıt Ol
        </button>
      </div>
    </div>
  );
};

const Input: React.FC<{ label: string; placeholder: string; type?: string }> = ({ label, placeholder, type = 'text' }) => (
  <div className="space-y-2">
    <label className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-1">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder}
      className="w-full p-5 bg-zinc-900 border border-zinc-800 rounded-[24px] focus:outline-none focus:border-white focus:bg-zinc-800 transition-all text-sm font-medium text-white placeholder:text-zinc-600"
    />
  </div>
);

export default RegisterScreen;
