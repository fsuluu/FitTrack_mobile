
import React, { useState, useEffect } from 'react';
import { EXERCISES, MOCK_STATS } from '../data/mockData';
import { Activity, Category, Screen } from '../types';
import ActivityCard from '../components/ActivityCard';
import CategoryButton from '../components/CategoryButton';
import { getAIRecommendation } from '../services/geminiService';

interface HomeScreenProps {
  onActivitySelect: (activity: Activity) => void;
  onNavigate: (screen: Screen) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onActivitySelect, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [aiSuggestion, setAiSuggestion] = useState<string>("Small steps lead to great changes. Keep moving!");
  const [isLoadingAi, setIsLoadingAi] = useState(true);

  const categories: (Category | 'All')[] = ['All', ...Object.values(Category)];

  useEffect(() => {
    const fetchAiData = async () => {
      setIsLoadingAi(true);
      try {
        const recommendation = await getAIRecommendation(MOCK_STATS);
        setAiSuggestion(recommendation);
      } catch (err) {
        console.error("Failed to fetch AI suggestion", err);
      } finally {
        setIsLoadingAi(false);
      }
    };
    fetchAiData();
  }, []);

  const filteredActivities = selectedCategory === 'All' 
    ? EXERCISES 
    : EXERCISES.filter(a => a.category === selectedCategory);

  const stepsProgress = (MOCK_STATS.steps / MOCK_STATS.stepsGoal) * 100;

  return (
    <div className="pb-28 animate-in fade-in duration-700 bg-white min-h-screen">
      <header className="px-6 pt-10 pb-12 bg-slate-900 text-white rounded-b-[48px] shadow-2xl relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full -mr-20 -mt-20"></div>
        
        <div className="relative z-10 flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Focus on <span className="text-indigo-400">Fit</span></h1>
            <p className="text-slate-400 text-sm mt-1 font-medium">Hello, stay active today!</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" className="w-10 h-10" />
          </div>
        </div>

        {/* Daily Progress Summary Card */}
        <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-[32px] p-6 border border-white/10 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-500 rounded-xl">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
              </div>
              <div>
                <span className="block text-white font-black text-lg">{MOCK_STATS.steps.toLocaleString()}</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Daily Steps</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-indigo-400 font-black text-sm">%{Math.round(stepsProgress)}</span>
              <span className="block text-[9px] text-slate-500 font-bold uppercase tracking-tighter">Goal: {MOCK_STATS.stepsGoal}</span>
            </div>
          </div>
          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-500 transition-all duration-1000 ease-out rounded-full"
              style={{ width: `${stepsProgress}%` }}
            />
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-4">
          <div className="bg-white/5 backdrop-blur-md rounded-[32px] p-5 border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-orange-500/20 rounded-lg">
                <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.5-7 3 10 13 11 13 11z" /></svg>
              </div>
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Calories</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black">{MOCK_STATS.calories}</span>
              <span className="text-xs text-slate-500 font-bold">kcal</span>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md rounded-[32px] p-5 border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-indigo-500/20 rounded-lg">
                <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Active</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black">{MOCK_STATS.activeMinutes}</span>
              <span className="text-xs text-slate-500 font-bold">min</span>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Access Tools */}
      <section className="px-6 mb-8 overflow-x-auto hide-scrollbar">
        <div className="flex gap-4">
           <QuickTool 
            title="Hydration" 
            icon="💧" 
            color="bg-blue-50" 
            textColor="text-blue-600" 
            onClick={() => onNavigate('HYDRATION')}
           />
           <QuickTool 
            title="Challenges" 
            icon="🏆" 
            color="bg-orange-50" 
            textColor="text-orange-600" 
            onClick={() => onNavigate('CHALLENGES')}
           />
           <QuickTool 
            title="Health" 
            icon="📋" 
            color="bg-emerald-50" 
            textColor="text-emerald-600" 
            onClick={() => onNavigate('HEALTH_MENU')}
           />
        </div>
      </section>

      {/* AI Recommendation Card */}
      <section className="px-6 mb-10">
        <div className="bg-indigo-50/50 border border-indigo-100 rounded-[32px] p-6 flex items-start gap-4 shadow-sm relative overflow-hidden transition-all hover:bg-indigo-50">
          <div className={`p-3 rounded-2xl text-white shadow-lg transition-all duration-500 ${isLoadingAi ? 'bg-slate-300 animate-pulse' : 'bg-indigo-600 shadow-indigo-100'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
          </div>
          <div className="flex-1">
            <h4 className="font-extrabold text-indigo-900 text-[10px] mb-1 uppercase tracking-widest flex items-center gap-2">
              Today's AI Suggestion
              {isLoadingAi && <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping"></span>}
            </h4>
            <p className={`text-slate-700 text-sm leading-relaxed font-medium transition-opacity duration-500 ${isLoadingAi ? 'opacity-40' : 'opacity-100'}`}>
              {aiSuggestion}
            </p>
          </div>
          {/* Decorative Sparkle */}
          <div className="absolute top-2 right-4 opacity-10">
            <svg className="w-12 h-12 text-indigo-900" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l1.5 6h6l-5 4 2 6-4.5-3.5L7.5 18l2-6-5-4h6z"/></svg>
          </div>
        </div>
      </section>

      <section className="px-6 mb-8">
        <div className="flex justify-between items-end mb-5">
           <h2 className="text-2xl font-black text-slate-900">Workouts</h2>
           <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">See All</span>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar">
          {categories.map(cat => (
            <CategoryButton
              key={cat}
              category={cat}
              isActive={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
            />
          ))}
        </div>
      </section>

      <section className="px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredActivities.map(activity => (
            <ActivityCard 
              key={activity.id} 
              activity={activity} 
              onClick={onActivitySelect}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

const QuickTool: React.FC<{ title: string; icon: string; color: string; textColor: string; onClick: () => void }> = ({ title, icon, color, textColor, onClick }) => (
  <div 
    onClick={onClick}
    className={`${color} p-4 rounded-[28px] flex flex-col items-center justify-center min-w-[110px] border border-transparent hover:border-slate-200 transition-all cursor-pointer active:scale-95 shadow-sm`}
  >
    <span className="text-2xl mb-2">{icon}</span>
    <span className={`text-[10px] font-black uppercase tracking-tighter text-center leading-tight ${textColor}`}>{title}</span>
  </div>
);

export default HomeScreen;
