
export enum Difficulty {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced'
}

export enum Category {
  YOGA = 'Yoga',
  RUNNING = 'Running',
  STRENGTH = 'Strength',
  STRETCHING = 'Stretching',
  HIIT = 'HIIT'
}

export interface Activity {
  id: string;
  title: string;
  subtitle?: string;
  category: Category;
  duration: number;
  difficulty: Difficulty;
  calories: number;
  image: string;
  description: string;
  steps: string[];
  location?: string;
  date?: string;
}

export interface UserStats {
  steps: number;
  stepsGoal: number;
  calories: number;
  caloriesGoal: number;
  activeMinutes: number;
  activeMinutesGoal: number;
  hydration: number;
  hydrationGoal: number;
  workoutsCompleted: number;
}

export type Screen = 
  | 'LOGIN' 
  | 'REGISTER' 
  | 'HOME' 
  | 'DISCOVER' 
  | 'FEED' 
  | 'PROGRESS' 
  | 'HYDRATION' 
  | 'CHALLENGES' 
  | 'HEALTH_MENU' 
  | 'HEALTH_LIST_MENU'
  | 'CALORIE_CHART'
  | 'PROTEIN_CALC'
  | 'PROFILE';
