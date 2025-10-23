'use client';

import { useState } from 'react';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, DollarSign, Shield, Clock, MapPin, Users } from 'lucide-react';
import Image from 'next/image';

export default function BecomeAHostPage() {
  const [formData, setFormData] = useState({
    // Host Information
    hostType: '',
    name: '',
    email: '',

    // Property Details
    numberOfProperties: '',
    properties: [{
      address: '',
      spaces: '',
      type: '',
    }],

    // Availability
    daysAvailable: [] as string[],
    hoursAvailable: [] as string[],
    bookingType: [] as string[],

    // Motivation & Goals
    mainReason: '',
    incomeRange: '',
    hostingEasier: '',

    // Barriers & Concerns
    concerns: [] as string[],
    listedBefore: '',
    whatStopped: '',

    // Trust & Support
    insuranceImportance: [3],
    guestRespectConfidence: [3],

    // Follow-up
    betaAccess: '',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Send to API
    alert('Thank you for your interest! We\'ll be in touch soon.');
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const toggleArrayValue = (field: string, value: string) => {
    const current = formData[field as keyof typeof formData] as string[];
    if (current.includes(value)) {
      updateFormData(field, current.filter(v => v !== value));
    } else {
      updateFormData(field, [...current, value]);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1920&auto=format&fit=crop"
          alt="Beautiful modern home with driveway"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Turn Your Space Into Income
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Join thousands of hosts earning money from their unused parking spaces
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              <span>Earn up to $500/month</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>$1M insurance included</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Set your own hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-muted-foreground">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Form Section */}
      <main className="flex-1 bg-muted/30 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Host Information */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    Host Information
                  </CardTitle>
                  <CardDescription>
                    Tell us a bit about yourself
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Host Type *</Label>
                    <RadioGroup
                      value={formData.hostType}
                      onValueChange={(value) => updateFormData('hostType', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="individual" id="individual" />
                        <Label htmlFor="individual" className="font-normal cursor-pointer">
                          Individual
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="small-business" id="small-business" />
                        <Label htmlFor="small-business" className="font-normal cursor-pointer">
                          Small Business
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="commercial" id="commercial" />
                        <Label htmlFor="commercial" className="font-normal cursor-pointer">
                          Commercial Operator
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Property Details */}
            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    Property Details
                  </CardTitle>
                  <CardDescription>
                    Information about your parking space(s)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Number of Properties</Label>
                    <RadioGroup
                      value={formData.numberOfProperties}
                      onValueChange={(value) => updateFormData('numberOfProperties', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1" id="prop-1" />
                        <Label htmlFor="prop-1" className="font-normal cursor-pointer">1</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2-3" id="prop-2-3" />
                        <Label htmlFor="prop-2-3" className="font-normal cursor-pointer">2–3</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="4+" id="prop-4" />
                        <Label htmlFor="prop-4" className="font-normal cursor-pointer">4+</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address or ZIP/Postal Code</Label>
                    <Input
                      id="address"
                      placeholder="123 Main St or 94102"
                      value={formData.properties[0].address}
                      onChange={(e) => {
                        const newProps = [...formData.properties];
                        newProps[0].address = e.target.value;
                        updateFormData('properties', newProps);
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="spaces">Number of Parking Spaces Available</Label>
                    <Input
                      id="spaces"
                      type="number"
                      min="1"
                      placeholder="1"
                      value={formData.properties[0].spaces}
                      onChange={(e) => {
                        const newProps = [...formData.properties];
                        newProps[0].spaces = e.target.value;
                        updateFormData('properties', newProps);
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Type of Parking Space</Label>
                    <Select
                      value={formData.properties[0].type}
                      onValueChange={(value) => {
                        const newProps = [...formData.properties];
                        newProps[0].type = value;
                        updateFormData('properties', newProps);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="driveway">Driveway</SelectItem>
                        <SelectItem value="garage">Garage</SelectItem>
                        <SelectItem value="lot">Lot</SelectItem>
                        <SelectItem value="covered">Covered</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Availability */}
            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-primary" />
                    Availability
                  </CardTitle>
                  <CardDescription>
                    When can guests use your space?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label>Days Available</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                        <div key={day} className="flex items-center space-x-2">
                          <Checkbox
                            id={day}
                            checked={formData.daysAvailable.includes(day)}
                            onCheckedChange={() => toggleArrayValue('daysAvailable', day)}
                          />
                          <Label htmlFor={day} className="font-normal cursor-pointer">
                            {day}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Hours Available</Label>
                    <div className="space-y-2">
                      {[
                        { id: 'morning', label: 'Morning (6–11 AM)' },
                        { id: 'afternoon', label: 'Afternoon (11 AM–4 PM)' },
                        { id: 'evening', label: 'Evening (4–10 PM)' },
                        { id: 'overnight', label: 'Overnight (10 PM–6 AM)' },
                        { id: 'all-day', label: 'All Day' },
                      ].map((time) => (
                        <div key={time.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={time.id}
                            checked={formData.hoursAvailable.includes(time.id)}
                            onCheckedChange={() => toggleArrayValue('hoursAvailable', time.id)}
                          />
                          <Label htmlFor={time.id} className="font-normal cursor-pointer">
                            {time.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Booking Type Preference</Label>
                    <div className="space-y-2">
                      {['hourly', 'daily', 'monthly'].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox
                            id={type}
                            checked={formData.bookingType.includes(type)}
                            onCheckedChange={() => toggleArrayValue('bookingType', type)}
                          />
                          <Label htmlFor={type} className="font-normal cursor-pointer capitalize">
                            {type}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Motivation & Goals */}
            {currentStep === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-primary" />
                    Motivation & Goals
                  </CardTitle>
                  <CardDescription>
                    Help us understand your goals
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Main Reason for Listing</Label>
                    <RadioGroup
                      value={formData.mainReason}
                      onValueChange={(value) => updateFormData('mainReason', value)}
                    >
                      {[
                        'Earn income',
                        'Help local drivers',
                        'Utilize unused space',
                        'Environmental impact',
                        'Other',
                      ].map((reason) => (
                        <div key={reason} className="flex items-center space-x-2">
                          <RadioGroupItem value={reason} id={reason} />
                          <Label htmlFor={reason} className="font-normal cursor-pointer">
                            {reason}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label>Desired Monthly Income Range</Label>
                    <Select
                      value={formData.incomeRange}
                      onValueChange={(value) => updateFormData('incomeRange', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<50">Less than $50</SelectItem>
                        <SelectItem value="50-200">$50 – $200</SelectItem>
                        <SelectItem value="200-500">$200 – $500</SelectItem>
                        <SelectItem value="500+">$500+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="easier">What would make hosting easier?</Label>
                    <Textarea
                      id="easier"
                      placeholder="Share your thoughts..."
                      value={formData.hostingEasier}
                      onChange={(e) => updateFormData('hostingEasier', e.target.value)}
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 5: Barriers & Concerns */}
            {currentStep === 5 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    Barriers & Concerns
                  </CardTitle>
                  <CardDescription>
                    Help us address your concerns
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label>Concerns About Listing</Label>
                    <div className="space-y-2">
                      {[
                        'Liability',
                        'Property damage',
                        'Non-payment',
                        'Time commitment',
                        'Other',
                      ].map((concern) => (
                        <div key={concern} className="flex items-center space-x-2">
                          <Checkbox
                            id={concern}
                            checked={formData.concerns.includes(concern)}
                            onCheckedChange={() => toggleArrayValue('concerns', concern)}
                          />
                          <Label htmlFor={concern} className="font-normal cursor-pointer">
                            {concern}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Have You Listed Before?</Label>
                    <RadioGroup
                      value={formData.listedBefore}
                      onValueChange={(value) => updateFormData('listedBefore', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="listed-yes" />
                        <Label htmlFor="listed-yes" className="font-normal cursor-pointer">
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="listed-no" />
                        <Label htmlFor="listed-no" className="font-normal cursor-pointer">
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.listedBefore === 'no' && (
                    <div className="space-y-2">
                      <Label htmlFor="stopped">What Stopped You?</Label>
                      <Textarea
                        id="stopped"
                        placeholder="Tell us what held you back..."
                        value={formData.whatStopped}
                        onChange={(e) => updateFormData('whatStopped', e.target.value)}
                        rows={4}
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Step 6: Trust & Support */}
            {currentStep === 6 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    Trust & Support
                  </CardTitle>
                  <CardDescription>
                    Rate the importance of these features
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <Label>
                      Importance of Insurance and Guest Verification
                    </Label>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">Not Important</span>
                      <Slider
                        value={formData.insuranceImportance}
                        onValueChange={(value) => updateFormData('insuranceImportance', value)}
                        min={1}
                        max={5}
                        step={1}
                        className="flex-1"
                      />
                      <span className="text-sm text-muted-foreground">Very Important</span>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary">
                        {formData.insuranceImportance[0]}/5
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>
                      Confidence Guests Will Respect Property
                    </Label>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">Low</span>
                      <Slider
                        value={formData.guestRespectConfidence}
                        onValueChange={(value) => updateFormData('guestRespectConfidence', value)}
                        min={1}
                        max={5}
                        step={1}
                        className="flex-1"
                      />
                      <span className="text-sm text-muted-foreground">High</span>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary">
                        {formData.guestRespectConfidence[0]}/5
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 7: Follow-Up */}
            {currentStep === 7 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    Almost Done!
                  </CardTitle>
                  <CardDescription>
                    One last question
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>
                      Would You Like to Be Contacted for Beta Tests or Early Access?
                    </Label>
                    <RadioGroup
                      value={formData.betaAccess}
                      onValueChange={(value) => updateFormData('betaAccess', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="beta-yes" />
                        <Label htmlFor="beta-yes" className="font-normal cursor-pointer">
                          Yes, keep me updated!
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="beta-no" />
                        <Label htmlFor="beta-no" className="font-normal cursor-pointer">
                          No, thanks
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 space-y-3">
                    <h3 className="font-semibold text-lg">What Happens Next?</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                        <span>We'll review your application within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                        <span>You'll receive an email with next steps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                        <span>Start earning within 48 hours!</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between gap-4 mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="w-32"
              >
                Back
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="w-32"
                >
                  Next
                </Button>
              ) : (
                <Button type="submit" className="w-32">
                  Submit
                </Button>
              )}
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
