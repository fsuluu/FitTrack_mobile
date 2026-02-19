
import React, { useState } from 'react';

interface LoginScreenProps {
  onLogin: () => void;
  onNavigateRegister: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onNavigateRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-black px-8 pt-24 pb-12 flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="mb-12">
        <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-black mb-6 shadow-2xl shadow-white/5">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
        <h1 className="text-4xl font-black text-white tracking-tight">Welcome to <span className="text-zinc-500 font-medium">FitFocus</span></h1>
        <p className="text-zinc-500 mt-2 font-bold uppercase text-[10px] tracking-[0.3em]">Oturum Açın</p>
      </div>

      <div className="space-y-6 flex-1">
        <div className="space-y-2">
          <label className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-1">E-Posta Adresi</label>
          <input 
            type="email" 
            placeholder="isim@ornek.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-5 bg-zinc-900 border border-zinc-800 rounded-[24px] focus:outline-none focus:border-white focus:bg-zinc-800 transition-all text-sm font-medium text-white placeholder:text-zinc-600"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-1">Şifre</label>
          <input 
            type="password" 
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-5 bg-zinc-900 border border-zinc-800 rounded-[24px] focus:outline-none focus:border-white focus:bg-zinc-800 transition-all text-sm font-medium text-white placeholder:text-zinc-600"
          />
        </div>
        <button className="text-zinc-500 text-xs font-bold w-full text-right hover:text-white transition-colors">Şifremi Unuttum</button>
      </div>

      <div className="mt-auto space-y-4">
        <button 
          onClick={onLogin}
          className="w-full bg-white text-black py-5 rounded-[24px] font-black text-lg shadow-xl shadow-white/5 active:scale-95 transition-all"
        >
          Giriş Yap
        </button>
        <button 
          onClick={onNavigateRegister}
          className="w-full py-5 rounded-[24px] font-black text-zinc-500 text-sm tracking-widest uppercase"
        >
          Yeni misiniz? <span className="text-white">Hesap Oluştur</span>
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
