'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/layout/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Search,
  Calendar,
  MapPin,
  Clock,
  QrCode,
  Star,
  ChevronRight,
} from 'lucide-react';

const mockUpcomingBookings = [
  {
    id: '1',
    listing: {
      title: 'Spacious Driveway - Downtown',
      address: '123 Main St, San Francisco, CA',
      host: 'Sarah J.',
    },
    date: '2025-10-22',
    time: '09:00 AM',
    duration: '4 hours',
    amount: 32,
    status: 'confirmed',
    confirmationCode: 'BK123456',
  },
  {
    id: '2',
    listing: {
      title: 'Covered Garage Spot',
      address: '456 Market St, San Francisco, CA',
      host: 'John D.',
    },
    date: '2025-10-25',
    time: '02:00 PM',
    duration: '2 hours',
    amount: 24,
    status: 'confirmed',
    confirmationCode: 'BK789012',
  },
];

const mockPastBookings = [
  {
    id: '3',
    listing: {
      title: 'Business Lot - Available Weekends',
      address: '789 Mission St, San Francisco, CA',
      host: 'Mike T.',
    },
    date: '2025-10-15',
    time: '10:00 AM',
    duration: '8 hours',
    amount: 48,
    status: 'completed',
    rated: false,
  },
  {
    id: '4',
    listing: {
      title: 'Private Garage Space',
      address: '321 Valencia St, San Francisco, CA',
      host: 'Emma W.',
    },
    date: '2025-10-10',
    time: '03:00 PM',
    duration: '3 hours',
    amount: 30,
    status: 'completed',
    rated: true,
  },
];

export default function DriverBookingsPage() {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1 bg-muted/30">
        <div className="border-b bg-card">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-heading text-3xl font-bold">My Bookings</h1>
                <p className="text-muted-foreground mt-1">
                  View and manage your parking reservations
                </p>
              </div>
              <Button asChild>
                <Link href="/search">
                  <Search className="h-4 w-4 mr-2" />
                  Find Parking
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4">
              {mockUpcomingBookings.length > 0 ? (
                mockUpcomingBookings.map((booking) => (
                  <Card key={booking.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="flex-1 space-y-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-heading font-bold text-lg">
                                {booking.listing.title}
                              </h3>
                              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                                {booking.status}
                              </Badge>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4 mr-1" />
                              {booking.listing.address}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span>{booking.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>{booking.time} ({booking.duration})</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>{booking.listing.host[0]}</AvatarFallback>
                            </Avatar>
                            <div className="text-sm">
                              <span className="text-muted-foreground">Host: </span>
                              <span className="font-semibold">{booking.listing.host}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-3 md:items-end">
                          <div className="text-right">
                            <p className="text-2xl font-bold">${booking.amount}</p>
                            <p className="text-sm text-muted-foreground">Total paid</p>
                          </div>

                          <div className="flex flex-col gap-2">
                            <Button asChild size="sm" variant="outline">
                              <Link href={`/booking/${booking.id}`}>
                                <QrCode className="h-4 w-4 mr-2" />
                                View QR Code
                              </Link>
                            </Button>
                            <Button asChild size="sm" variant="outline">
                              <Link href={`/listing/${booking.id}`}>
                                View Details
                                <ChevronRight className="h-4 w-4 ml-2" />
                              </Link>
                            </Button>
                          </div>

                          <p className="text-xs text-muted-foreground mt-2">
                            Confirmation: {booking.confirmationCode}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-heading font-bold text-lg mb-2">No upcoming bookings</h3>
                    <p className="text-muted-foreground mb-4">
                      Find and book parking spaces near you
                    </p>
                    <Button asChild>
                      <Link href="/search">Browse Parking Spaces</Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="past" className="space-y-4">
              {mockPastBookings.map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex-1 space-y-3">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-heading font-bold text-lg">
                              {booking.listing.title}
                            </h3>
                            <Badge variant="outline">{booking.status}</Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            {booking.listing.address}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{booking.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{booking.time} ({booking.duration})</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>{booking.listing.host[0]}</AvatarFallback>
                          </Avatar>
                          <div className="text-sm">
                            <span className="text-muted-foreground">Host: </span>
                            <span className="font-semibold">{booking.listing.host}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 md:items-end">
                        <div className="text-right">
                          <p className="text-2xl font-bold">${booking.amount}</p>
                          <p className="text-sm text-muted-foreground">Total paid</p>
                        </div>

                        {!booking.rated ? (
                          <Button size="sm">
                            <Star className="h-4 w-4 mr-2" />
                            Leave a Review
                          </Button>
                        ) : (
                          <Badge variant="outline" className="border-yellow-500 text-yellow-700">
                            <Star className="h-3 w-3 mr-1 fill-yellow-500" />
                            Reviewed
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
