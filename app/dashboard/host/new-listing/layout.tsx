import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Add New Parking Space',
  description: 'List your parking space on Layn and start earning. Add your driveway, garage, or parking lot in minutes.',
  keywords: [
    'parking space rental',
    'rent parking spot',
    'private parking',
    'parking marketplace',
    'list parking space',
    'add listing',
    'new listing',
    'rent driveway',
  ],
  openGraph: {
    title: 'Add New Parking Space | Layn',
    description: 'List your parking space and start earning.',
    url: 'https://getlayn.com/dashboard/host/new-listing',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Add New Parking Space | Layn',
    description: 'List your parking space and start earning.',
  },
  alternates: {
    canonical: 'https://getlayn.com/dashboard/host/new-listing',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function NewListingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
