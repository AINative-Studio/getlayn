import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find Parking Spaces Near You',
  description: 'Search and book private parking spots, driveways, and garages near your destination. Secure, affordable parking from verified hosts.',
  keywords: [
    'parking space rental',
    'rent parking spot',
    'find parking',
    'book parking',
    'private parking',
    'parking marketplace',
    'search parking',
    'nearby parking',
    'available parking spots',
    'reserve parking',
    'parking availability',
  ],
  openGraph: {
    title: 'Find Parking Spaces Near You | Layn',
    description: 'Search and book private parking spots, driveways, and garages near your destination. Secure, affordable parking from verified hosts.',
    url: 'https://getlayn.com/search',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Search Parking on Layn',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find Parking Spaces Near You | Layn',
    description: 'Search and book private parking spots, driveways, and garages near your destination.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://getlayn.com/search',
  },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
