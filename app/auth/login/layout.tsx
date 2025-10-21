import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In to Your Account',
  description: 'Access your Layn account to manage parking listings, bookings, and earnings. Secure login for hosts and drivers.',
  keywords: [
    'parking space rental',
    'rent parking spot',
    'find parking',
    'book parking',
    'private parking',
    'login',
    'sign in',
    'account access',
    'member login',
  ],
  openGraph: {
    title: 'Sign In to Your Account | Layn',
    description: 'Access your Layn account to manage parking listings, bookings, and earnings.',
    url: 'https://getlayn.com/auth/login',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Sign In to Your Account | Layn',
    description: 'Access your Layn account to manage parking listings, bookings, and earnings.',
  },
  alternates: {
    canonical: 'https://getlayn.com/auth/login',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
