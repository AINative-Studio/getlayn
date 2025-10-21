import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Earnings Calculator - See Your Potential',
  description: 'Calculate how much you could earn by renting out your parking space. Free earnings calculator for parking hosts on Layn.',
  keywords: [
    'parking space rental',
    'rent parking spot',
    'private parking',
    'parking marketplace',
    'earnings calculator',
    'parking income',
    'calculate earnings',
    'parking revenue',
    'passive income',
  ],
  openGraph: {
    title: 'Earnings Calculator - See Your Potential | Layn',
    description: 'Calculate how much you could earn by renting out your parking space on Layn.',
    url: 'https://getlayn.com/earnings',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Earnings Calculator | Layn',
    description: 'Calculate your potential parking rental income.',
  },
  alternates: {
    canonical: 'https://getlayn.com/earnings',
  },
};

export default function EarningsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
