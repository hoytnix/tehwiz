import React, { useState, useEffect } from 'react';
import { Shell } from './components/Layout/Shell';
import { HomeView } from './components/Home/HomeView';
import { VlogView } from './components/Vlog/VlogView';
import { PortfolioView } from './components/Portfolio/PortfolioView';
import { PromptsView } from './components/Prompts/PromptsView';
import { AppView } from './types';

function App() {
  const [currentView, setCurrentView] = useState<AppView>(() => {
    if (window.location.hash.startsWith('#project/')) {
      return AppView.PORTFOLIO;
    }
    return AppView.HOME;
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.startsWith('#project/')) {
        setCurrentView(AppView.PORTFOLIO);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleViewChange = (view: AppView) => {
    if (view !== AppView.PORTFOLIO && window.location.hash.startsWith('#project/')) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case AppView.HOME:
        return <HomeView onLaunchApp={handleViewChange} />;
      case AppView.VLOG:
        return <VlogView />;
      case AppView.PORTFOLIO:
        return <PortfolioView />;
      case AppView.PROMPTS:
        return <PromptsView />;
      default:
        return <HomeView onLaunchApp={handleViewChange} />;
    }
  };

  return (
    <Shell currentView={currentView} onChangeView={handleViewChange}>
      {renderView()}
    </Shell>
  );
}

export default App;