# ZeroDB Integration for Layn

This directory contains the database integration layer using AINative's ZeroDB.

## Setup

The ZeroDB API key is already configured in your `.env` file:

```env
NEXT_PUBLIC_ZERODB_API_KEY=your_key_here
NEXT_PUBLIC_ZERODB_URL=https://api.zerodb.io
```

## Structure

```
lib/db/
├── zerodb.ts           # Main ZeroDB client
├── types.ts            # TypeScript type definitions
├── collections.ts      # Collection name constants
├── services/
│   ├── users.ts        # User operations
│   ├── listings.ts     # Listing operations
│   └── bookings.ts     # Booking operations
└── index.ts            # Main export file
```

## Collections

- **users** - User accounts (hosts & drivers)
- **listings** - Parking space listings
- **bookings** - Parking reservations
- **reviews** - User reviews
- **payments** - Payment transactions

## Usage Examples

### Using Services

```typescript
import { ListingService, BookingService, UserService } from '@/lib/db';

// Get all listings
const listings = await ListingService.getListings();

// Get listings with filters
const garages = await ListingService.getListings({
  type: 'garage',
  city: 'San Francisco'
});

// Create a new listing
const newListing = await ListingService.createListing({
  hostId: 'user_123',
  title: 'Downtown Garage',
  description: 'Secure parking space',
  address: '123 Main St',
  city: 'San Francisco',
  state: 'CA',
  zipCode: '94102',
  lat: 37.7749,
  lng: -122.4194,
  type: 'garage',
  price: 10,
  images: [],
  amenities: ['Covered', 'Security Camera'],
  rules: ['No oversized vehicles'],
  availability: 'available',
});

// Get bookings for a user
const myBookings = await BookingService.getDriverBookings('user_123');

// Create a booking
const booking = await BookingService.createBooking({
  listingId: 'listing_123',
  driverId: 'user_123',
  hostId: 'user_456',
  startTime: '2025-10-21T09:00:00Z',
  endTime: '2025-10-21T17:00:00Z',
  totalHours: 8,
  totalPrice: 80,
  status: 'pending',
  paymentStatus: 'pending',
});
```

### Direct ZeroDB Client Usage

```typescript
import { zerodb } from '@/lib/db/zerodb';
import { COLLECTIONS } from '@/lib/db/collections';

// Query
const response = await zerodb.query(COLLECTIONS.LISTINGS, {
  city: 'San Francisco'
});

// Insert
const newItem = await zerodb.insert(COLLECTIONS.LISTINGS, {
  title: 'My Parking Space',
  // ... other fields
});

// Update
const updated = await zerodb.update(
  COLLECTIONS.LISTINGS,
  'listing_id',
  { price: 15 }
);

// Delete
await zerodb.delete(COLLECTIONS.LISTINGS, 'listing_id');
```

## API Routes

Example API routes are provided in `/app/api/listings/route.ts`:

```bash
# Get all listings
GET /api/listings

# Get filtered listings
GET /api/listings?type=garage&city=San%20Francisco

# Create a listing
POST /api/listings
```

## Type Definitions

All database types are defined in `types.ts`:

- `User` - User account information
- `ParkingListing` - Parking space details
- `Booking` - Reservation details
- `Review` - User reviews
- `Payment` - Payment information

## Error Handling

All service methods return `null` on error and log the error to console. Always check for null returns:

```typescript
const listing = await ListingService.getListingById('123');
if (!listing) {
  // Handle error - listing not found or request failed
}
```

## Next Steps

1. Update the ZeroDB client methods to match your actual ZeroDB API endpoints
2. Add authentication/authorization checks to API routes
3. Implement real-time subscriptions if supported by ZeroDB
4. Add data validation using Zod schemas
5. Create additional service methods as needed
