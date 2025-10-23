'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/layout/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  PlusCircle,
  DollarSign,
  Calendar,
  TrendingUp,
  MapPin,
  Edit,
  Eye,
  MoreVertical,
  Users,
  ArrowRight,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const mockStats = {
  totalEarnings: 2450,
  thisMonth: 680,
  activeListings: 2,
  totalBookings: 47,
};

const mockListings = [
  {
    id: '1',
    title: 'Spacious Driveway - Downtown',
    address: '123 Main St, San Francisco, CA',
    price: 8,
    status: 'active',
    bookings: 24,
    rating: 4.8,
  },
  {
    id: '2',
    title: 'Covered Garage Spot',
    address: '456 Market St, San Francisco, CA',
    price: 12,
    status: 'active',
    bookings: 18,
    rating: 4.9,
  },
];

const mockUpcomingBookings = [
  {
    id: '1',
    driver: 'Mike T.',
    listing: 'Spacious Driveway - Downtown',
    date: '2025-10-22',
    time: '09:00 AM',
    duration: '4 hours',
    amount: 32,
  },
  {
    id: '2',
    driver: 'Sarah L.',
    listing: 'Covered Garage Spot',
    date: '2025-10-23',
    time: '02:00 PM',
    duration: '2 hours',
    amount: 24,
  },
  {
    id: '3',
    driver: 'David R.',
    listing: 'Spacious Driveway - Downtown',
    date: '2025-10-24',
    time: '10:00 AM',
    duration: '8 hours',
    amount: 64,
  },
];

const mockRecentActivity = [
  {
    id: '1',
    type: 'booking',
    message: 'New booking from Mike T.',
    time: '2 hours ago',
  },
  {
    id: '2',
    type: 'review',
    message: 'Jennifer L. left a 5-star review',
    time: '5 hours ago',
  },
  {
    id: '3',
    type: 'payment',
    message: 'Payment received: $32.00',
    time: '1 day ago',
  },
];

export default function HostDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1 bg-muted/30">
        <div className="border-b bg-card">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-heading text-3xl font-bold">Host Dashboard</h1>
                <p className="text-muted-foreground mt-1">
                  Manage your listings and track earnings
                </p>
              </div>
              <Button asChild>
                <Link href="/dashboard/host/new-listing">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add New Space
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${mockStats.totalEarnings}</div>
                <p className="text-xs text-muted-foreground mt-1">All time</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">This Month</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${mockStats.thisMonth}</div>
                <p className="text-xs text-green-600 mt-1">+12% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockStats.activeListings}</div>
                <p className="text-xs text-muted-foreground mt-1">Parking spaces</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockStats.totalBookings}</div>
                <p className="text-xs text-muted-foreground mt-1">Completed</p>
              </CardContent>
            </Card>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="listings">My Listings</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Bookings</CardTitle>
                    <CardDescription>Your next scheduled reservations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mockUpcomingBookings.slice(0, 3).map((booking) => (
                      <div
                        key={booking.id}
                        className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>{booking.driver[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-sm">{booking.driver}</p>
                            <p className="text-xs text-muted-foreground">{booking.date} at {booking.time}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">${booking.amount}</p>
                          <p className="text-xs text-muted-foreground">{booking.duration}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest updates from your listings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mockRecentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start gap-3 border-b pb-4 last:border-0 last:pb-0">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Users className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">{activity.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
                <CardContent className="pt-6 pb-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                      <h3 className="font-heading text-xl font-bold mb-2">
                        Have Another Parking Space?
                      </h3>
                      <p className="text-muted-foreground">
                        Maximize your earnings by listing additional parking spaces. It only takes a few minutes!
                      </p>
                    </div>
                    <Button asChild size="lg" className="shrink-0">
                      <Link href="/become-a-host">
                        List Another Space
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="listings" className="space-y-4">
              {mockListings.map((listing) => (
                <Card key={listing.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-heading font-bold text-lg">{listing.title}</h3>
                          <Badge variant={listing.status === 'active' ? 'default' : 'secondary'}>
                            {listing.status}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <MapPin className="h-4 w-4 mr-1" />
                          {listing.address}
                        </div>
                        <div className="flex items-center gap-6 text-sm">
                          <div>
                            <span className="font-semibold">${listing.price}</span>
                            <span className="text-muted-foreground">/hour</span>
                          </div>
                          <div>
                            <span className="font-semibold">{listing.bookings}</span>
                            <span className="text-muted-foreground"> bookings</span>
                          </div>
                          <div>
                            <span className="font-semibold">{listing.rating}</span>
                            <span className="text-muted-foreground"> rating</span>
                          </div>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Listing
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="bookings" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {mockUpcomingBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                      >
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback>{booking.driver[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{booking.driver}</p>
                            <p className="text-sm text-muted-foreground">{booking.listing}</p>
                            <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              <span>{booking.date} at {booking.time}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">${booking.amount}</p>
                          <p className="text-sm text-muted-foreground">{booking.duration}</p>
                          <Badge variant="outline" className="mt-2">Upcoming</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
