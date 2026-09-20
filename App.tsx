import React, { useState } from 'react';
import { Shell } from './components/Layout/Shell';
import { HomeView } from './components/Home/HomeView';
import { VlogView } from './components/Vlog/VlogView';
import { PortfolioView } from './components/Portfolio/PortfolioView';
import { PromptsView } from './components/Prompts/PromptsView';
import { AppView } from './types';

function App() {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);

  const renderView = () => {
    switch (currentView) {
      case AppView.HOME:
        return <HomeView onLaunchApp={setCurrentView} />;
      case AppView.VLOG:
        return <VlogView />;
      case AppView.PORTFOLIO:
        return <PortfolioView />;
      case AppView.PROMPTS:
        return <PromptsView />;
      default:
        return <HomeView onLaunchApp={setCurrentView} />;
    }
  };

  return (
    <Shell currentView={currentView} onChangeView={setCurrentView}>
      {renderView()}
    </Shell>
  );
}

export default App;