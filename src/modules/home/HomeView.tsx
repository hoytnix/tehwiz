import React from 'react';
import { HomeHero } from './components/HomeHero';
import { StatsMatrix } from './components/StatsMatrix';
import { CaffeineMDSpotlight } from './components/CaffeineMDSpotlight';
import { RamenNightsSpotlight } from './components/RamenNightsSpotlight';
import { FlagshipSpotlight } from './components/FlagshipSpotlight';
import { CorePillars } from './components/CorePillars';
import { TechArsenal } from './components/TechArsenal';

export const HomeView: React.FC = () => {
  return (
    <div className="h-full w-full overflow-y-auto px-4 sm:px-8 py-8 sm:py-12 bg-transparent text-slate-100 flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col gap-12 sm:gap-16 pb-16">
        <HomeHero />
        <StatsMatrix />
        {/* CaffeineMD Spotlight */}
        <CaffeineMDSpotlight />

        {/* Ramen Nights Spotlight */}
        <RamenNightsSpotlight />
        <FlagshipSpotlight />
        <CorePillars />
        <TechArsenal />
      </div>
    </div>
  );
};
