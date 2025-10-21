// Booking Service - Database operations for parking bookings
import { zerodb } from '../zerodb';
import { COLLECTIONS } from '../collections';
import type { Booking, BookingFilters } from '../types';

export class BookingService {
  // Get all bookings with optional filters
  static async getBookings(filters?: BookingFilters) {
    const response = await zerodb.query<Booking>(
      COLLECTIONS.BOOKINGS,
      filters
    );

    if (!response.success) {
      console.error('Error fetching bookings:', response.error);
      return [];
    }

    return response.data || [];
  }

  // Get a single booking by ID
  static async getBookingById(id: string) {
    const response = await zerodb.get<Booking>(COLLECTIONS.BOOKINGS, id);

    if (!response.success) {
      console.error('Error fetching booking:', response.error);
      return null;
    }

    return response.data;
  }

  // Create a new booking
  static async createBooking(booking: Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>) {
    const now = new Date().toISOString();
    const newBooking: Booking = {
      ...booking,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    };

    const response = await zerodb.insert<Booking>(
      COLLECTIONS.BOOKINGS,
      newBooking
    );

    if (!response.success) {
      console.error('Error creating booking:', response.error);
      return null;
    }

    return response.data;
  }

  // Update a booking
  static async updateBooking(id: string, updates: Partial<Booking>) {
    const response = await zerodb.update<Booking>(
      COLLECTIONS.BOOKINGS,
      id,
      {
        ...updates,
        updatedAt: new Date().toISOString(),
      }
    );

    if (!response.success) {
      console.error('Error updating booking:', response.error);
      return null;
    }

    return response.data;
  }

  // Cancel a booking
  static async cancelBooking(id: string) {
    return this.updateBooking(id, { status: 'cancelled' });
  }

  // Get bookings for a driver
  static async getDriverBookings(driverId: string) {
    return this.getBookings({ driverId });
  }

  // Get bookings for a host
  static async getHostBookings(hostId: string) {
    return this.getBookings({ hostId });
  }

  // Get bookings for a listing
  static async getListingBookings(listingId: string) {
    return this.getBookings({ listingId });
  }

  // Get active bookings
  static async getActiveBookings() {
    return this.getBookings({ status: 'active' });
  }
}
