import React from 'react';
import { HomeHero } from './components/HomeHero';
import { FeaturedRow } from './components/FeaturedRow';
import { AboutSection } from './components/AboutSection';
import { WritingVlogsRow } from './components/WritingVlogsRow';
import { MOCK_PROJECTS } from '@/modules/portfolio/data/portfolioData';
import { ProjectCard } from '@/modules/portfolio/components/ProjectCard';

export const HomeView: React.FC = () => {
  return (
    <div className="h-full w-full overflow-y-auto bg-ink text-muted">
      <div className="max-w-magazine mx-auto px-6 lg:px-16 flex flex-col gap-24 py-8 pb-24">
        <HomeHero />
        <FeaturedRow />
        <section aria-label="All projects">
          <h2 className="font-display text-4xl text-bone mb-8">All projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
        <AboutSection />
        <WritingVlogsRow />
      </div>
    </div>
  );
};
