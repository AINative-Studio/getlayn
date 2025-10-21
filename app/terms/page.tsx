import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="relative h-[500px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop"
            alt="Legal documents"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl text-center text-white">
                <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Terms of Service
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
                  <h2>1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using Layn, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
                  </p>

                  <h2>2. Description of Service</h2>
                  <p>
                    Layn is a marketplace platform that connects drivers seeking parking spaces with hosts who have parking spaces available for rent. We facilitate transactions but are not a party to the agreements between drivers and hosts.
                  </p>

                  <h2>3. User Accounts</h2>
                  <h3>3.1 Registration</h3>
                  <p>
                    To use our services, you must create an account and provide accurate, complete information. You are responsible for maintaining the confidentiality of your account credentials.
                  </p>
                  <h3>3.2 Account Requirements</h3>
                  <ul>
                    <li>You must be at least 18 years old to use Layn</li>
                    <li>You must provide a valid email address and phone number</li>
                    <li>You agree to keep your account information current and accurate</li>
                    <li>You are responsible for all activities under your account</li>
                  </ul>

                  <h2>4. Driver Responsibilities</h2>
                  <p>As a driver using Layn, you agree to:</p>
                  <ul>
                    <li>Provide accurate information about your vehicle</li>
                    <li>Arrive and depart within the agreed booking times</li>
                    <li>Park only in the designated space</li>
                    <li>Respect the host's property and follow any specific rules</li>
                    <li>Pay all booking fees in full and on time</li>
                    <li>Leave the parking space in the same condition as found</li>
                  </ul>

                  <h2>5. Host Responsibilities</h2>
                  <p>As a host listing a parking space, you agree to:</p>
                  <ul>
                    <li>Provide accurate descriptions and photos of your parking space</li>
                    <li>Ensure the space is available for the agreed booking period</li>
                    <li>Maintain the parking space in a safe and accessible condition</li>
                    <li>Provide clear access instructions</li>
                    <li>Comply with all local laws and regulations</li>
                    <li>Have proper authority to rent the parking space</li>
                  </ul>

                  <h2>6. Bookings and Payments</h2>
                  <h3>6.1 Booking Process</h3>
                  <p>
                    Drivers can search for and book available parking spaces. Bookings are confirmed once payment is successfully processed.
                  </p>
                  <h3>6.2 Payment Terms</h3>
                  <ul>
                    <li>All payments are processed securely through our platform</li>
                    <li>Drivers pay the full booking amount at the time of reservation</li>
                    <li>Hosts receive payment after the booking period concludes</li>
                    <li>Layn charges a service fee for facilitating transactions</li>
                  </ul>
                  <h3>6.3 Cancellation Policy</h3>
                  <p>
                    Cancellation policies vary by listing. Review the specific cancellation terms before booking. Refunds are subject to the applicable cancellation policy and timing.
                  </p>

                  <h2>7. Prohibited Conduct</h2>
                  <p>You may not:</p>
                  <ul>
                    <li>Use the platform for any illegal purpose</li>
                    <li>Provide false or misleading information</li>
                    <li>Harass, abuse, or harm other users</li>
                    <li>Attempt to circumvent payment systems</li>
                    <li>List parking spaces you don't have authority to rent</li>
                    <li>Interfere with the platform's operation or security</li>
                    <li>Use automated systems to access the platform</li>
                  </ul>

                  <h2>8. Insurance and Liability</h2>
                  <h3>8.1 Platform Liability</h3>
                  <p>
                    Layn is a marketplace platform and is not responsible for the conduct of drivers or hosts, the condition of parking spaces, or any damages or losses incurred during bookings.
                  </p>
                  <h3>8.2 User Responsibility</h3>
                  <p>
                    Users are responsible for maintaining appropriate insurance coverage for their vehicles and property. Layn does not provide insurance coverage.
                  </p>
                  <h3>8.3 Disputes</h3>
                  <p>
                    Any disputes between drivers and hosts should be resolved between the parties. Layn may assist in mediation but is not obligated to do so.
                  </p>

                  <h2>9. Intellectual Property</h2>
                  <p>
                    All content on the Layn platform, including text, graphics, logos, and software, is owned by Layn and protected by intellectual property laws. You may not use our intellectual property without permission.
                  </p>

                  <h2>10. Privacy</h2>
                  <p>
                    Your use of Layn is subject to our Privacy Policy, which describes how we collect, use, and protect your personal information.
                  </p>

                  <h2>11. Disclaimers</h2>
                  <p>
                    Layn is provided "as is" without warranties of any kind. We do not guarantee the platform will be error-free, secure, or available at all times.
                  </p>

                  <h2>12. Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted by law, Layn and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform.
                  </p>

                  <h2>13. Indemnification</h2>
                  <p>
                    You agree to indemnify and hold Layn harmless from any claims, losses, or damages arising from your use of the platform or violation of these terms.
                  </p>

                  <h2>14. Termination</h2>
                  <p>
                    We reserve the right to suspend or terminate your account at any time for violation of these terms or for any other reason. You may also delete your account at any time.
                  </p>

                  <h2>15. Changes to Terms</h2>
                  <p>
                    We may modify these Terms of Service at any time. Continued use of the platform after changes constitutes acceptance of the modified terms.
                  </p>

                  <h2>16. Governing Law</h2>
                  <p>
                    These Terms of Service are governed by the laws of the State of California, United States, without regard to conflict of law principles.
                  </p>

                  <h2>17. Dispute Resolution</h2>
                  <p>
                    Any disputes arising from these terms or your use of Layn shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                  </p>

                  <h2>18. Contact Information</h2>
                  <p>
                    If you have questions about these Terms of Service, please contact us at:
                  </p>
                  <ul>
                    <li>Email: legal@valettech.com</li>
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
