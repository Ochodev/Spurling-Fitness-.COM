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
            <div>
              <p className="text-brand-gray-light leading-relaxed">
                This privacy policy discloses the privacy practices for Spurling
                Fitness. This privacy policy applies solely to information collected
                by this website. It will notify you of the following:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-brand-gray-light leading-relaxed">
                <li>What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.</li>
                <li>What choices are available to you regarding the use of your data.</li>
                <li>The security procedures in place to protect the misuse of your information.</li>
                <li>How you can correct any inaccuracies in the information.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-semibold text-brand-dark">
                Information Collection, Use, and Sharing
              </h2>
              <p className="text-brand-gray-light leading-relaxed">
                We are the sole owners of the information collected on this site. We
                only have access to/collect information that you voluntarily give us
                via email or other direct contact from you. We will not sell or rent
                this information to anyone.
              </p>
              <p className="mt-3 text-brand-gray-light leading-relaxed">
                We will use your information to respond to you, regarding the reason
                you contacted us. We will not share your information with any third
                party outside of our organization, other than as necessary to fulfill
                your request, e.g. to ship an order.
              </p>
              <p className="mt-3 text-brand-gray-light leading-relaxed">
                Unless you ask us not to, we may contact you via email in the future
                to tell you about specials, new products or services, or changes to
                this privacy policy.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-semibold text-brand-dark">
                Your Access to and Control Over Information
              </h2>
              <p className="text-brand-gray-light leading-relaxed">
                You may opt out of any future contacts from us at any time. You can
                do the following at any time by contacting us via the email address or
                phone number given on our website:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-brand-gray-light leading-relaxed">
                <li>See what data we have about you, if any.</li>
                <li>Change/correct any data we have about you.</li>
                <li>Have us delete any data we have about you.</li>
                <li>Express any concern you have about our use of your data.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-semibold text-brand-dark">
                Security
              </h2>
              <p className="text-brand-gray-light leading-relaxed">
                We take precautions to protect your information. When you submit
                sensitive information via the website, your information is protected
                both online and offline.
              </p>
              <p className="mt-3 text-brand-gray-light leading-relaxed">
                Wherever we collect sensitive information (such as credit card data),
                that information is encrypted and transmitted to us in a secure way.
                You can verify this by looking for a lock icon in the address bar and
                looking for &quot;https&quot; at the beginning of the address of the
                Web page.
              </p>
              <p className="mt-3 text-brand-gray-light leading-relaxed">
                While we use encryption to protect sensitive information transmitted
                online, we also protect your information offline. Only employees who
                need the information to perform a specific job (for example, billing
                or customer service) are granted access to personally identifiable
                information. The computers/servers in which we store personally
                identifiable information are kept in a secure environment.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-semibold text-brand-dark">
                SMS Privacy Policy
              </h2>
              <p className="text-brand-gray-light leading-relaxed">
                By providing your phone number and submitting a form on our website,
                you consent to being contacted by Spurling Fitness via email,
                phone call, and/or SMS text message. You understand that you are not
                required to provide consent as a condition of purchasing any property,
                goods, or services. Message and data rates may apply. You can opt out
                of receiving SMS text messages at any time by replying STOP to any
                message. For more information, reply HELP or contact us at
                info@spurlingfitness.com.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-semibold text-brand-dark">
                SMS Terms and Conditions
              </h2>
              <p className="text-brand-gray-light leading-relaxed">
                Spurling Fitness offers customers the option to engage with our
                company via SMS text messaging. By opting in, you agree to receive
                messages related to your inquiries, appointments, promotions, and
                other relevant communications. Message frequency may vary. Message
                and data rates may apply. Carriers are not liable for delayed or
                undelivered messages. You may opt out at any time by replying STOP.
                Your information will not be shared with third parties for
                marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-semibold text-brand-dark">
                Contact Us
              </h2>
              <p className="text-brand-gray-light leading-relaxed">
                If you feel that we are not abiding by this privacy policy, you
                should contact us immediately via telephone at 207-467-3757 or via
                email at info@spurlingfitness.com.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
