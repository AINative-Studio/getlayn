import Link from 'next/link';
import { ParkingSquare, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ParkingSquare className="h-6 w-6 text-primary" />
              <span className="font-heading text-lg font-bold">Layn</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting drivers with private parking spaces in your neighborhood.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold">For Drivers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/search" className="text-muted-foreground hover:text-primary transition-colors">
                  Find Parking
                </Link>
              </li>
              <li>
                <Link href="/dashboard/driver/bookings" className="text-muted-foreground hover:text-primary transition-colors">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold">For Hosts</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/become-a-host" className="text-muted-foreground hover:text-primary transition-colors">
                  Become a Host
                </Link>
              </li>
              <li>
                <Link href="/dashboard/host" className="text-muted-foreground hover:text-primary transition-colors">
                  Host Dashboard
                </Link>
              </li>
              <li>
                <Link href="/earnings" className="text-muted-foreground hover:text-primary transition-colors">
                  Earnings Calculator
                </Link>
              </li>
              <li>
                <Link href="/host-guide" className="text-muted-foreground hover:text-primary transition-colors">
                  Host Guide
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@getlayn.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1-800-GETLAYN</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>&copy; 2025 Layn. All rights reserved.</p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
