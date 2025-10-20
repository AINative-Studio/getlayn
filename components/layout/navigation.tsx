'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ParkingSquare, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-accent">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <ParkingSquare className="h-8 w-8 text-primary" />
          <span className="font-heading text-xl font-bold text-accent-foreground">
            ValetTech
          </span>
        </Link>

        <div className="hidden items-center space-x-6 md:flex">
          <Link
            href="/search"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/search') ? 'text-primary' : 'text-accent-foreground'
            }`}
          >
            Find Parking
          </Link>
          <Link
            href="/dashboard/host"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/dashboard/host') ? 'text-primary' : 'text-accent-foreground'
            }`}
          >
            List Your Space
          </Link>
          <Link
            href="/auth/login"
            className="text-sm font-medium text-accent-foreground transition-colors hover:text-primary"
          >
            Sign In
          </Link>
          <Button asChild size="sm">
            <Link href="/auth/register">Get Started</Link>
          </Button>
        </div>

        <button
          className="md:hidden text-accent-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-accent md:hidden">
          <div className="container mx-auto flex flex-col space-y-4 px-4 py-6">
            <Link
              href="/search"
              className="text-sm font-medium text-accent-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Parking
            </Link>
            <Link
              href="/dashboard/host"
              className="text-sm font-medium text-accent-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              List Your Space
            </Link>
            <Link
              href="/auth/login"
              className="text-sm font-medium text-accent-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Button asChild size="sm" className="w-full">
              <Link href="/auth/register">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
