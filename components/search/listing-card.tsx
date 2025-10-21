import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star } from 'lucide-react';

interface ListingCardProps {
  listing: {
    id: string;
    title: string;
    address: string;
    distance: string;
    price: number;
    rating: number;
    reviews: number;
    type: string;
    image: string;
  };
  priority?: boolean;
}

export function ListingCard({ listing, priority = false }: ListingCardProps) {
  return (
    <Link href={`/listing/${listing.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg hover:border-primary">
        <div className="relative h-48 bg-muted">
          {listing.image ? (
            <Image
              src={listing.image}
              alt={listing.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20" />
          )}
          <Badge className="absolute top-2 right-2 bg-card text-card-foreground border z-10">
            ${listing.price}/hr
          </Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="font-heading font-bold text-lg mb-2 line-clamp-1">
            {listing.title}
          </h3>
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="line-clamp-1">{listing.address}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
              <span className="font-medium">{listing.rating}</span>
              <span className="text-muted-foreground ml-1">({listing.reviews})</span>
            </div>
            <Badge variant="outline">{listing.type}</Badge>
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            {listing.distance} away
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
