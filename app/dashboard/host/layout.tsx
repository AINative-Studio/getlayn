import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Host Dashboard - Manage Your Listings',
  description: 'Manage your parking listings, track bookings, and monitor earnings. Complete host dashboard for parking space owners.',
  keywords: [
    'parking space rental',
    'rent parking spot',
    'private parking',
    'parking marketplace',
    'host dashboard',
    'manage listings',
    'track earnings',
    'parking host',
    'listing management',
  ],
  openGraph: {
    title: 'Host Dashboard - Manage Your Listings | Layn',
    description: 'Manage your parking listings, track bookings, and monitor earnings.',
    url: 'https://getlayn.com/dashboard/host',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Host Dashboard - Manage Your Listings | Layn',
    description: 'Manage your parking listings, track bookings, and monitor earnings.',
  },
  alternates: {
    canonical: 'https://getlayn.com/dashboard/host',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function HostDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
