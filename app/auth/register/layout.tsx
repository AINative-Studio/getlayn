import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Your Free Account',
  description: 'Join Layn to start earning from your parking space or find convenient parking. Free registration for hosts and drivers.',
  keywords: [
    'parking space rental',
    'rent parking spot',
    'find parking',
    'book parking',
    'private parking',
    'parking marketplace',
    'sign up',
    'create account',
    'register',
    'join layn',
    'free registration',
  ],
  openGraph: {
    title: 'Create Your Free Account | Layn',
    description: 'Join Layn to start earning from your parking space or find convenient parking. Free registration for hosts and drivers.',
    url: 'https://getlayn.com/auth/register',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Create Your Free Account | Layn',
    description: 'Join Layn to start earning from your parking space or find convenient parking.',
  },
  alternates: {
    canonical: 'https://getlayn.com/auth/register',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
