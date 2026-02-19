
import React, { useState } from 'react';
import { Screen, Activity } from './types';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import FeedScreen from './screens/FeedScreen';
import ProgressScreen from './screens/ProgressScreen';
import HydrationScreen from './screens/HydrationScreen';
import ChallengesScreen from './screens/ChallengesScreen';
import HealthMenuScreen from './screens/HealthMenuScreen';
import HealthListMenuScreen from './screens/HealthListMenuScreen';
import CalorieChartScreen from './screens/CalorieChartScreen';
import ProteinRequirementScreen from './screens/ProteinRequirementScreen';
import ProfileScreen from './screens/ProfileScreen';
import ActivityDetailScreen from './screens/ActivityDetailScreen';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('LOGIN');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setCurrentScreen('HOME');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentScreen('LOGIN');
  };

  const navigateToHome = () => setCurrentScreen('HOME');
  const navigateToHealth = () => setCurrentScreen('HEALTH_MENU');

  const renderScreen = () => {
    if (!isAuthenticated) {
      if (currentScreen === 'REGISTER') {
        return <RegisterScreen onBack={() => setCurrentScreen('LOGIN')} onRegister={handleAuthSuccess} />;
      }
      return <LoginScreen onLogin={handleAuthSuccess} onNavigateRegister={() => setCurrentScreen('REGISTER')} />;
    }

    if (selectedActivity) {
      return <ActivityDetailScreen activity={selectedActivity} onBack={() => setSelectedActivity(null)} />;
    }

    switch (currentScreen) {
      case 'HOME':
        return <HomeScreen onActivitySelect={setSelectedActivity} onNavigate={setCurrentScreen} />;
      case 'DISCOVER':
        return <DiscoverScreen onBack={navigateToHome} />;
      case 'FEED':
        return <FeedScreen onBack={navigateToHome} />;
      case 'PROGRESS':
        return <ProgressScreen onBack={navigateToHealth} />;
      case 'HYDRATION':
        return <HydrationScreen onBack={navigateToHome} />;
      case 'CHALLENGES':
        return <ChallengesScreen onBack={navigateToHome} />;
      case 'HEALTH_MENU':
        return <HealthMenuScreen 
          onBack={navigateToHome} 
          onNavigate={setCurrentScreen} 
          onOpenList={() => setCurrentScreen('HEALTH_LIST_MENU')}
        />;
      case 'HEALTH_LIST_MENU':
        return <HealthListMenuScreen 
          onBack={() => setCurrentScreen('HEALTH_MENU')} 
          onNavigate={setCurrentScreen} 
        />;
      case 'CALORIE_CHART':
        return <CalorieChartScreen onBack={navigateToHealth} />;
      case 'PROTEIN_CALC':
        return <ProteinRequirementScreen onBack={navigateToHealth} />;
      case 'PROFILE':
        return <ProfileScreen onBack={navigateToHome} onLogout={handleLogout} />;
      default:
        return <HomeScreen onActivitySelect={setSelectedActivity} onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 max-w-lg mx-auto shadow-2xl relative overflow-hidden flex flex-col font-sans">
      <main className="flex-1 overflow-y-auto">
        {renderScreen()}
      </main>
      
      {isAuthenticated && !selectedActivity && (
        <Navbar 
          currentScreen={currentScreen} 
          onNavigate={setCurrentScreen} 
        />
      )}
    </div>
  );
};

export default App;
