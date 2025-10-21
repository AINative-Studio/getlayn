import Script from 'next/script';

interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
}

interface WebsiteSchema {
  '@context': string;
  '@type': string;
  url: string;
  name: string;
  description: string;
  potentialAction: {
    '@type': string;
    target: {
      '@type': string;
      urlTemplate: string;
    };
    'query-input': string;
  };
}

interface LocalBusinessSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    '@type': string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  priceRange: string;
}

export function OrganizationStructuredData() {
  const organizationSchema: OrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Layn',
    url: 'https://getlayn.com',
    logo: 'https://getlayn.com/logo.png',
    description:
      'Layn connects drivers with private parking spaces. List your driveway, garage, or lot and earn money while helping your community.',
    sameAs: [
      'https://twitter.com/getlayn',
      'https://facebook.com/getlayn',
      'https://instagram.com/getlayn',
      'https://linkedin.com/company/getlayn',
    ],
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema),
      }}
    />
  );
}

export function WebsiteStructuredData() {
  const websiteSchema: WebsiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://getlayn.com',
    name: 'Layn',
    description: 'Parking space rental marketplace',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://getlayn.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteSchema),
      }}
    />
  );
}

export function LocalBusinessStructuredData() {
  const localBusinessSchema: LocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Layn',
    description:
      'Parking space rental marketplace connecting drivers with private parking spaces',
    url: 'https://getlayn.com',
    telephone: '1-800-LAYN-PARK',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    priceRange: '$5-$30',
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  );
}

interface ListingSchema {
  id: string;
  title: string;
  description: string;
  price: number;
  address: string;
  type: string;
  image?: string;
}

export function ListingStructuredData({ listing }: { listing: ListingSchema }) {
  const listingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: listing.title,
    description: listing.description,
    offers: {
      '@type': 'Offer',
      price: listing.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `https://getlayn.com/listing/${listing.id}`,
    },
    image: listing.image || 'https://getlayn.com/og-image.jpg',
    category: 'Parking Space',
    brand: {
      '@type': 'Brand',
      name: 'Layn',
    },
  };

  return (
    <Script
      id="listing-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(listingSchema),
      }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbStructuredData({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema),
      }}
    />
  );
}
