
import React from 'react';
import { Category } from '../types';

interface CategoryButtonProps {
  category: Category | 'All';
  isActive: boolean;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-all shadow-sm ${
        isActive 
          ? 'bg-indigo-600 text-white' 
          : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'
      }`}
    >
      {category}
    </button>
  );
};

export default CategoryButton;
