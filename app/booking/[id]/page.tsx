'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  ArrowLeft,
  Calendar as CalendarIcon,
  Clock,
  CreditCard,
  CheckCircle2,
  QrCode,
} from 'lucide-react';
import { toast } from 'sonner';

const mockListing = {
  id: '1',
  title: 'Spacious Driveway - Downtown',
  address: '123 Main St, San Francisco, CA 94102',
  price: 8,
};

type BookingStep = 'details' | 'payment' | 'confirmation';

export default function BookingPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [step, setStep] = useState<BookingStep>('details');
  const [date, setDate] = useState<Date>();
  const [startTime, setStartTime] = useState('');
  const [duration, setDuration] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const progress = step === 'details' ? 33 : step === 'payment' ? 66 : 100;

  const calculateTotal = () => {
    if (!duration) return 0;
    const hours = parseInt(duration);
    return mockListing.price * hours;
  };

  const handleContinue = () => {
    if (step === 'details') {
      if (!date || !startTime || !duration) {
        toast.error('Please fill in all booking details');
        return;
      }
      setStep('payment');
    } else if (step === 'payment') {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setStep('confirmation');
        toast.success('Booking confirmed!');
      }, 2000);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 'details':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">Booking Details</h2>
              <p className="text-muted-foreground">
                Select your parking date, time, and duration
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Select Date</Label>
                <Select value={date?.toISOString()} onValueChange={(val) => setDate(new Date(val))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pick a date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={new Date(2025, 9, 22).toISOString()}>October 22, 2025</SelectItem>
                    <SelectItem value={new Date(2025, 9, 23).toISOString()}>October 23, 2025</SelectItem>
                    <SelectItem value={new Date(2025, 9, 24).toISOString()}>October 24, 2025</SelectItem>
                    <SelectItem value={new Date(2025, 9, 25).toISOString()}>October 25, 2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Start Time</Label>
                <Select value={startTime} onValueChange={setStartTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 24 }, (_, i) => {
                      const hour = i.toString().padStart(2, '0');
                      return (
                        <SelectItem key={i} value={`${hour}:00`}>
                          {hour}:00
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Duration</Label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12, 24].map((hours) => (
                      <SelectItem key={hours} value={hours.toString()}>
                        {hours} {hours === 1 ? 'hour' : 'hours'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">Payment Information</h2>
              <p className="text-muted-foreground">
                Enter your payment details to complete the booking
              </p>
            </div>

            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <CreditCard className="h-5 w-5" />
                  <span>Secure payment processing</span>
                </div>
                <p className="text-center text-sm mt-2 text-muted-foreground">
                  Payment details UI would be integrated here
                </p>
              </CardContent>
            </Card>
          </div>
        );

      case 'confirmation':
        return (
          <div className="space-y-6 text-center">
            <div className="flex justify-center">
              <div className="rounded-full bg-green-100 p-6">
                <CheckCircle2 className="h-16 w-16 text-green-600" />
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold mb-2">Booking Confirmed!</h2>
              <p className="text-muted-foreground">
                Your parking space has been reserved successfully
              </p>
            </div>

            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-white p-6 rounded-lg">
                    <QrCode className="h-32 w-32 text-primary" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Show this QR code when you arrive at the parking location
                </p>
              </CardContent>
            </Card>

            <div className="space-y-2 text-left">
              <p className="text-sm">
                <span className="font-semibold">Confirmation:</span> #BK{Date.now().toString().slice(-6)}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Date:</span> {date?.toLocaleDateString()}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Time:</span> {startTime}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Duration:</span> {duration} hours
              </p>
            </div>

            <Button asChild className="w-full">
              <Link href="/dashboard/driver/bookings">View My Bookings</Link>
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {step !== 'confirmation' && (
            <Button variant="ghost" asChild className="mb-4">
              <Link href={`/listing/${params.id}`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to listing
              </Link>
            </Button>
          )}

          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span className={step === 'details' ? 'font-bold text-primary' : ''}>Details</span>
              <span className={step === 'payment' ? 'font-bold text-primary' : ''}>Payment</span>
              <span className={step === 'confirmation' ? 'font-bold text-primary' : ''}>Confirmation</span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="pt-6">{renderStep()}</CardContent>
              </Card>

              {step !== 'confirmation' && (
                <div className="mt-6 flex gap-4">
                  {step === 'payment' && (
                    <Button variant="outline" onClick={() => setStep('details')}>
                      Back
                    </Button>
                  )}
                  <Button
                    className="flex-1"
                    onClick={handleContinue}
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : step === 'payment' ? 'Confirm Booking' : 'Continue'}
                  </Button>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-heading font-bold mb-4">Booking Summary</h3>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="font-semibold text-sm">{mockListing.title}</p>
                      <p className="text-sm text-muted-foreground">{mockListing.address}</p>
                    </div>

                    {date && (
                      <div className="flex items-center gap-2 text-sm">
                        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                        <span>{date.toLocaleDateString()}</span>
                      </div>
                    )}

                    {startTime && (
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{startTime} {duration && `(${duration}h)`}</span>
                      </div>
                    )}
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Hourly rate</span>
                      <span>${mockListing.price}/hr</span>
                    </div>
                    {duration && (
                      <div className="flex justify-between text-sm">
                        <span>Duration</span>
                        <span>{duration} hours</span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${calculateTotal()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
