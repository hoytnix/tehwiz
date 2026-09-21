import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MOCK_PROJECTS, ProjectDetailView } from '@/modules/portfolio';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return MOCK_PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = MOCK_PROJECTS.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const title = `${project.title} — ${project.tagline || 'System Architecture'}`;
  const description = project.hook || project.tagline || project.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = MOCK_PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <ProjectDetailView 
      project={project} 
      allProjects={MOCK_PROJECTS} 
    />
  );
}
