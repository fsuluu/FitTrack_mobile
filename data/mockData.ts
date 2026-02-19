
import { Activity, Category, Difficulty, UserStats } from '../types';

export const EXERCISES: Activity[] = [
  {
    id: '1',
    title: 'Sabah Egzersizleri',
    subtitle: '7 Egzersiz',
    category: Category.HIIT,
    duration: 15,
    difficulty: Difficulty.BEGINNER,
    calories: 120,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500',
    description: 'Güne enerjik bir başlangıç yapın.',
    steps: ['Zıplama', 'Şınav', 'Mekik']
  },
  {
    id: '2',
    title: 'Yoga',
    subtitle: '12 Egzersiz',
    category: Category.YOGA,
    duration: 30,
    difficulty: Difficulty.BEGINNER,
    calories: 80,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500',
    description: 'Zihninizi ve bedeninizi dinlendirin.',
    steps: ['Güneşe Selam', 'Savaşçı Pozu']
  },
  {
    id: '3',
    title: 'Evde Spor',
    subtitle: '10 Egzersiz',
    category: Category.STRENGTH,
    duration: 25,
    difficulty: Difficulty.INTERMEDIATE,
    calories: 200,
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500',
    description: 'Ekipmansız güç antrenmanı.',
    steps: ['Squat', 'Plank']
  },
  {
    id: '4',
    title: 'İşte Spor',
    subtitle: '5 Egzersiz',
    category: Category.STRETCHING,
    duration: 10,
    difficulty: Difficulty.BEGINNER,
    calories: 40,
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500',
    description: 'Ofis çalışanları için esneme.',
    steps: ['Boyun Esnetme', 'Omuz Rotasyonu']
  }
];

export const EVENTS: Activity[] = [
  {
    id: 'e1',
    title: 'Belgrad Ormanı Doğa Yürüyüşü',
    subtitle: 'Trekking',
    category: Category.RUNNING,
    duration: 120,
    difficulty: Difficulty.INTERMEDIATE,
    calories: 600,
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    location: 'Sarıyer, İstanbul',
    date: '04 Ocak 2024 08:00',
    description: 'Doğa ile iç içe bir yürüyüş deneyimi.',
    steps: []
  },
  {
    id: 'e2',
    title: 'Bir Amaç İçin Koş!',
    subtitle: 'Yardım Koşusu',
    category: Category.RUNNING,
    duration: 60,
    difficulty: Difficulty.ADVANCED,
    calories: 450,
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800',
    location: 'Caddebostan Sahil',
    date: '12 Ocak 2024 09:00',
    description: 'Kolektif bir iyilik için adımlarınızı atın.',
    steps: []
  }
];

// Fix: Exporting missing WEEKLY_DATA for Recharts in ProgressScreen
export const WEEKLY_DATA = [
  { day: 'Pzt', steps: 8432 },
  { day: 'Sal', steps: 10200 },
  { day: 'Çar', steps: 7500 },
  { day: 'Per', steps: 11000 },
  { day: 'Cum', steps: 9800 },
  { day: 'Cmt', steps: 12500 },
  { day: 'Paz', steps: 8900 },
];

export const MOCK_STATS: UserStats = {
  steps: 8432,
  stepsGoal: 10000,
  calories: 1450,
  caloriesGoal: 2200,
  activeMinutes: 42,
  activeMinutesGoal: 60,
  hydration: 2400,
  hydrationGoal: 3400,
  // Fix: Added missing workoutsCompleted property required by UserStats interface
  workoutsCompleted: 24
};
