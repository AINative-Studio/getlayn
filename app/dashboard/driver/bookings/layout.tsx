import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Bookings - View Reservations',
  description: 'View and manage your parking reservations. Access booking confirmations, QR codes, and parking details.',
  keywords: [
    'parking space rental',
    'rent parking spot',
    'find parking',
    'book parking',
    'private parking',
    'my bookings',
    'parking reservations',
    'booking history',
    'parking confirmation',
  ],
  openGraph: {
    title: 'My Bookings - View Reservations | Layn',
    description: 'View and manage your parking reservations. Access booking confirmations and QR codes.',
    url: 'https://getlayn.com/dashboard/driver/bookings',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'My Bookings - View Reservations | Layn',
    description: 'View and manage your parking reservations.',
  },
  alternates: {
    canonical: 'https://getlayn.com/dashboard/driver/bookings',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DriverBookingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
