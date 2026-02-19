
import React from 'react';

export const TipSkeleton: React.FC = () => (
  <div className="bg-slate-100 animate-pulse border border-slate-200 rounded-3xl p-5 flex items-start gap-4">
    <div className="w-10 h-10 bg-slate-200 rounded-2xl flex-shrink-0" />
    <div className="flex-1 space-y-2 py-1">
      <div className="h-3 bg-slate-200 rounded w-1/4" />
      <div className="h-4 bg-slate-200 rounded w-3/4" />
    </div>
  </div>
);

export const CardSkeleton: React.FC = () => (
  <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 animate-pulse">
    <div className="h-48 bg-slate-100 w-full" />
    <div className="p-5 space-y-3">
      <div className="h-5 bg-slate-100 rounded w-2/3" />
      <div className="flex gap-2">
        <div className="h-3 bg-slate-100 rounded w-1/4" />
        <div className="h-3 bg-slate-100 rounded w-1/4" />
      </div>
    </div>
  </div>
);
