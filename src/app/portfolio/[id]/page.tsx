import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MOCK_PROJECTS, ProjectDetailView } from '@/modules/portfolio';
import { ProjectJsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/config/site';

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
  const url = `${SITE_CONFIG.url}/portfolio/${project.id}`;
  const coverImage = project.coverImage || SITE_CONFIG.coverImage;

  return {
    title,
    description,
    keywords: [...project.tags, ...SITE_CONFIG.keywords],
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      images: [
        {
          url: coverImage,
          alt: `${project.title} Architecture`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: SITE_CONFIG.handle,
      images: [coverImage]
    },
    alternates: {
      canonical: url
    }
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = MOCK_PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectJsonLd project={project} />
      <ProjectDetailView 
        project={project} 
        allProjects={MOCK_PROJECTS} 
      />
    </>
  );
}
