
import React from 'react';

interface ProgressCardProps {
  label: string;
  value: string;
  progress: number;
  color: string;
  accentColor: string;
  icon: React.ReactNode;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ label, value, progress, color, accentColor, icon }) => {
  const isDark = accentColor.includes('slate-800');

  return (
    <div className={`${isDark ? 'bg-slate-900 border-white/5' : 'bg-white border-slate-100'} p-6 rounded-[32px] border flex items-center gap-5 shadow-sm hover:shadow-md transition-shadow`}>
      <div className={`w-14 h-14 rounded-2xl ${accentColor} flex items-center justify-center shadow-inner`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-baseline mb-2">
          <span className={`${isDark ? 'text-slate-500' : 'text-slate-400'} text-[11px] font-bold uppercase tracking-widest`}>{label}</span>
          <span className={`${isDark ? 'text-white' : 'text-slate-900'} font-extrabold text-lg`}>{value}</span>
        </div>
        <div className={`${isDark ? 'bg-slate-800' : 'bg-slate-100'} w-full h-1.5 rounded-full overflow-hidden`}>
          <div 
            className={`${color} h-full transition-all duration-1000 ease-out rounded-full`} 
            style={{ width: `${Math.min(100, progress)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
