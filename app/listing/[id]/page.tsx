'use client';

import { useState } from 'react';
import Link from 'next/link';
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
  Car,
  Shield,
  Clock,
  CheckCircle2,
  Calendar,
  ArrowLeft,
} from 'lucide-react';

const mockListing = {
  id: '1',
  title: 'Spacious Driveway - Downtown',
  address: '123 Main St, San Francisco, CA 94102',
  description: 'Perfect parking spot in the heart of downtown. Easy access, well-lit area, and available 24/7. Close to public transportation and major attractions. The driveway can accommodate standard vehicles and small SUVs.',
  price: 8,
  rating: 4.8,
  reviews: 24,
  type: 'Driveway',
  distance: '0.5 mi',
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
              <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <Car className="h-32 w-32 text-primary/40" />
                <Badge className="absolute top-4 right-4 text-lg py-2 px-4">
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
