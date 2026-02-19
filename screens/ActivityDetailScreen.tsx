
import React, { useState } from 'react';
import { Activity } from '../types';

interface ActivityDetailScreenProps {
  activity: Activity;
  onBack: () => void;
}

const ActivityDetailScreen: React.FC<ActivityDetailScreenProps> = ({ activity, onBack }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
    // Simulate activity duration or completion
    setTimeout(() => {
      setIsStarted(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white pb-32 animate-in slide-in-from-bottom-full duration-500 ease-out z-[60] fixed inset-0 overflow-y-auto">
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-12 left-6 right-6 z-[70] animate-in slide-in-from-top-4 fade-in">
          <div className="bg-green-600 text-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className="font-bold">Session completed! +{activity.calories} kcal burned.</span>
          </div>
        </div>
      )}

      <div className="relative h-[400px]">
        <img 
          src={activity.image} 
          alt={activity.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <button 
          onClick={onBack}
          className="absolute top-8 left-6 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white transition-transform active:scale-90"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>

        <div className="absolute bottom-10 left-6 right-6">
          <div className="bg-indigo-600 text-[10px] font-bold text-white px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-3">
            {activity.category}
          </div>
          <h1 className="text-4xl font-extrabold text-white leading-tight">{activity.title}</h1>
        </div>
      </div>

      <div className="px-6 pt-10">
        <div className="grid grid-cols-3 gap-4 mb-10">
          <DetailStat label="Duration" value={`${activity.duration}m`} />
          <DetailStat label="Calories" value={`${activity.calories}`} />
          <DetailStat label="Level" value={activity.difficulty} />
        </div>

        <h2 className="text-xl font-bold text-slate-800 mb-3">About</h2>
        <p className="text-slate-600 leading-relaxed mb-10">{activity.description}</p>

        <h2 className="text-xl font-bold text-slate-800 mb-6">Instructions</h2>
        <div className="space-y-6 mb-12">
          {activity.steps.map((step, index) => (
            <div key={index} className="flex gap-5 items-start">
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm flex-shrink-0 border border-indigo-100">
                {index + 1}
              </div>
              <p className="text-slate-700 font-medium pt-1 text-sm">{step}</p>
            </div>
          ))}
        </div>

        <div className="fixed bottom-8 left-6 right-6">
          <button 
            disabled={isStarted}
            onClick={handleStart}
            className={`w-full py-5 rounded-[24px] font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-3 active:scale-95 ${
              isStarted 
                ? 'bg-slate-200 text-slate-500 cursor-not-allowed' 
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-100'
            }`}
          >
            {isStarted ? (
              <>
                <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                Working Out...
              </>
            ) : (
              <>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                Start Session
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const DetailStat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="text-center p-4 rounded-3xl bg-slate-50 border border-slate-100">
    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{label}</div>
    <div className="text-sm font-bold text-slate-800">{value}</div>
  </div>
);

export default ActivityDetailScreen;
