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
import { CheckCircle2, DollarSign, Shield, Clock, MapPin, Users, Loader2, Zap } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';

export default function BecomeAHostPage() {
  const [formData, setFormData] = useState({
    hostType: '',
    name: '',
    email: '',
    numberOfProperties: '',
    properties: [{
      address: '',
      spaces: '',
      type: '',
    }],
    hasEvCharging: '',
    openToSharingCharger: '',
    evChargingInterest: '',
    daysAvailable: [] as string[],
    hoursAvailable: [] as string[],
    bookingType: [] as string[],
    mainReason: '',
    incomeRange: '',
    hostingEasier: '',
    concerns: [] as string[],
    listedBefore: '',
    whatStopped: '',
    insuranceImportance: [3],
    guestRespectConfidence: [3],
    betaAccess: '',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 8;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/host-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Application submitted successfully! We\'ll be in touch within 24 hours.');
        // Reset form
        setFormData({
          hostType: '',
          name: '',
          email: '',
          numberOfProperties: '',
          properties: [{ address: '', spaces: '', type: '' }],
          hasEvCharging: '',
          openToSharingCharger: '',
          evChargingInterest: '',
          daysAvailable: [],
          hoursAvailable: [],
          bookingType: [],
          mainReason: '',
          incomeRange: '',
          hostingEasier: '',
          concerns: [],
          listedBefore: '',
          whatStopped: '',
          insuranceImportance: [3],
          guestRespectConfidence: [3],
          betaAccess: '',
        });
        setCurrentStep(1);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/30">
      <Navigation />

      {/* Hero Section - EV Charging/Parking */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1920&auto=format&fit=crop"
          alt="Electric vehicle charging at parking space"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <Zap className="h-5 w-5 text-yellow-300" />
            <span className="text-sm font-medium">Join 10,000+ Earning Hosts</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl animate-fade-in">
            Turn Your Space<br />Into Income
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-lg font-light">
            Join thousands of hosts earning money from unused parking spaces.<br />
            Perfect for driveways, garages, and EV charging spots.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-base md:text-lg">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <DollarSign className="h-6 w-6 text-green-300" />
              <span className="font-semibold">Earn up to $500/month</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <Shield className="h-6 w-6 text-blue-300" />
              <span className="font-semibold">$1M insurance included</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <Clock className="h-6 w-6 text-purple-300" />
              <span className="font-semibold">Set your own hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-foreground">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-muted-foreground font-medium">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full transition-all duration-500 ease-out shadow-lg"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Form Section */}
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Host Information */}
            {currentStep === 1 && (
              <Card className="border-2 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="space-y-2 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Host Information</CardTitle>
                      <CardDescription className="text-base">Tell us a bit about yourself</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Host Type *</Label>
                    <RadioGroup
                      value={formData.hostType}
                      onValueChange={(value) => updateFormData('hostType', value)}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      {[
                        { id: 'individual', label: 'Individual', desc: 'Personal property' },
                        { id: 'small-business', label: 'Small Business', desc: '2-10 spaces' },
                        { id: 'commercial', label: 'Commercial', desc: '10+ spaces' }
                      ].map((type) => (
                        <div key={type.id} className="relative">
                          <RadioGroupItem value={type.id} id={type.id} className="peer sr-only" />
                          <Label
                            htmlFor={type.id}
                            className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-card p-6 hover:bg-accent hover:border-primary cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all"
                          >
                            <span className="font-semibold text-lg mb-1">{type.label}</span>
                            <span className="text-xs text-muted-foreground">{type.desc}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => updateFormData('name', e.target.value)}
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Property Details */}
            {currentStep === 2 && (
              <Card className="border-2 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="space-y-2 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Property Details</CardTitle>
                      <CardDescription className="text-base">Information about your parking space(s)</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Number of Properties</Label>
                    <RadioGroup
                      value={formData.numberOfProperties}
                      onValueChange={(value) => updateFormData('numberOfProperties', value)}
                      className="grid grid-cols-3 gap-4"
                    >
                      {['1', '2-3', '4+'].map((num) => (
                        <div key={num} className="relative">
                          <RadioGroupItem value={num} id={`prop-${num}`} className="peer sr-only" />
                          <Label
                            htmlFor={`prop-${num}`}
                            className="flex items-center justify-center rounded-lg border-2 border-muted bg-card p-6 hover:bg-accent hover:border-primary cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all text-xl font-semibold"
                          >
                            {num}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-base">Address or ZIP/Postal Code</Label>
                    <Input
                      id="address"
                      placeholder="123 Main St or 94102"
                      value={formData.properties[0].address}
                      onChange={(e) => {
                        const newProps = [...formData.properties];
                        newProps[0].address = e.target.value;
                        updateFormData('properties', newProps);
                      }}
                      className="h-12"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="spaces" className="text-base">Number of Parking Spaces</Label>
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
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-base">Type of Parking Space</Label>
                      <Select
                        value={formData.properties[0].type}
                        onValueChange={(value) => {
                          const newProps = [...formData.properties];
                          newProps[0].type = value;
                          updateFormData('properties', newProps);
                        }}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="driveway">Driveway</SelectItem>
                          <SelectItem value="garage">Garage</SelectItem>
                          <SelectItem value="lot">Parking Lot</SelectItem>
                          <SelectItem value="covered">Covered</SelectItem>
                          <SelectItem value="ev-charging">EV Charging</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: EV Charging */}
            {currentStep === 3 && (
              <Card className="border-2 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="space-y-2 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">EV Charging</CardTitle>
                      <CardDescription className="text-base">Tell us about electric vehicle charging</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Do you have any EV charging equipment on-site?</Label>
                    <RadioGroup
                      value={formData.hasEvCharging}
                      onValueChange={(value) => updateFormData('hasEvCharging', value)}
                      className="grid grid-cols-2 gap-4"
                    >
                      {[
                        { id: 'yes', label: 'Yes', desc: 'I have EV charging' },
                        { id: 'no', label: 'No', desc: 'No charging available' }
                      ].map((option) => (
                        <div key={option.id} className="relative">
                          <RadioGroupItem value={option.id} id={`charging-${option.id}`} className="peer sr-only" />
                          <Label
                            htmlFor={`charging-${option.id}`}
                            className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-card p-6 hover:bg-accent hover:border-primary cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all"
                          >
                            <span className="font-semibold text-lg mb-1">{option.label}</span>
                            <span className="text-xs text-muted-foreground">{option.desc}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {formData.hasEvCharging === 'yes' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <Label className="text-base font-semibold">Are you open to allowing EV drivers to use your charger?</Label>
                      <RadioGroup
                        value={formData.openToSharingCharger}
                        onValueChange={(value) => updateFormData('openToSharingCharger', value)}
                        className="grid grid-cols-3 gap-4"
                      >
                        {[
                          { id: 'yes', label: 'Yes' },
                          { id: 'no', label: 'No' },
                          { id: 'maybe', label: 'Maybe' }
                        ].map((option) => (
                          <div key={option.id} className="relative">
                            <RadioGroupItem value={option.id} id={`sharing-${option.id}`} className="peer sr-only" />
                            <Label
                              htmlFor={`sharing-${option.id}`}
                              className="flex items-center justify-center rounded-lg border-2 border-muted bg-card p-4 hover:bg-accent hover:border-primary cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all font-semibold"
                            >
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  )}

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Interest Level in Adding EV Charging</Label>
                    <RadioGroup
                      value={formData.evChargingInterest}
                      onValueChange={(value) => updateFormData('evChargingInterest', value)}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      {[
                        { id: 'not-interested', label: 'Not Interested', desc: 'No plans for EV charging' },
                        { id: 'considering', label: 'Considering in the Future', desc: 'Might add later' },
                        { id: 'exploring', label: 'Actively Exploring', desc: 'Researching options' },
                        { id: 'already-have', label: 'Already Have Chargers', desc: 'Installed and ready' }
                      ].map((option) => (
                        <div key={option.id} className="relative">
                          <RadioGroupItem value={option.id} id={`interest-${option.id}`} className="peer sr-only" />
                          <Label
                            htmlFor={`interest-${option.id}`}
                            className="flex flex-col items-start rounded-lg border-2 border-muted bg-card p-4 hover:bg-accent hover:border-primary cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all"
                          >
                            <span className="font-semibold mb-1">{option.label}</span>
                            <span className="text-xs text-muted-foreground">{option.desc}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Availability */}
            {currentStep === 4 && (
              <Card className="border-2 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="space-y-2 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Availability</CardTitle>
                      <CardDescription className="text-base">When can guests use your space?</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Days Available</Label>
                    <div className="grid grid-cols-7 gap-3">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                        <div key={day} className="relative">
                          <Checkbox
                            id={day}
                            checked={formData.daysAvailable.includes(day)}
                            onCheckedChange={() => toggleArrayValue('daysAvailable', day)}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={day}
                            className="flex items-center justify-center rounded-lg border-2 border-muted bg-card p-4 hover:bg-accent hover:border-primary cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all font-semibold text-sm"
                          >
                            {day}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Hours Available</Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        { id: 'morning', label: 'Morning', time: '6–11 AM' },
                        { id: 'afternoon', label: 'Afternoon', time: '11 AM–4 PM' },
                        { id: 'evening', label: 'Evening', time: '4–10 PM' },
                        { id: 'overnight', label: 'Overnight', time: '10 PM–6 AM' },
                        { id: 'all-day', label: 'All Day', time: '24/7' },
                      ].map((time) => (
                        <div key={time.id} className="relative">
                          <Checkbox
                            id={time.id}
                            checked={formData.hoursAvailable.includes(time.id)}
                            onCheckedChange={() => toggleArrayValue('hoursAvailable', time.id)}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={time.id}
                            className="flex items-center justify-between rounded-lg border-2 border-muted bg-card px-4 py-3 hover:bg-accent hover:border-primary cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all"
                          >
                            <span className="font-semibold">{time.label}</span>
                            <span className="text-sm text-muted-foreground">{time.time}</span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Booking Type Preference</Label>
                    <div className="grid grid-cols-3 gap-4">
                      {['Hourly', 'Daily', 'Monthly'].map((type) => (
                        <div key={type} className="relative">
                          <Checkbox
                            id={type.toLowerCase()}
                            checked={formData.bookingType.includes(type.toLowerCase())}
                            onCheckedChange={() => toggleArrayValue('bookingType', type.toLowerCase())}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={type.toLowerCase()}
                            className="flex items-center justify-center rounded-lg border-2 border-muted bg-card p-4 hover:bg-accent hover:border-primary cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all font-semibold"
                          >
                            {type}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 5: Motivation & Goals */}
            {currentStep === 5 && (
              <Card className="border-2 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="space-y-2 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <DollarSign className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Motivation & Goals</CardTitle>
                      <CardDescription className="text-base">Help us understand your goals</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Main Reason for Listing</Label>
                    <RadioGroup
                      value={formData.mainReason}
                      onValueChange={(value) => updateFormData('mainReason', value)}
                      className="space-y-3"
                    >
                      {[
                        'Earn income',
                        'Help local drivers',
                        'Utilize unused space',
                        'Environmental impact',
                        'Other',
                      ].map((reason) => (
                        <div key={reason} className="relative">
                          <RadioGroupItem value={reason} id={reason} className="peer sr-only" />
                          <Label
                            htmlFor={reason}
                            className="flex items-center rounded-lg border-2 border-muted bg-card px-5 py-4 hover:bg-accent hover:border-primary cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all font-medium"
                          >
                            {reason}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Desired Monthly Income Range</Label>
                    <Select
                      value={formData.incomeRange}
                      onValueChange={(value) => updateFormData('incomeRange', value)}
                    >
                      <SelectTrigger className="h-12">
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

                  <div className="space-y-3">
                    <Label htmlFor="easier" className="text-base font-semibold">What would make hosting easier?</Label>
                    <Textarea
                      id="easier"
                      placeholder="Share your thoughts... (optional)"
                      value={formData.hostingEasier}
                      onChange={(e) => updateFormData('hostingEasier', e.target.value)}
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 6: Barriers & Concerns */}
            {currentStep === 6 && (
              <Card className="border-2 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="space-y-2 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Shield className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Barriers & Concerns</CardTitle>
                      <CardDescription className="text-base">Help us address your concerns</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Concerns About Listing (Select all that apply)</Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'Liability',
                        'Property damage',
                        'Non-payment',
                        'Time commitment',
                        'Other',
                      ].map((concern) => (
                        <div key={concern} className="relative">
                          <Checkbox
                            id={concern}
                            checked={formData.concerns.includes(concern)}
                            onCheckedChange={() => toggleArrayValue('concerns', concern)}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={concern}
                            className="flex items-center rounded-lg border-2 border-muted bg-card px-4 py-3 hover:bg-accent hover:border-primary cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all font-medium"
                          >
                            {concern}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Have You Listed Before?</Label>
                    <RadioGroup
                      value={formData.listedBefore}
                      onValueChange={(value) => updateFormData('listedBefore', value)}
                      className="grid grid-cols-2 gap-4"
                    >
                      {['yes', 'no'].map((answer) => (
                        <div key={answer} className="relative">
                          <RadioGroupItem value={answer} id={`listed-${answer}`} className="peer sr-only" />
                          <Label
                            htmlFor={`listed-${answer}`}
                            className="flex items-center justify-center rounded-lg border-2 border-muted bg-card p-4 hover:bg-accent hover:border-primary cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all font-semibold capitalize text-lg"
                          >
                            {answer}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {formData.listedBefore === 'no' && (
                    <div className="space-y-3 animate-fade-in">
                      <Label htmlFor="stopped" className="text-base font-semibold">What Stopped You?</Label>
                      <Textarea
                        id="stopped"
                        placeholder="Tell us what held you back..."
                        value={formData.whatStopped}
                        onChange={(e) => updateFormData('whatStopped', e.target.value)}
                        rows={4}
                        className="resize-none"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Step 7: Trust & Support */}
            {currentStep === 7 && (
              <Card className="border-2 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="space-y-2 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CheckCircle2 className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Trust & Support</CardTitle>
                      <CardDescription className="text-base">Rate the importance of these features</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-12">
                  <div className="space-y-6">
                    <Label className="text-base font-semibold">
                      Importance of Insurance and Guest Verification
                    </Label>
                    <div className="flex items-center gap-6">
                      <span className="text-sm text-muted-foreground whitespace-nowrap">Not Important</span>
                      <Slider
                        value={formData.insuranceImportance}
                        onValueChange={(value) => updateFormData('insuranceImportance', value)}
                        min={1}
                        max={5}
                        step={1}
                        className="flex-1"
                      />
                      <span className="text-sm text-muted-foreground whitespace-nowrap">Very Important</span>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <span className="text-4xl font-bold text-primary">
                        {formData.insuranceImportance[0]}/5
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Label className="text-base font-semibold">
                      Confidence Guests Will Respect Property
                    </Label>
                    <div className="flex items-center gap-6">
                      <span className="text-sm text-muted-foreground whitespace-nowrap">Low</span>
                      <Slider
                        value={formData.guestRespectConfidence}
                        onValueChange={(value) => updateFormData('guestRespectConfidence', value)}
                        min={1}
                        max={5}
                        step={1}
                        className="flex-1"
                      />
                      <span className="text-sm text-muted-foreground whitespace-nowrap">High</span>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <span className="text-4xl font-bold text-primary">
                        {formData.guestRespectConfidence[0]}/5
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 8: Follow-Up */}
            {currentStep === 8 && (
              <Card className="border-2 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="space-y-2 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CheckCircle2 className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Almost Done!</CardTitle>
                      <CardDescription className="text-base">One last question</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">
                      Would You Like to Be Contacted for Beta Tests or Early Access?
                    </Label>
                    <RadioGroup
                      value={formData.betaAccess}
                      onValueChange={(value) => updateFormData('betaAccess', value)}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <div className="relative">
                        <RadioGroupItem value="yes" id="beta-yes" className="peer sr-only" />
                        <Label
                          htmlFor="beta-yes"
                          className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-card p-6 hover:bg-accent hover:border-primary cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all"
                        >
                          <CheckCircle2 className="h-8 w-8 mb-2 text-primary" />
                          <span className="font-semibold text-lg">Yes, keep me updated!</span>
                          <span className="text-xs text-muted-foreground mt-1">Get early access & beta features</span>
                        </Label>
                      </div>
                      <div className="relative">
                        <RadioGroupItem value="no" id="beta-no" className="peer sr-only" />
                        <Label
                          htmlFor="beta-no"
                          className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-card p-6 hover:bg-accent hover:border-primary cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all"
                        >
                          <Clock className="h-8 w-8 mb-2 text-muted-foreground" />
                          <span className="font-semibold text-lg">No, thanks</span>
                          <span className="text-xs text-muted-foreground mt-1">Just the essentials please</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/20 rounded-xl p-8 space-y-4 shadow-lg">
                    <h3 className="font-bold text-2xl text-center mb-4">What Happens Next?</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary rounded-full">
                          <CheckCircle2 className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">We'll review your application within 24 hours</p>
                          <p className="text-sm text-muted-foreground">Our team carefully reviews each submission</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary rounded-full">
                          <CheckCircle2 className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">You'll receive an email with next steps</p>
                          <p className="text-sm text-muted-foreground">Check {formData.email || 'your inbox'} for updates</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary rounded-full">
                          <CheckCircle2 className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">Start earning within 48 hours!</p>
                          <p className="text-sm text-muted-foreground">List your space and welcome your first guest</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between gap-4 mt-10">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                size="lg"
                className="w-32"
              >
                Back
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  size="lg"
                  className="w-32"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  size="lg"
                  className="w-40"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
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
