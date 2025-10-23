'use client';

import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { DollarSign, TrendingUp, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function EarningsCalculatorPage() {
  const [pricePerDay, setPricePerDay] = useState(15);
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [occupancyRate, setOccupancyRate] = useState(80);

  const weeklyEarnings = (pricePerDay * daysPerWeek * occupancyRate) / 100;
  const monthlyEarnings = weeklyEarnings * 4.33;
  const yearlyEarnings = monthlyEarnings * 12;

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-transparent py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Earnings Calculator
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                See how much you could earn by renting out your parking space
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Parking Space</CardTitle>
                    <CardDescription>
                      Adjust the values below to estimate your potential earnings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="price">Daily Rate ($)</Label>
                      <Input
                        id="price"
                        type="number"
                        min="1"
                        value={pricePerDay}
                        onChange={(e) => setPricePerDay(Number(e.target.value))}
                      />
                      <p className="text-sm text-muted-foreground">
                        Average rates in your area: $10-$30 per day
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="days">Available Days Per Week</Label>
                      <Select value={daysPerWeek.toString()} onValueChange={(v) => setDaysPerWeek(Number(v))}>
                        <SelectTrigger id="days">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 day</SelectItem>
                          <SelectItem value="2">2 days</SelectItem>
                          <SelectItem value="3">3 days</SelectItem>
                          <SelectItem value="4">4 days</SelectItem>
                          <SelectItem value="5">5 days (Weekdays)</SelectItem>
                          <SelectItem value="6">6 days</SelectItem>
                          <SelectItem value="7">7 days (Every day)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="occupancy">Expected Occupancy Rate (%)</Label>
                      <Input
                        id="occupancy"
                        type="number"
                        min="0"
                        max="100"
                        value={occupancyRate}
                        onChange={(e) => setPricePerDay(Number(e.target.value))}
                      />
                      <p className="text-sm text-muted-foreground">
                        Most hosts achieve 70-90% occupancy
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        Estimated Earnings
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Weekly</span>
                        </div>
                        <span className="font-heading text-2xl font-bold">
                          ${weeklyEarnings.toFixed(2)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Monthly</span>
                        </div>
                        <span className="font-heading text-2xl font-bold">
                          ${monthlyEarnings.toFixed(2)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <TrendingUp className="h-4 w-4" />
                          <span>Yearly</span>
                        </div>
                        <span className="font-heading text-3xl font-bold text-primary">
                          ${yearlyEarnings.toFixed(2)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5">
                    <CardContent className="pt-6">
                      <h3 className="mb-4 font-heading text-lg font-semibold">
                        Tips to Maximize Your Earnings
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Add clear photos of your parking space</li>
                        <li>• Provide detailed access instructions</li>
                        <li>• Respond quickly to booking requests</li>
                        <li>• Maintain a high rating from renters</li>
                        <li>• Offer competitive pricing for your area</li>
                        <li>• Keep your calendar up to date</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="pt-8 pb-8">
                    <h3 className="mb-3 font-heading text-2xl font-bold">
                      Ready to Start Earning?
                    </h3>
                    <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
                      Join thousands of hosts who are earning passive income by sharing their parking spaces. Apply now and start your hosting journey today.
                    </p>
                    <Button asChild size="lg" className="text-lg">
                      <Link href="/become-a-host">
                        Apply to Become a Host
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
