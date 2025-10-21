import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Host Guide - Become a Successful Host',
  description: 'Complete guide for parking space hosts. Learn best practices, tips, and strategies to maximize your earnings on Layn.',
  keywords: [
    'parking space rental',
    'rent parking spot',
    'private parking',
    'parking marketplace',
    'host guide',
    'hosting tips',
    'become a host',
    'parking host',
    'listing tips',
  ],
  openGraph: {
    title: 'Host Guide - Become a Successful Host | Layn',
    description: 'Complete guide for parking space hosts. Learn best practices and maximize your earnings.',
    url: 'https://getlayn.com/host-guide',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Host Guide | Layn',
    description: 'Learn how to become a successful parking space host.',
  },
  alternates: {
    canonical: 'https://getlayn.com/host-guide',
  },
};

export default function HostGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
