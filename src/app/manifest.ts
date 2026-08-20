import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Devolopy - Modern Web & Next.js Platform',
    short_name: 'Devolopy',
    description: 'Ultra-fast Next.js, Tailwind CSS, and AI-powered web solutions with SEO dominance.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090d16',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/DevolopyDarkTheme.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/DevolopyDarkTheme.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
