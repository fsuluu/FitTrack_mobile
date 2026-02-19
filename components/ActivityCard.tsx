
import React from 'react';
import { Activity } from '../types';

interface ActivityCardProps {
  activity: Activity;
  onClick: (activity: Activity) => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onClick }) => {
  return (
    <div 
      onClick={() => onClick(activity)}
      className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-100 group flex flex-col"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img 
          src={activity.image} 
          alt={activity.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
        <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-lg">
          {activity.category}
        </div>
      </div>
      <div className="p-7">
        <h3 className="text-xl font-black text-slate-900 mb-2 line-clamp-1 tracking-tight">{activity.title}</h3>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-3 text-slate-400 font-bold text-[11px] uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {activity.duration}m
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              {activity.calories}kcal
            </span>
          </div>
          <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[9px] font-black uppercase tracking-widest">
            {activity.difficulty}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
