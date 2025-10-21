// Database Type Definitions for ZeroDB Collections

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: 'host' | 'driver' | 'both';
  verified: boolean;
  memberSince: string;
  createdAt: string;
  updatedAt: string;
}

export interface ParkingListing {
  id: string;
  hostId: string;
  title: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  lat: number;
  lng: number;
  type: 'driveway' | 'garage' | 'lot';
  price: number; // per hour
  images: string[];
  amenities: string[];
  rules: string[];
  availability: 'available' | 'booked' | 'unavailable';
  rating?: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Booking {
  id: string;
  listingId: string;
  driverId: string;
  hostId: string;
  startTime: string;
  endTime: string;
  totalHours: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'active' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  vehicleInfo?: {
    make: string;
    model: string;
    licensePlate: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  listingId: string;
  bookingId: string;
  reviewerId: string;
  rating: number; // 1-5
  comment: string;
  createdAt: string;
  updatedAt: string;
}

export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  paymentMethod: string;
  transactionId?: string;
  createdAt: string;
  updatedAt: string;
}

// Query filter types
export interface ListingFilters {
  type?: 'driveway' | 'garage' | 'lot';
  minPrice?: number;
  maxPrice?: number;
  city?: string;
  amenities?: string[];
  availability?: 'available' | 'booked' | 'unavailable';
}

export interface BookingFilters {
  driverId?: string;
  hostId?: string;
  listingId?: string;
  status?: Booking['status'];
  startDate?: string;
  endDate?: string;
}
