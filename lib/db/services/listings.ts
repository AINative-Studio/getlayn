// Listing Service - Database operations for parking listings
import { zerodb } from '../zerodb';
import { COLLECTIONS } from '../collections';
import type { ParkingListing, ListingFilters } from '../types';

export class ListingService {
  // Get all listings with optional filters
  static async getListings(filters?: ListingFilters) {
    const response = await zerodb.query<ParkingListing>(
      COLLECTIONS.LISTINGS,
      filters
    );

    if (!response.success) {
      console.error('Error fetching listings:', response.error);
      return [];
    }

    return response.data || [];
  }

  // Get a single listing by ID
  static async getListingById(id: string) {
    const response = await zerodb.get<ParkingListing>(COLLECTIONS.LISTINGS, id);

    if (!response.success) {
      console.error('Error fetching listing:', response.error);
      return null;
    }

    return response.data;
  }

  // Create a new listing
  static async createListing(listing: Omit<ParkingListing, 'id' | 'createdAt' | 'updatedAt'>) {
    const now = new Date().toISOString();
    const newListing: ParkingListing = {
      ...listing,
      id: crypto.randomUUID(),
      reviewCount: 0,
      createdAt: now,
      updatedAt: now,
    };

    const response = await zerodb.insert<ParkingListing>(
      COLLECTIONS.LISTINGS,
      newListing
    );

    if (!response.success) {
      console.error('Error creating listing:', response.error);
      return null;
    }

    return response.data;
  }

  // Update a listing
  static async updateListing(id: string, updates: Partial<ParkingListing>) {
    const response = await zerodb.update<ParkingListing>(
      COLLECTIONS.LISTINGS,
      id,
      {
        ...updates,
        updatedAt: new Date().toISOString(),
      }
    );

    if (!response.success) {
      console.error('Error updating listing:', response.error);
      return null;
    }

    return response.data;
  }

  // Delete a listing
  static async deleteListing(id: string) {
    const response = await zerodb.delete(COLLECTIONS.LISTINGS, id);

    if (!response.success) {
      console.error('Error deleting listing:', response.error);
      return false;
    }

    return true;
  }

  // Get listings by host
  static async getListingsByHost(hostId: string) {
    return this.getListings({ hostId } as any);
  }

  // Search listings by location
  static async searchByLocation(city: string) {
    return this.getListings({ city });
  }
}
