import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';
import {
  ParkingSquare,
  DollarSign,
  Shield,
  Clock,
  MapPin,
  Smartphone,
  TrendingUp,
  Users,
  CheckCircle2
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2000&auto=format&fit=crop"
            alt="Parking spaces"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="mb-6 font-heading text-4xl font-bold text-white md:text-6xl drop-shadow-lg animate-fade-in">
                  Turn Empty Driveways & Lots into Easy Income
                </h1>
                <p className="mb-8 text-lg text-white/95 md:text-xl drop-shadow-md">
                  Connect with drivers looking for convenient parking. List your space today and start earning effortlessly.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button asChild size="lg" className="text-lg shadow-lg">
                    <Link href="/dashboard/host">List Your Space</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black shadow-lg">
                    <Link href="/search">Find Parking Nearby</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground">
                Three simple steps to start earning or find parking
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-bold">1. List Your Space</h3>
                  <p className="text-muted-foreground">
                    Add your driveway, garage, or parking lot with photos and availability details.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-bold">2. Connect with Drivers</h3>
                  <p className="text-muted-foreground">
                    Drivers discover your space and book directly through our platform.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-bold">3. Earn Effortlessly</h3>
                  <p className="text-muted-foreground">
                    Get paid automatically with secure transactions and track your earnings in real-time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
                Why Choose Layn?
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold">Secure & Trusted</h3>
                <p className="text-muted-foreground">
                  Verified users and secure payment processing for peace of mind.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <Clock className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold">Flexible Scheduling</h3>
                <p className="text-muted-foreground">
                  Set your own availability and pricing that works for you.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <Smartphone className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold">Easy to Use</h3>
                <p className="text-muted-foreground">
                  Intuitive interface with QR codes for seamless check-in and checkout.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold">Maximize Earnings</h3>
                <p className="text-muted-foreground">
                  Turn unused space into a reliable source of passive income.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <ParkingSquare className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold">Local Community</h3>
                <p className="text-muted-foreground">
                  Help neighbors find convenient parking while earning extra income.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold">No Commitment</h3>
                <p className="text-muted-foreground">
                  List for free with no monthly fees or long-term contracts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Join thousands of homeowners, apartment managers, and business owners earning with Layn.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="text-lg">
                  <Link href="/auth/register">Create Free Account</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/search">Browse Parking Spaces</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
