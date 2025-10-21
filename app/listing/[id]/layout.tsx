import type { Metadata } from 'next';

// This would normally fetch listing data from your database
// For now, we'll use a default metadata that applies to all listings
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  // In production, fetch listing data here
  // const listing = await getListingById(params.id);

  return {
    title: 'Parking Space Listing',
    description: 'Book this private parking space on Layn. Secure, convenient parking with verified hosts.',
    keywords: [
      'parking space rental',
      'rent parking spot',
      'find parking',
      'book parking',
      'private parking',
      'parking marketplace',
      'parking space',
      'hourly parking',
      'daily parking',
    ],
    openGraph: {
      title: 'Parking Space Listing | Layn',
      description: 'Book this private parking space on Layn. Secure, convenient parking with verified hosts.',
      url: `https://getlayn.com/listing/${params.id}`,
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Parking Space on Layn',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Parking Space Listing | Layn',
      description: 'Book this private parking space on Layn.',
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: `https://getlayn.com/listing/${params.id}`,
    },
  };
}

export default function ListingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
