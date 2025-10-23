import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Become a Host - Earn Money From Your Parking Space',
  description: 'List your driveway, garage, or parking lot on Layn and start earning up to $500/month. Join thousands of hosts with $1M insurance protection and set your own schedule.',
  keywords: [
    'become parking host',
    'list parking space',
    'rent out driveway',
    'monetize parking',
    'earn from parking',
    'parking space income',
    'list garage for rent',
    'parking host application',
  ],
  openGraph: {
    title: 'Become a Host - Earn Money From Your Parking Space | Layn',
    description: 'List your parking space and earn up to $500/month. $1M insurance included. Set your own hours.',
    images: ['/og-image.jpg'],
    url: 'https://getlayn.com/become-a-host',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become a Host - Earn Money From Your Parking Space',
    description: 'List your parking space and earn up to $500/month. $1M insurance included.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://getlayn.com/become-a-host',
  },
};

export default function BecomeAHostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
