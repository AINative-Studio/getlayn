'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navigation } from '@/components/layout/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NewListingPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    spaceType: '',
    pricePerHour: '',
    description: '',
    features: {
      covered: false,
      security: false,
      ev_charging: false,
      accessible: false,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    router.push('/dashboard/host');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1 bg-muted/30">
        <div className="border-b bg-card">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/host">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
            </div>
            <div className="mt-4">
              <h1 className="font-heading text-3xl font-bold">Add New Parking Space</h1>
              <p className="text-muted-foreground mt-1">
                List your parking space and start earning
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>
                    Provide details about your parking space
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Listing Title</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Spacious Driveway - Downtown"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="spaceType">Space Type</Label>
                    <Select
                      value={formData.spaceType}
                      onValueChange={(value) => setFormData({ ...formData, spaceType: value })}
                    >
                      <SelectTrigger id="spaceType">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="driveway">Driveway</SelectItem>
                        <SelectItem value="garage">Garage</SelectItem>
                        <SelectItem value="lot">Parking Lot</SelectItem>
                        <SelectItem value="street">Street Parking</SelectItem>
                        <SelectItem value="carport">Carport</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your parking space, access instructions, and any important details..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                  <CardDescription>
                    Where is your parking space located?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      placeholder="123 Main Street"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        placeholder="San Francisco"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        placeholder="CA"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="zipCode">Zip Code</Label>
                      <Input
                        id="zipCode"
                        placeholder="94102"
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pricing</CardTitle>
                  <CardDescription>
                    Set your hourly rate
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="pricePerHour">Price per Hour ($)</Label>
                    <Input
                      id="pricePerHour"
                      type="number"
                      min="1"
                      step="0.01"
                      placeholder="10.00"
                      value={formData.pricePerHour}
                      onChange={(e) => setFormData({ ...formData, pricePerHour: e.target.value })}
                      required
                    />
                    <p className="text-sm text-muted-foreground">
                      Average rates in your area: $8-$15 per hour
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Features & Amenities</CardTitle>
                  <CardDescription>
                    What features does your space offer?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="covered"
                      checked={formData.features.covered}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          features: { ...formData.features, covered: checked as boolean },
                        })
                      }
                    />
                    <Label htmlFor="covered" className="font-normal cursor-pointer">
                      Covered/Indoor parking
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="security"
                      checked={formData.features.security}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          features: { ...formData.features, security: checked as boolean },
                        })
                      }
                    />
                    <Label htmlFor="security" className="font-normal cursor-pointer">
                      Security camera/gated access
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ev_charging"
                      checked={formData.features.ev_charging}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          features: { ...formData.features, ev_charging: checked as boolean },
                        })
                      }
                    />
                    <Label htmlFor="ev_charging" className="font-normal cursor-pointer">
                      EV charging available
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="accessible"
                      checked={formData.features.accessible}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          features: { ...formData.features, accessible: checked as boolean },
                        })
                      }
                    />
                    <Label htmlFor="accessible" className="font-normal cursor-pointer">
                      Wheelchair accessible
                    </Label>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button type="submit" size="lg" className="flex-1">
                  Publish Listing
                </Button>
                <Button type="button" variant="outline" size="lg" asChild>
                  <Link href="/dashboard/host">Cancel</Link>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
