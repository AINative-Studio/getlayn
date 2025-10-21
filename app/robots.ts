import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard/',
          '/auth/',
          '/booking/',
          '/api/',
        ],
      },
    ],
    sitemap: 'https://getlayn.com/sitemap.xml',
  };
}
