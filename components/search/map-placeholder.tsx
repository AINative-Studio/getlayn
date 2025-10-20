'use client';

import { MapPin } from 'lucide-react';

interface MapPlaceholderProps {
  listings: Array<{ id: string; lat: number; lng: number; price: number }>;
}

export function MapPlaceholder({ listings }: MapPlaceholderProps) {
  return (
    <div className="relative h-full w-full bg-muted rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4">
          <MapPin className="h-16 w-16 text-primary mx-auto" />
          <div>
            <p className="text-lg font-semibold">Interactive Map</p>
            <p className="text-sm text-muted-foreground">
              {listings.length} parking spaces nearby
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 grid grid-cols-3 gap-4 p-8 opacity-20">
        {listings.slice(0, 9).map((listing, idx) => (
          <div
            key={listing.id}
            className="flex items-center justify-center bg-primary/20 rounded-full"
          >
            <MapPin className="h-6 w-6 text-primary" />
          </div>
        ))}
      </div>
    </div>
  );
}
