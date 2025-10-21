# Quick SEO Reference Guide

## File Structure

```
/app
├── layout.tsx (Root - includes structured data)
├── page.tsx (Homepage - full metadata)
├── robots.ts (Robots.txt configuration)
├── sitemap.ts (XML sitemap)
├── auth/
│   ├── login/layout.tsx (Metadata - noindex)
│   └── register/layout.tsx (Metadata - noindex)
├── booking/[id]/layout.tsx (Metadata - noindex, nofollow)
├── dashboard/
│   ├── host/
│   │   ├── layout.tsx (Metadata - noindex, nofollow)
│   │   └── new-listing/layout.tsx (Metadata - noindex, nofollow)
│   └── driver/bookings/layout.tsx (Metadata - noindex, nofollow)
├── earnings/layout.tsx (Metadata)
├── host-guide/layout.tsx (Metadata)
├── how-it-works/page.tsx (Metadata)
├── listing/[id]/
│   ├── layout.tsx (Dynamic metadata)
│   └── opengraph-image.tsx (Dynamic OG image)
├── privacy/page.tsx (Metadata)
├── search/layout.tsx (Metadata)
└── terms/page.tsx (Metadata)

/lib
└── metadata.ts (Utility library)

/components
└── seo/structured-data.tsx (JSON-LD schemas)
```

## Quick Metadata Template

### For Server Components (page.tsx):
```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title (max 60 chars)',
  description: 'Page description 150-160 characters for optimal SEO performance and user engagement.',
  keywords: [
    'parking space rental',
    'specific keyword',
    'another keyword',
  ],
  openGraph: {
    title: 'Page Title | Layn',
    description: 'Description for social sharing',
    url: 'https://getlayn.com/page-url',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alt text',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title | Layn',
    description: 'Description for Twitter',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://getlayn.com/page-url',
  },
};
```

### For Client Components (layout.tsx):
```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  // Same as above
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

### For Dynamic Pages:
```typescript
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  // Fetch data
  // const data = await getData(params.id);

  return {
    title: 'Dynamic Title',
    description: 'Dynamic description',
    // ... rest of metadata
  };
}
```

## Common Meta Tags Reference

| Tag | Purpose | Best Practice |
|-----|---------|---------------|
| title | Page title in search results | Max 60 chars, include brand |
| description | Summary in search results | 150-160 chars, compelling CTA |
| keywords | Relevant search terms | 5-15 keywords, comma-separated |
| canonical | Primary URL version | Absolute URL, prevent duplicates |
| robots | Crawler instructions | Use noindex for private pages |
| og:title | Social sharing title | Similar to title, max 60 chars |
| og:description | Social sharing description | Max 200 chars |
| og:image | Social sharing image | 1200x630px, under 1MB |
| og:url | Page URL | Absolute URL |
| twitter:card | Twitter card type | summary or summary_large_image |

## Robots Configuration by Page Type

| Page Type | Index | Follow | Reason |
|-----------|-------|--------|--------|
| Public pages | Yes | Yes | Want in search results |
| Auth pages | No | Yes | Private but allow link crawling |
| Dashboard | No | No | Fully private |
| Booking flow | No | No | Transactional |
| Legal pages | Yes | Yes | Transparency |

## Keywords by Category

### Primary Keywords (All Pages)
- parking space rental
- rent parking spot
- find parking
- book parking
- private parking
- parking marketplace

### Earning/Host Keywords
- earn money parking
- list parking space
- monetize driveway
- parking host
- rent out garage

### Search/Driver Keywords
- find parking near me
- available parking
- reserve parking
- parking availability
- book parking spot

### Location Keywords
- parking in [city]
- [city] parking rental
- parking near [landmark]

## Structured Data Schemas

### Organization (Root Layout)
```json
{
  "@type": "Organization",
  "name": "Layn",
  "url": "https://getlayn.com",
  "logo": "logo-url"
}
```

### LocalBusiness (Root Layout)
```json
{
  "@type": "LocalBusiness",
  "name": "Layn",
  "address": {...},
  "priceRange": "$5-$30"
}
```

### Product/Listing (Listing Pages)
```json
{
  "@type": "Product",
  "name": "Listing title",
  "offers": {
    "price": "X",
    "priceCurrency": "USD"
  }
}
```

## URL Structure

| Pattern | Example | Notes |
|---------|---------|-------|
| Homepage | / | Main entry point |
| Search | /search | Listing discovery |
| Listing | /listing/[id] | Individual spaces |
| Booking | /booking/[id] | Transaction flow |
| Static | /how-it-works | Info pages |
| Dashboard | /dashboard/host | User area |

## Before Launch Checklist

- [ ] Update Google verification code
- [ ] Create og-image.jpg (1200x630)
- [ ] Submit sitemap to Search Console
- [ ] Verify all titles under 60 chars
- [ ] Verify all descriptions 150-160 chars
- [ ] Test Open Graph tags
- [ ] Test Twitter Cards
- [ ] Validate structured data
- [ ] Check mobile-friendliness
- [ ] Run Lighthouse audit

## Testing URLs

- Structured Data: https://search.google.com/test/rich-results
- Open Graph: https://developers.facebook.com/tools/debug/
- Twitter Cards: https://cards-dev.twitter.com/validator
- Mobile Friendly: https://search.google.com/test/mobile-friendly
- PageSpeed: https://pagespeed.web.dev/

## Common Issues & Solutions

### Issue: Title too long
**Solution:** Keep under 60 characters, use template in root layout

### Issue: Duplicate descriptions
**Solution:** Make each page unique, use dynamic content

### Issue: Missing OG image
**Solution:** Create default in /public/og-image.jpg

### Issue: Structured data errors
**Solution:** Validate with Google's tool, check JSON syntax

### Issue: Canonical conflicts
**Solution:** Use absolute URLs, set metadataBase in root

## Performance Tips

1. Use Next.js Metadata API (server-side)
2. Avoid client-side SEO operations
3. Optimize images (og:image under 1MB)
4. Use static generation where possible
5. Lazy load images with proper alt text
6. Implement proper heading hierarchy (H1-H6)

## Maintenance Schedule

**Weekly:**
- Check Search Console for errors
- Monitor ranking changes

**Monthly:**
- Review and update descriptions
- Add new keywords based on search data

**Quarterly:**
- Full SEO audit
- Competitor analysis
- Update structured data

**Annually:**
- Comprehensive content review
- Technical SEO audit
- Link building review

## Contact

Questions? Check `/SEO_IMPLEMENTATION.md` for full documentation.

---

**Last Updated:** October 20, 2025
**Quick Access:** Keep this file bookmarked for reference
