// ZeroDB Collection Names
// Central place to manage all database collection names

export const COLLECTIONS = {
  USERS: 'users',
  LISTINGS: 'listings',
  BOOKINGS: 'bookings',
  REVIEWS: 'reviews',
  PAYMENTS: 'payments',
} as const;

export type CollectionName = typeof COLLECTIONS[keyof typeof COLLECTIONS];
