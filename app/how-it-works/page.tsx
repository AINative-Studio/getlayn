import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { Car, Home, CreditCard, Shield } from 'lucide-react';
import Image from 'next/image';

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="relative h-[500px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2000&auto=format&fit=crop"
            alt="Modern parking garage"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl text-center text-white">
                <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  How ValetTech Works
                </h1>
                <p className="mt-6 text-lg text-white/90">
                  Simple, secure, and seamless parking for drivers and hosts
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center font-heading text-3xl font-bold">For Drivers</h2>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Car className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold">1. Search for Parking</h3>
                    <p className="mt-2 text-muted-foreground">
                      Enter your destination and browse available parking spaces in your area. Filter by price, amenities, and availability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold">2. Book & Pay</h3>
                    <p className="mt-2 text-muted-foreground">
                      Select your dates and times, then complete your booking securely. Get instant confirmation with parking details.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold">3. Park with Ease</h3>
                    <p className="mt-2 text-muted-foreground">
                      Arrive at your reserved space and park. Access instructions and host contact info in your booking confirmation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold">4. Enjoy Peace of Mind</h3>
                    <p className="mt-2 text-muted-foreground">
                      Park safely knowing your reservation is protected. Contact support anytime if you need assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center font-heading text-3xl font-bold">For Hosts</h2>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold">1. List Your Space</h3>
                    <p className="mt-2 text-muted-foreground">
                      Create a listing for your parking space. Add photos, description, pricing, and availability schedule.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold">2. Set Your Terms</h3>
                    <p className="mt-2 text-muted-foreground">
                      Control when your space is available, set your pricing, and establish any specific rules or requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Car className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold">3. Accept Bookings</h3>
                    <p className="mt-2 text-muted-foreground">
                      Review booking requests and accept the ones that work for you. Communicate with drivers through the platform.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold">4. Get Paid</h3>
                    <p className="mt-2 text-muted-foreground">
                      Receive automatic payments after each booking. Track your earnings and withdraw funds whenever you want.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
