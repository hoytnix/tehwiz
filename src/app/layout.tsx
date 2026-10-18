import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { Shell } from '@/components/layout/Shell';
import { RootJsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/config/site';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800']
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600']
});

export const viewport: Viewport = {
  themeColor: '#030712',
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
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        {/* Material Icons */}
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
      <body className="bg-void text-slate-100 antialiased overflow-hidden selection:bg-indigo-500/30 selection:text-white">
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
