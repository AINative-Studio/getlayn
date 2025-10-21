import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: 'Book Parking Space',
    description: 'Complete your parking reservation. Choose dates, times, and securely pay for your parking spot.',
    keywords: [
      'parking space rental',
      'rent parking spot',
      'find parking',
      'book parking',
      'private parking',
      'parking marketplace',
      'reserve parking',
      'parking payment',
      'parking reservation',
    ],
    openGraph: {
      title: 'Book Parking Space | Layn',
      description: 'Complete your parking reservation. Choose dates, times, and securely pay for your parking spot.',
      url: `https://getlayn.com/booking/${params.id}`,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Book Parking Space | Layn',
      description: 'Complete your parking reservation securely.',
    },
    alternates: {
      canonical: `https://getlayn.com/booking/${params.id}`,
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
