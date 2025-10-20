import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="relative h-[500px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2000&auto=format&fit=crop"
            alt="Privacy and security concept"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl text-center text-white">
                <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Privacy Policy
                </h1>
                <p className="mt-6 text-lg text-white/90">
                  Last updated: October 20, 2025
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <Card>
                <CardContent className="prose prose-slate max-w-none pt-6 dark:prose-invert">
                  <h2>1. Introduction</h2>
                  <p>
                    Welcome to ValetTech. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our platform and tell you about your privacy rights.
                  </p>

                  <h2>2. Information We Collect</h2>
                  <p>We collect and process the following types of information:</p>
                  <ul>
                    <li>
                      <strong>Account Information:</strong> Name, email address, phone number, and password when you register
                    </li>
                    <li>
                      <strong>Profile Information:</strong> Profile photos, vehicle information, and payment details
                    </li>
                    <li>
                      <strong>Booking Information:</strong> Parking location, dates, times, and transaction history
                    </li>
                    <li>
                      <strong>Communication Data:</strong> Messages between drivers and hosts through our platform
                    </li>
                    <li>
                      <strong>Technical Data:</strong> IP address, browser type, device information, and usage data
                    </li>
                  </ul>

                  <h2>3. How We Use Your Information</h2>
                  <p>We use your personal data for the following purposes:</p>
                  <ul>
                    <li>To provide and maintain our parking marketplace service</li>
                    <li>To process bookings and payments</li>
                    <li>To facilitate communication between drivers and hosts</li>
                    <li>To send you important service updates and notifications</li>
                    <li>To improve our platform and user experience</li>
                    <li>To prevent fraud and ensure platform security</li>
                    <li>To comply with legal obligations</li>
                  </ul>

                  <h2>4. Data Sharing and Disclosure</h2>
                  <p>We may share your information with:</p>
                  <ul>
                    <li>
                      <strong>Other Users:</strong> Drivers and hosts see relevant information needed to complete bookings
                    </li>
                    <li>
                      <strong>Service Providers:</strong> Third-party companies that help us operate our platform (payment processors, hosting services)
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
                    </li>
                  </ul>
                  <p>
                    We do not sell your personal data to third parties.
                  </p>

                  <h2>5. Data Security</h2>
                  <p>
                    We implement appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                  </p>

                  <h2>6. Data Retention</h2>
                  <p>
                    We retain your personal data only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law. When you delete your account, we will delete or anonymize your personal data.
                  </p>

                  <h2>7. Your Privacy Rights</h2>
                  <p>You have the right to:</p>
                  <ul>
                    <li>Access your personal data</li>
                    <li>Correct inaccurate or incomplete data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to processing of your data</li>
                    <li>Export your data in a portable format</li>
                    <li>Withdraw consent at any time</li>
                  </ul>

                  <h2>8. Cookies and Tracking</h2>
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience, analyze platform usage, and serve personalized content. You can control cookie preferences through your browser settings.
                  </p>

                  <h2>9. Third-Party Links</h2>
                  <p>
                    Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.
                  </p>

                  <h2>10. Children's Privacy</h2>
                  <p>
                    Our service is not intended for individuals under 18 years of age. We do not knowingly collect personal data from children.
                  </p>

                  <h2>11. International Data Transfers</h2>
                  <p>
                    Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy.
                  </p>

                  <h2>12. Changes to This Policy</h2>
                  <p>
                    We may update this privacy policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last updated" date.
                  </p>

                  <h2>13. Contact Us</h2>
                  <p>
                    If you have questions about this privacy policy or how we handle your data, please contact us at:
                  </p>
                  <ul>
                    <li>Email: privacy@valettech.com</li>
                    <li>Phone: 1-800-VALET-TH</li>
                    <li>Address: San Francisco, CA</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
