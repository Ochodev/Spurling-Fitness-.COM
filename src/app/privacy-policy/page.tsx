import { generatePageMetadata } from "@/lib/metadata";
import Container from "@/components/layout/Container";

export const metadata = generatePageMetadata({
  title: "Privacy Policy",
  description: "Spurling Fitness privacy policy.",
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Top padding to account for transparent header */}
      <div className="bg-brand-dark pt-32 pb-12">
        <Container>
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Privacy Policy
          </h1>
        </Container>
      </div>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <p className="text-brand-gray-light leading-relaxed">
              <strong className="text-brand-dark">Last updated:</strong> January 1, 2025
            </p>

            <div>
              <h2 className="mb-3 font-heading text-xl font-semibold text-brand-dark">
                Information We Collect
              </h2>
              <p className="text-brand-gray-light leading-relaxed">
                We collect information you provide directly to us, such as when you
                fill out a contact form, apply for a job, or communicate with us.
                This may include your name, email address, phone number, and
                any other information you choose to provide.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-semibold text-brand-dark">
                How We Use Your Information
              </h2>
              <p className="text-brand-gray-light leading-relaxed">
                We use the information we collect to respond to your inquiries,
                provide our services, send you marketing communications (with your
                consent), and improve our website and services.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-semibold text-brand-dark">
                Information Sharing
              </h2>
              <p className="text-brand-gray-light leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal
                information to outside parties except as necessary to provide our
                services or as required by law.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-semibold text-brand-dark">
                Cookies and Tracking
              </h2>
              <p className="text-brand-gray-light leading-relaxed">
                Our website may use cookies and similar tracking technologies to
                improve your browsing experience and analyze site traffic. You can
                control cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-semibold text-brand-dark">
                Third-Party Services
              </h2>
              <p className="text-brand-gray-light leading-relaxed">
                We use Google Analytics and Facebook Pixel to understand how visitors
                interact with our website. These services may collect information
                about your use of our site in accordance with their own privacy
                policies.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-semibold text-brand-dark">
                Contact Us
              </h2>
              <p className="text-brand-gray-light leading-relaxed">
                If you have any questions about this Privacy Policy, please contact
                us at info@spurlingfitness.com or call 207-467-3757.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
