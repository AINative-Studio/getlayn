// API Route Example: Listings
// GET /api/listings - Get all listings with optional filters
// POST /api/listings - Create a new listing

import { NextRequest, NextResponse } from 'next/server';
import { ListingService } from '@/lib/db';
import type { ParkingListing } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    // Build filters from query params
    const filters: any = {};

    if (searchParams.get('type')) {
      filters.type = searchParams.get('type');
    }

    if (searchParams.get('city')) {
      filters.city = searchParams.get('city');
    }

    if (searchParams.get('minPrice')) {
      filters.minPrice = parseFloat(searchParams.get('minPrice')!);
    }

    if (searchParams.get('maxPrice')) {
      filters.maxPrice = parseFloat(searchParams.get('maxPrice')!);
    }

    const listings = await ListingService.getListings(filters);

    return NextResponse.json({
      success: true,
      data: listings,
      count: listings.length,
    });
  } catch (error) {
    console.error('Error fetching listings:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch listings',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      'hostId',
      'title',
      'description',
      'address',
      'city',
      'state',
      'zipCode',
      'lat',
      'lng',
      'type',
      'price',
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          {
            success: false,
            error: `Missing required field: ${field}`,
          },
          { status: 400 }
        );
      }
    }

    const listing = await ListingService.createListing(body);

    if (!listing) {
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to create listing',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: listing,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating listing:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create listing',
      },
      { status: 500 }
    );
  }
}
