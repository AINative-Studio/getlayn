'use client';

import { useLoadScript, GoogleMap, MarkerF, InfoWindow } from '@react-google-maps/api';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

interface MapPlaceholderProps {
  listings: Array<{
    id: string;
    lat: number;
    lng: number;
    price: number;
    title?: string;
  }>;
}

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

export function MapPlaceholder({ listings }: MapPlaceholderProps) {
  const [selectedListing, setSelectedListing] = useState<string | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const center = useMemo(() => {
    if (listings.length === 0) {
      return { lat: 37.7749, lng: -122.4194 }; // Default to San Francisco
    }
    const avgLat = listings.reduce((sum, l) => sum + l.lat, 0) / listings.length;
    const avgLng = listings.reduce((sum, l) => sum + l.lng, 0) / listings.length;
    return { lat: avgLat, lng: avgLng };
  }, [listings]);

  if (loadError) {
    return (
      <div className="relative h-full w-full bg-muted rounded-lg overflow-hidden flex items-center justify-center">
        <div className="text-center space-y-4">
          <MapPin className="h-16 w-16 text-muted-foreground mx-auto" />
          <div>
            <p className="text-lg font-semibold">Map Unavailable</p>
            <p className="text-sm text-muted-foreground">
              Unable to load Google Maps
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="relative h-full w-full bg-muted rounded-lg overflow-hidden flex items-center justify-center">
        <div className="text-center space-y-4">
          <MapPin className="h-16 w-16 text-primary mx-auto animate-pulse" />
          <div>
            <p className="text-lg font-semibold">Loading Map...</p>
            <p className="text-sm text-muted-foreground">
              {listings.length} parking spaces nearby
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full rounded-lg overflow-hidden">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={{
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }],
            },
          ],
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        }}
      >
        {listings.map((listing) => (
          <MarkerF
            key={listing.id}
            position={{ lat: listing.lat, lng: listing.lng }}
            onClick={() => setSelectedListing(listing.id)}
            icon={{
              path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z',
              fillColor: '#0ea5e9',
              fillOpacity: 1,
              strokeColor: '#ffffff',
              strokeWeight: 2,
              scale: 1.5,
            }}
          />
        ))}

        {selectedListing && listings.find(l => l.id === selectedListing) && (
          <InfoWindow
            position={{
              lat: listings.find(l => l.id === selectedListing)!.lat,
              lng: listings.find(l => l.id === selectedListing)!.lng,
            }}
            onCloseClick={() => setSelectedListing(null)}
          >
            <div className="p-2">
              <h3 className="font-semibold text-sm mb-1">
                {listings.find(l => l.id === selectedListing)!.title || 'Parking Space'}
              </h3>
              <p className="text-lg font-bold text-primary mb-2">
                ${listings.find(l => l.id === selectedListing)!.price}/hr
              </p>
              <Link
                href={`/listing/${selectedListing}`}
                className="text-xs text-blue-600 hover:underline"
              >
                View Details →
              </Link>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}
