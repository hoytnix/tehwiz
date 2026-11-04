import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { Shell } from '@/components/layout/Shell';
import { RootJsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/config/site';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#0A0B10',
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s // ${SITE_CONFIG.name}`
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.github }],
  creator: SITE_CONFIG.author,
  icons: {
    icon: '/favicon.ico',
    apple: '/icon.png'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.coverImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} // Sovereign Edge AI & WebGPU Systems`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    creator: SITE_CONFIG.handle,
    images: [SITE_CONFIG.coverImage]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Fonts: Fraunces, Inter, JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..600;1,9..144,400..600&family=Inter:wght@400..700&family=JetBrains+Mono:wght@400..600&display=swap"
        />
        {/* Material Icons (legacy secondary pages only; primary views use text glyphs) */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        {/* PrismJS Okaidia Theme */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-okaidia.min.css"
        />
      </head>
      <body className="bg-ink text-muted antialiased overflow-hidden">
        <RootJsonLd />
        <Shell>
          {children}
        </Shell>
        <Analytics />

        {/* Prism Core & Autoloader */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
