import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';
import Script from 'next/script';
import {
  OrganizationStructuredData,
  WebsiteStructuredData,
  LocalBusinessStructuredData,
} from '@/components/seo/structured-data';

export const metadata: Metadata = {
  metadataBase: new URL('https://getlayn.com'),
  title: {
    default: 'Layn - Turn Empty Spaces into Easy Income',
    template: '%s | Layn',
  },
  description: 'Connect drivers with private parking spaces. List your driveway, garage, or lot and earn money while helping your community find convenient parking.',
  keywords: [
    'parking space rental',
    'rent parking spot',
    'find parking',
    'book parking',
    'private parking',
    'parking marketplace',
    'driveway rental',
    'garage rental',
    'parking near me',
    'earn money parking',
    'list parking space',
    'monetize driveway',
    'affordable parking',
  ],
  authors: [{ name: 'Layn' }],
  creator: 'Layn',
  publisher: 'Layn',
  applicationName: 'Layn',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://getlayn.com',
    siteName: 'Layn',
    title: 'Layn - Turn Empty Spaces into Easy Income',
    description: 'Connect drivers with private parking spaces. List your driveway, garage, or lot and earn money while helping your community find convenient parking.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Layn - Parking Marketplace Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Layn - Turn Empty Spaces into Easy Income',
    description: 'Connect drivers with private parking spaces. List your driveway, garage, or lot and earn money while helping your community.',
    images: ['/og-image.jpg'],
    creator: '@getlayn',
    site: '@getlayn',
  },
  alternates: {
    canonical: 'https://getlayn.com',
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G4Z9EFR8TW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G4Z9EFR8TW');
          `}
        </Script>
        <OrganizationStructuredData />
        <WebsiteStructuredData />
        <LocalBusinessStructuredData />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
