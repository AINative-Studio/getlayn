'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  MapPin,
  Star,
  Shield,
  Clock,
  CheckCircle2,
  Calendar,
  ArrowLeft,
} from 'lucide-react';

const mockListings: { [key: string]: any } = {
  '1': {
    id: '1',
    title: 'Spacious Driveway - Downtown',
    address: '123 Main St, San Francisco, CA 94102',
    description: 'Perfect parking spot in the heart of downtown. Easy access, well-lit area, and available 24/7. Close to public transportation and major attractions. The driveway can accommodate standard vehicles and small SUVs.',
    price: 8,
    rating: 4.8,
    reviews: 24,
    type: 'Driveway',
    distance: '0.5 mi',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=800&auto=format&fit=crop',
    host: {
      name: 'Sarah Johnson',
      memberSince: '2023',
      verified: true,
    },
    amenities: [
      'EV Charging',
      'Covered',
      'Security Camera',
      '24/7 Access',
      'Well Lit',
    ],
    availability: 'Available Now',
    rules: [
      'No oversized vehicles',
      'Keep space clean',
      'Respect quiet hours after 10 PM',
    ],
  },
  '2': {
    id: '2',
    title: 'Covered Garage Spot',
    address: '456 Market St, San Francisco, CA 94102',
    description: 'Secure covered garage space in a well-maintained building. Perfect for daily parking with easy in-and-out access. Protected from weather and includes security monitoring.',
    price: 12,
    rating: 4.9,
    reviews: 31,
    type: 'Garage',
    distance: '0.8 mi',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=800&auto=format&fit=crop',
    host: {
      name: 'Michael Chen',
      memberSince: '2022',
      verified: true,
    },
    amenities: [
      'Covered',
      'Security Camera',
      '24/7 Access',
      'Well Lit',
      'Electric Gate',
    ],
    availability: 'Available Now',
    rules: [
      'No oversized vehicles',
      'Keep space clean',
      'Close gate after entry',
    ],
  },
  '3': {
    id: '3',
    title: 'Business Lot - Available Weekends',
    address: '789 Mission St, San Francisco, CA 94102',
    description: 'Large business parking lot available on weekends and after business hours. Great for event parking or weekend city visits. Well-maintained and secure location.',
    price: 6,
    rating: 4.5,
    reviews: 18,
    type: 'Parking Lot',
    distance: '1.2 mi',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    host: {
      name: 'Downtown Properties LLC',
      memberSince: '2024',
      verified: true,
    },
    amenities: [
      'Well Lit',
      'Security Camera',
      'Large Space',
      'Easy Access',
    ],
    availability: 'Weekends Only',
    rules: [
      'Weekends and after 6 PM only',
      'No commercial vehicles',
      'Park within marked lines',
    ],
  },
  '4': {
    id: '4',
    title: 'Private Garage Space',
    address: '321 Valencia St, San Francisco, CA 94102',
    description: 'Private single-car garage in a residential area. Clean, secure, and convenient. Perfect for those who want extra protection for their vehicle.',
    price: 10,
    rating: 4.7,
    reviews: 22,
    type: 'Garage',
    distance: '1.5 mi',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    host: {
      name: 'Emily Rodriguez',
      memberSince: '2023',
      verified: true,
    },
    amenities: [
      'Covered',
      'Private',
      'Security Camera',
      'Well Lit',
    ],
    availability: 'Available Now',
    rules: [
      'Single vehicle only',
      'Keep garage clean',
      'Lock garage after use',
    ],
  },
  '5': {
    id: '5',
    title: 'Street Level Parking',
    address: '654 Folsom St, San Francisco, CA 94102',
    description: 'Convenient street-level parking spot in a quiet neighborhood. Easy access and affordable rates. Great for long-term parking needs.',
    price: 5,
    rating: 4.3,
    reviews: 15,
    type: 'Driveway',
    distance: '2.0 mi',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    host: {
      name: 'James Wilson',
      memberSince: '2023',
      verified: true,
    },
    amenities: [
      'Easy Access',
      'Quiet Area',
      'Street Level',
    ],
    availability: 'Available Now',
    rules: [
      'Park within designated area',
      'No blocking driveway',
      'Respect neighbors',
    ],
  },
  '6': {
    id: '6',
    title: 'Secure Underground Parking',
    address: '987 Howard St, San Francisco, CA 94102',
    description: 'Premium underground parking in a modern building. Maximum security with controlled access, surveillance, and on-site management. Perfect for those who value safety and convenience.',
    price: 15,
    rating: 5.0,
    reviews: 42,
    type: 'Garage',
    distance: '2.3 mi',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
    host: {
      name: 'Premium Parking Management',
      memberSince: '2022',
      verified: true,
    },
    amenities: [
      'Covered',
      'Security Camera',
      '24/7 Access',
      'Well Lit',
      'Underground',
      'Elevator Access',
    ],
    availability: 'Available Now',
    rules: [
      'Respect height clearance',
      'Follow directional signs',
      'No commercial vehicles',
    ],
  },
};

const mockReviews = [
  {
    id: '1',
    author: 'Mike T.',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Great spot, very convenient location and easy to access. Host was responsive and helpful.',
  },
  {
    id: '2',
    author: 'Jennifer L.',
    rating: 5,
    date: '1 month ago',
    comment: 'Perfect for daily commute parking. Safe area and exactly as described.',
  },
  {
    id: '3',
    author: 'David R.',
    rating: 4,
    date: '2 months ago',
    comment: 'Good parking spot, though a bit tight for larger vehicles. Overall satisfied.',
  },
];

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const mockListing = mockListings[params.id] || mockListings['1'];

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/search">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to search
            </Link>
          </Button>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
                {mockListing.image && (
                  <Image
                    src={mockListing.image}
                    alt={mockListing.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                )}
                <Badge className="absolute top-4 right-4 text-lg py-2 px-4 z-10">
                  ${mockListing.price}/hr
                </Badge>
              </div>

              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="font-heading text-3xl font-bold mb-2">
                      {mockListing.title}
                    </h1>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {mockListing.address}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold">{mockListing.rating}</span>
                    <span className="text-muted-foreground">({mockListing.reviews} reviews)</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">{mockListing.type}</Badge>
                  <Badge variant="outline" className="border-green-500 text-green-700">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    {mockListing.availability}
                  </Badge>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="font-heading text-xl font-bold mb-3">About this space</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {mockListing.description}
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="font-heading text-xl font-bold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 gap-4">
                  {mockListing.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="font-heading text-xl font-bold mb-4">Parking Rules</h2>
                <ul className="space-y-2">
                  {mockListing.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="font-heading text-xl font-bold mb-4">Reviews</h2>
                <div className="space-y-4">
                  {mockReviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>{review.author[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold">{review.author}</p>
                              <p className="text-sm text-muted-foreground">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                            <span className="font-semibold">{review.rating}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold mb-2">
                        ${mockListing.price}
                        <span className="text-base font-normal text-muted-foreground">/hour</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Minimum 1 hour</span>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-semibold mb-3">Host Information</h3>
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>{mockListing.host.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold">{mockListing.host.name}</p>
                            {mockListing.host.verified && (
                              <Shield className="h-4 w-4 text-primary" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Member since {mockListing.host.memberSince}
                          </p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <Button asChild size="lg" className="w-full">
                      <Link href={`/booking/${mockListing.id}`}>
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Now
                      </Link>
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span>Secure payment protection</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
