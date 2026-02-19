
import React, { useState } from 'react';

interface ChallengesScreenProps {
  onBack: () => void;
}

type Tab = 'active' | 'discover';

interface Challenge {
  id: number;
  title: string;
  progress?: number;
  daysLeft?: number;
  prize: string;
  icon?: string;
  image?: string;
  participants?: number;
  difficulty?: string;
}

const ChallengesScreen: React.FC<ChallengesScreenProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<Tab>('active');
  const [activeToast, setActiveToast] = useState<string | null>(null);
  const [myScore, setMyScore] = useState(12402);
  const [isUpdatingScore, setIsUpdatingScore] = useState(false);

  // Başlangıç verileri
  const [activeChallenges, setActiveChallenges] = useState<Challenge[]>([
    { id: 1, title: '100K Adım Maratonu', progress: 65, daysLeft: 3, prize: '500 FP', icon: '👟' },
    { id: 2, title: 'Su İçme Şampiyonu', progress: 80, daysLeft: 1, prize: '200 FP', icon: '💧' },
  ]);

  const [discoverChallenges, setDiscoverChallenges] = useState<Challenge[]>([
    { id: 3, title: 'Sabah Yogası Grubu', participants: 1240, difficulty: 'Kolay', prize: '150 FP', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400' },
    { id: 4, title: '7 Günlük Plank', participants: 850, difficulty: 'Zor', prize: '400 FP', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400' },
  ]);

  const handleJoin = (challenge: Challenge) => {
    // Keşfet listesinden çıkar
    setDiscoverChallenges(prev => prev.filter(c => c.id !== challenge.id));
    
    // Aktif listesine ekle (ikon yoksa varsayılan bir ikon ata)
    const newActiveChallenge: Challenge = {
      ...challenge,
      progress: 0,
      daysLeft: 7,
      icon: challenge.icon || '🔥'
    };
    setActiveChallenges(prev => [newActiveChallenge, ...prev]);
    
    setActiveToast(`${challenge.title} başlatıldı!`);
    setTimeout(() => setActiveToast(null), 3000);
    
    // Otomatik olarak aktif tabına geçiş yap
    setTimeout(() => setActiveTab('active'), 500);
  };

  const handleUpdateDuel = () => {
    setIsUpdatingScore(true);
    // Simüle edilmiş skor artışı (rastgele 50-250 arası)
    const boost = Math.floor(Math.random() * 200) + 50;
    
    setTimeout(() => {
      setMyScore(prev => prev + boost);
      setIsUpdatingScore(false);
      setActiveToast(`Skorun ${boost} puan arttı!`);
      setTimeout(() => setActiveToast(null), 2000);
    }, 800);
  };

  return (
    <div className="pb-32 animate-in fade-in duration-500 bg-slate-50 min-h-screen">
      {activeToast && (
        <div className="fixed top-12 left-6 right-6 z-[100] animate-in slide-in-from-top-full duration-300">
          <div className="bg-black text-white p-4 rounded-2xl shadow-2xl flex items-center justify-center gap-3 border border-white/10">
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
            <span className="font-black text-xs uppercase tracking-widest">{activeToast}</span>
          </div>
        </div>
      )}

      <header className="px-5 pt-10 pb-6 bg-white border-b border-slate-100 sticky top-0 z-40">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 border border-slate-100 active:scale-90 transition-transform">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-black text-slate-900 uppercase tracking-widest">Meydan Okumalar</h1>
            <div className="flex items-center gap-1 mt-1">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{1240 + (3 - discoverChallenges.length)} Kişi Yarışıyor</span>
            </div>
          </div>
          <div className="w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 font-black text-xs">
            {myScore > 13000 ? 'PRO' : '120'}
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex p-1 bg-slate-100 rounded-2xl">
          <button 
            onClick={() => setActiveTab('active')}
            className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'active' ? 'bg-white text-black shadow-sm' : 'text-slate-400'}`}
          >
            Aktif ({activeChallenges.length})
          </button>
          <button 
            onClick={() => setActiveTab('discover')}
            className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'discover' ? 'bg-white text-black shadow-sm' : 'text-slate-400'}`}
          >
            Yeni Keşfet ({discoverChallenges.length})
          </button>
        </div>
      </header>

      <main className="px-5 mt-8 space-y-8">
        {activeTab === 'active' ? (
          <div className="space-y-4">
            {activeChallenges.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Henüz aktif yarışman yok.</p>
                <button onClick={() => setActiveTab('discover')} className="mt-4 text-indigo-600 text-[10px] font-black uppercase tracking-widest">Hemen Keşfet</button>
              </div>
            )}
            
            {activeChallenges.map(ch => (
              <div key={ch.id} className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm relative overflow-hidden group animate-in zoom-in-95 duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">
                      {ch.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-sm">{ch.title}</h4>
                      <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">{ch.prize} Ödül</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-black bg-slate-100 px-3 py-1 rounded-full uppercase text-slate-500">
                    {ch.daysLeft} Gün Kaldı
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                    <span>İlerleme</span>
                    <span>%{ch.progress}</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-indigo-600 rounded-full transition-all duration-1000"
                      style={{ width: `${ch.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Duel Card */}
            <div className="bg-slate-900 rounded-[40px] p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full -mr-16 -mt-16" />
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-10">
                  <div className="text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border-4 border-indigo-500 p-1 mb-2">
                       <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-full h-full rounded-full bg-slate-800" alt="me" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-tighter">Ben</span>
                    <span className={`text-xl font-black transition-all ${isUpdatingScore ? 'scale-125 text-indigo-400' : ''}`}>
                      {myScore.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-1">
                    <div className="bg-white/10 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">VS</div>
                    <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                  </div>

                  <div className="text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border-4 border-slate-700 p-1 mb-2">
                       <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sara" className="w-full h-full rounded-full bg-slate-800" alt="opponent" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-tighter text-slate-500">Zehra</span>
                    <span className="text-xl font-black">10,850</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleUpdateDuel}
                  disabled={isUpdatingScore}
                  className={`w-full py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest active:scale-95 transition-all shadow-xl flex items-center justify-center gap-2 ${isUpdatingScore ? 'bg-slate-700 text-slate-400 cursor-not-allowed' : 'bg-white text-black'}`}
                >
                  {isUpdatingScore ? (
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    'DÜELLOYU GÜNCELLE'
                  )}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {discoverChallenges.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Tüm yarışmalara katıldın! 🏆</p>
              </div>
            )}
            
            {discoverChallenges.map(ch => (
              <div key={ch.id} className="group relative aspect-video rounded-[40px] overflow-hidden shadow-lg border border-slate-200 active:scale-95 transition-all animate-in fade-in slide-in-from-bottom-4">
                <img src={ch.image} alt={ch.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                <div className="absolute top-6 right-6">
                  <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black text-white uppercase tracking-widest border border-white/20">
                    {ch.difficulty}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white text-2xl font-black uppercase tracking-tight mb-2 leading-tight">{ch.title}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-slate-200 overflow-hidden">
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10 + ch.id}`} alt="p" />
                          </div>
                        ))}
                      </div>
                      <span className="text-white/60 text-[10px] font-bold uppercase tracking-tighter">+{ch.participants} Katılımcı</span>
                    </div>
                    <button 
                      onClick={() => handleJoin(ch)}
                      className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-500 transition-colors"
                    >
                      KATIL
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Global Leaderboard Section */}
        <div className="bg-white rounded-[32px] p-6 border border-slate-100 shadow-sm">
           <div className="flex justify-between items-center mb-6">
              <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Haftalık Sıralama</h3>
              <span className="text-[9px] font-bold text-indigo-600 uppercase">Tümü</span>
           </div>
           <div className="space-y-4">
              {[
                { rank: 1, name: 'Burak Y.', score: '24.5k', me: false },
                { rank: 2, name: 'Alex J.', score: `${(myScore/1000).toFixed(1)}k`, me: true },
                { rank: 3, name: 'Ece Temel', score: '21.8k', me: false }
              ].map(item => (
                <div key={item.rank} className={`flex items-center justify-between p-3 rounded-2xl ${item.me ? 'bg-indigo-50 border border-indigo-100' : 'bg-slate-50'}`}>
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-black ${item.rank === 1 ? 'text-orange-500' : 'text-slate-400'}`}>#{item.rank}</span>
                    <span className={`text-xs font-bold ${item.me ? 'text-indigo-600' : 'text-slate-800'}`}>{item.name} {item.me && '(Sen)'}</span>
                  </div>
                  <span className="text-xs font-black text-slate-900">{item.score}</span>
                </div>
              ))}
           </div>
        </div>
      </main>
    </div>
  );
};

export default ChallengesScreen;
