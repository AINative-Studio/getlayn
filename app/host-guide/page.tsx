import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, MapPin, DollarSign, MessageSquare, Star, Shield, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HostGuidePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="relative h-[500px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2000&auto=format&fit=crop"
            alt="Host welcoming guest"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl text-center text-white">
                <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Host Guide
                </h1>
                <p className="mt-6 text-lg text-white/90">
                  Everything you need to know to become a successful parking space host
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-12 text-center font-heading text-3xl font-bold">
                Getting Started
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Camera className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Great Photos</CardTitle>
                    <CardDescription>
                      Take clear, well-lit photos of your parking space from multiple angles
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Show the entire parking area</li>
                      <li>• Include access points and entry</li>
                      <li>• Capture in good lighting</li>
                      <li>• Highlight any special features</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Accurate Location</CardTitle>
                    <CardDescription>
                      Provide precise location details and clear access instructions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Enter exact address</li>
                      <li>• Include gate codes if needed</li>
                      <li>• Describe landmarks nearby</li>
                      <li>• Note any parking restrictions</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <DollarSign className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Competitive Pricing</CardTitle>
                    <CardDescription>
                      Set fair prices based on your location and parking type
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Research local rates</li>
                      <li>• Consider your amenities</li>
                      <li>• Adjust for peak times</li>
                      <li>• Offer discounts for long-term</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-12 text-center font-heading text-3xl font-bold">
                Best Practices
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      Communication
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-semibold">Quick Responses</h4>
                        <p className="text-sm text-muted-foreground">
                          Reply to booking requests and messages within 24 hours. Fast responses lead to more bookings and higher ratings.
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold">Clear Instructions</h4>
                        <p className="text-sm text-muted-foreground">
                          Provide detailed access instructions, including gate codes, parking spot numbers, and any special requirements.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-primary" />
                      Maintain Quality
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-semibold">Keep It Clean</h4>
                        <p className="text-sm text-muted-foreground">
                          Ensure your parking space is clean, well-maintained, and free of debris. First impressions matter.
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold">Regular Updates</h4>
                        <p className="text-sm text-muted-foreground">
                          Keep your listing photos and availability calendar up to date. Remove obstacles that may appear.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Safety & Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-semibold">Secure Access</h4>
                        <p className="text-sm text-muted-foreground">
                          Only share access codes or keys through the platform. Change codes regularly if using keypad entry.
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold">Verify Bookings</h4>
                        <p className="text-sm text-muted-foreground">
                          Check booking confirmations before granting access. Report any suspicious activity immediately.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Calendar Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-semibold">Update Regularly</h4>
                        <p className="text-sm text-muted-foreground">
                          Keep your availability calendar current. Block dates when you need the space for personal use.
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold">Set Clear Hours</h4>
                        <p className="text-sm text-muted-foreground">
                          Specify check-in and check-out times clearly. Be flexible when possible to accommodate driver schedules.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    Success Checklist
                  </CardTitle>
                  <CardDescription>
                    Follow these steps to maximize your hosting success
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Complete your profile with accurate information and a professional photo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Upload high-quality photos showing your parking space clearly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Set competitive pricing based on local market rates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Write detailed descriptions including all amenities and restrictions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Respond to inquiries within 24 hours to increase booking chances</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Keep your calendar updated to avoid double bookings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Maintain a clean and accessible parking space at all times</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Collect positive reviews by providing excellent service</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="mt-12 text-center">
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="pt-8 pb-8">
                    <h3 className="mb-3 font-heading text-2xl font-bold">
                      Ready to Become a Host?
                    </h3>
                    <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
                      Now that you know what it takes, start your hosting journey today. Our simple application takes just a few minutes to complete.
                    </p>
                    <Button asChild size="lg" className="text-lg">
                      <Link href="/become-a-host">
                        Start Your Application
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
