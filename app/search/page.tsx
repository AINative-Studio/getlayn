'use client';

import { useState } from 'react';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { MapPlaceholder } from '@/components/search/map-placeholder';
import { ListingCard } from '@/components/search/listing-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Search, SlidersHorizontal, Map, List } from 'lucide-react';

const mockListings = [
  {
    id: '1',
    title: 'Spacious Driveway - Downtown',
    address: '123 Main St, San Francisco, CA',
    distance: '0.5 mi',
    price: 8,
    rating: 4.8,
    reviews: 24,
    type: 'Driveway',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=800&auto=format&fit=crop',
    lat: 37.7749,
    lng: -122.4194,
  },
  {
    id: '2',
    title: 'Covered Garage Spot',
    address: '456 Market St, San Francisco, CA',
    distance: '0.8 mi',
    price: 12,
    rating: 4.9,
    reviews: 31,
    type: 'Garage',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=800&auto=format&fit=crop',
    lat: 37.7849,
    lng: -122.4094,
  },
  {
    id: '3',
    title: 'Business Lot - Available Weekends',
    address: '789 Mission St, San Francisco, CA',
    distance: '1.2 mi',
    price: 6,
    rating: 4.5,
    reviews: 18,
    type: 'Parking Lot',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    lat: 37.7649,
    lng: -122.4294,
  },
  {
    id: '4',
    title: 'Private Garage Space',
    address: '321 Valencia St, San Francisco, CA',
    distance: '1.5 mi',
    price: 10,
    rating: 4.7,
    reviews: 22,
    type: 'Garage',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    lat: 37.7549,
    lng: -122.4394,
  },
  {
    id: '5',
    title: 'Street Level Parking',
    address: '654 Folsom St, San Francisco, CA',
    distance: '2.0 mi',
    price: 5,
    rating: 4.3,
    reviews: 15,
    type: 'Driveway',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    lat: 37.7449,
    lng: -122.3994,
  },
  {
    id: '6',
    title: 'Secure Underground Parking',
    address: '987 Howard St, San Francisco, CA',
    distance: '2.3 mi',
    price: 15,
    rating: 5.0,
    reviews: 42,
    type: 'Garage',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
    lat: 37.7949,
    lng: -122.4494,
  },
];

export default function SearchPage() {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([5, 20]);
  const [sortBy, setSortBy] = useState('distance');

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="border-b bg-card">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex-1 max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search by location, address, or zip code..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Filter Options</SheetTitle>
                      <SheetDescription>
                        Refine your search results
                      </SheetDescription>
                    </SheetHeader>
                    <div className="space-y-6 py-6">
                      <div className="space-y-2">
                        <Label>Price Range (per hour)</Label>
                        <div className="pt-2">
                          <Slider
                            min={1}
                            max={30}
                            step={1}
                            value={priceRange}
                            onValueChange={setPriceRange}
                          />
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>${priceRange[0]}</span>
                          <span>${priceRange[1]}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Parking Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="All types" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All types</SelectItem>
                            <SelectItem value="driveway">Driveway</SelectItem>
                            <SelectItem value="garage">Garage</SelectItem>
                            <SelectItem value="lot">Parking Lot</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Availability</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Any time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Any time</SelectItem>
                            <SelectItem value="now">Available now</SelectItem>
                            <SelectItem value="today">Today</SelectItem>
                            <SelectItem value="week">This week</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="distance">Distance</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex rounded-lg border">
                  <Button
                    variant={viewMode === 'map' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('map')}
                  >
                    <Map className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="mb-4 text-sm text-muted-foreground">
            Found {mockListings.length} parking spaces near you
          </div>

          {viewMode === 'list' ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mockListings.map((listing, index) => (
                <ListingCard
                  key={listing.id}
                  listing={listing}
                  priority={index < 3}
                />
              ))}
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="h-[600px]">
                <MapPlaceholder listings={mockListings} />
              </div>
              <div className="space-y-4 h-[600px] overflow-y-auto">
                {mockListings.map((listing, index) => (
                  <ListingCard
                    key={listing.id}
                    listing={listing}
                    priority={index < 2}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
