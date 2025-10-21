import { Metadata } from 'next';

const SITE_NAME = 'Layn';
const SITE_URL = 'https://getlayn.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalPath?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE,
  canonicalPath = '',
}: PageMetadata): Metadata {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${canonicalPath}`;

  // Base keywords for all pages
  const baseKeywords = [
    'parking space rental',
    'rent parking spot',
    'find parking',
    'book parking',
    'private parking',
    'parking marketplace',
    'driveway rental',
    'garage rental',
    'parking near me',
  ];

  const allKeywords = [...new Set([...baseKeywords, ...keywords])];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords.join(', '),
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
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
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@getlayn',
      site: '@getlayn',
    },
    metadataBase: new URL(SITE_URL),
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
  };
}

// Pre-configured metadata for common pages
export const pageMetadata = {
  home: generateMetadata({
    title: 'Layn - Turn Empty Spaces into Easy Income',
    description: 'Connect drivers with private parking spaces. List your driveway, garage, or lot and earn money while helping your community find convenient parking.',
    keywords: [
      'earn money parking',
      'list parking space',
      'monetize driveway',
      'passive income parking',
      'rent out garage',
    ],
    canonicalPath: '',
  }),

  search: generateMetadata({
    title: 'Find Parking Spaces Near You',
    description: 'Search and book private parking spots, driveways, and garages near your destination. Secure, affordable parking from verified hosts.',
    keywords: [
      'search parking',
      'nearby parking',
      'available parking spots',
      'reserve parking',
      'parking availability',
    ],
    canonicalPath: '/search',
  }),

  howItWorks: generateMetadata({
    title: 'How It Works - Simple Parking Solutions',
    description: 'Learn how Layn connects drivers with private parking spaces. Discover how to list your space or find affordable parking in 3 easy steps.',
    keywords: [
      'how to list parking',
      'how to book parking',
      'parking rental process',
      'list driveway for rent',
    ],
    canonicalPath: '/how-it-works',
  }),

  login: generateMetadata({
    title: 'Sign In to Your Account',
    description: 'Access your Layn account to manage parking listings, bookings, and earnings. Secure login for hosts and drivers.',
    keywords: ['login', 'sign in', 'account access', 'member login'],
    canonicalPath: '/auth/login',
  }),

  register: generateMetadata({
    title: 'Create Your Free Account',
    description: 'Join Layn to start earning from your parking space or find convenient parking. Free registration for hosts and drivers.',
    keywords: [
      'sign up',
      'create account',
      'register',
      'join layn',
      'free registration',
    ],
    canonicalPath: '/auth/register',
  }),

  hostDashboard: generateMetadata({
    title: 'Host Dashboard - Manage Your Listings',
    description: 'Manage your parking listings, track bookings, and monitor earnings. Complete host dashboard for parking space owners.',
    keywords: [
      'host dashboard',
      'manage listings',
      'track earnings',
      'parking host',
      'listing management',
    ],
    canonicalPath: '/dashboard/host',
  }),

  driverBookings: generateMetadata({
    title: 'My Bookings - View Reservations',
    description: 'View and manage your parking reservations. Access booking confirmations, QR codes, and parking details.',
    keywords: [
      'my bookings',
      'parking reservations',
      'booking history',
      'parking confirmation',
    ],
    canonicalPath: '/dashboard/driver/bookings',
  }),

  privacy: generateMetadata({
    title: 'Privacy Policy',
    description: 'Read our privacy policy to understand how Layn protects your personal information and data.',
    keywords: ['privacy policy', 'data protection', 'user privacy'],
    canonicalPath: '/privacy',
  }),

  terms: generateMetadata({
    title: 'Terms of Service',
    description: 'Review the terms and conditions for using Layn parking marketplace platform.',
    keywords: ['terms of service', 'terms and conditions', 'user agreement'],
    canonicalPath: '/terms',
  }),
};

// Dynamic metadata generators
export function generateListingMetadata(listing: {
  id: string;
  title: string;
  address: string;
  price: number;
  type: string;
}): Metadata {
  return generateMetadata({
    title: listing.title,
    description: `Book ${listing.type.toLowerCase()} parking at ${listing.address} for $${listing.price}/hour. Secure, convenient parking space available on Layn.`,
    keywords: [
      listing.type.toLowerCase(),
      'parking space',
      listing.address.split(',')[0],
      `$${listing.price} parking`,
      'hourly parking',
    ],
    canonicalPath: `/listing/${listing.id}`,
  });
}

export function generateBookingMetadata(listingId: string): Metadata {
  return generateMetadata({
    title: 'Book Parking Space',
    description: 'Complete your parking reservation. Choose dates, times, and securely pay for your parking spot.',
    keywords: [
      'book parking',
      'reserve parking',
      'parking payment',
      'parking reservation',
    ],
    canonicalPath: `/booking/${listingId}`,
  });
}
