import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import ContactFooterSection from "@/components/sections/ContactFooterSection";
import { teamMembers } from "@/data/team";

const joseph = teamMembers.find((m) => m.id === "joseph-davenport")!;

export const metadata = generatePageMetadata({
  title: "We're Hiring",
  description:
    "Join the Spurling Fitness coaching team. We're looking for passionate fitness professionals who want to make a difference in the lives of adults over 50.",
  path: "/jobs/",
});

export default function JobsPage() {
  return (
    <>
      <Hero
        backgroundImage="/images/heroes/dsc-1003.webp"
        headline="Spurling Fitness Is Hiring!"
        subheadline="Help us transform lives through coaching, connection, and a community-driven approach to fitness."
      />

      {/* Join Our Team */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-heading text-3xl font-semibold uppercase text-brand-red sm:text-4xl">
              Join Our Team at Spurling Fitness
            </h2>
            <div className="space-y-4 text-brand-gray-light leading-relaxed">
              <p>
                At Spurling Fitness, we&apos;re more than just a gym — we&apos;re
                a community dedicated to helping adults over 50 build strength,
                confidence, and lasting healthy habits. Our coaches don&apos;t
                just lead workouts; they build relationships, inspire change, and
                make a real impact every single day.
              </p>
              <p>
                We&apos;re looking for a Head Coach to join our growing team.
                If you&apos;re passionate about coaching, love working with
                people, and want a career that truly matters — keep reading.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Work With Us — Dark section */}
      <section
        className="relative bg-brand-dark py-16 sm:py-20"
        style={{
          backgroundImage: "url(/images/dividers/wholevertical-01-mod.svg)",
          backgroundSize: "800px",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "50% 0%",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "url(/images/dividers/vertical-01-reflected.svg)",
            backgroundSize: "800px",
            backgroundPosition: "50% 100%",
            backgroundRepeat: "repeat-x",
          }}
        />
        <Container className="relative z-[1]">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 font-heading text-3xl font-semibold uppercase text-brand-red sm:text-4xl">
              Why Work With Us
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-300">
              <p>
                Spurling Fitness isn&apos;t your typical gym. We specialize in
                personal training for adults over 50, and our coaches are at the
                heart of everything we do. We believe in investing in our team
                with competitive pay, ongoing education, and a culture that
                values work-life balance.
              </p>
            </div>

            <h3 className="mb-4 mt-10 font-heading text-2xl font-semibold text-white">
              What Makes Spurling Fitness Unique?
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-red" />
                <span>Small group training (max 6 clients) with personalized programming</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-red" />
                <span>A supportive, community-first environment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-red" />
                <span>Three locations across Southern Maine (Kennebunk, Scarborough, South Portland)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-red" />
                <span>Morning-only schedule — no afternoons or weekend shifts required</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-red" />
                <span>Focus on building relationships and long-term client results</span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* What We're Looking For */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-heading text-3xl font-semibold uppercase text-brand-red sm:text-4xl">
              What We&apos;re Looking For
            </h2>
            <p className="mb-6 leading-relaxed text-brand-gray-light">
              We&apos;re hiring a Head Coach who is passionate about helping
              others, thrives in a team environment, and is committed to
              professional growth. Experience with older adults is a plus, but
              what matters most is your character and coaching ability.
            </p>

            <h3 className="mb-4 font-heading text-2xl font-semibold text-brand-dark">
              Key Responsibilities
            </h3>
            <ul className="mb-8 list-disc space-y-2 pl-6 text-brand-gray-light">
              <li>Lead small-group personal training sessions (up to 6 clients per session)</li>
              <li>Design and deliver personalized programs for each client</li>
              <li>Track client progress, weights, and modifications</li>
              <li>Communicate with clients via email, text, and in-person check-ins</li>
              <li>Maintain a clean, organized, and welcoming gym environment</li>
              <li>Participate in team meetings and continuing education</li>
              <li>Build meaningful relationships with clients and help them achieve their goals</li>
            </ul>

            <h3 className="mb-4 font-heading text-2xl font-semibold text-brand-dark">
              The Ideal Candidate
            </h3>
            <ul className="mb-8 list-disc space-y-2 pl-6 text-brand-gray-light">
              <li>Certified Personal Trainer (NSCA, ACSM, ISSA, NASM, or equivalent)</li>
              <li>Experience working with adults 40+ preferred</li>
              <li>Strong communication and interpersonal skills</li>
              <li>Passion for helping people and continuous learning</li>
              <li>Positive attitude and team-first mentality</li>
              <li>Available for morning shifts</li>
            </ul>

            <h3 className="mb-4 font-heading text-2xl font-semibold text-brand-dark">
              What We Offer
            </h3>
            <ul className="list-disc space-y-2 pl-6 text-brand-gray-light">
              <li>$50,000 - $60,000/year (base salary + commission + bonuses)</li>
              <li>Morning-only schedule — no afternoons or weekend shifts</li>
              <li>Paid time off</li>
              <li>Retirement plan with company match</li>
              <li>Free training membership</li>
              <li>Continuing education support and professional development</li>
              <li>Supportive, collaborative team environment</li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Success Stories */}
      <SuccessStoriesSection />

      {/* Coach Bio — Joseph Davenport */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg lg:h-[500px] lg:w-1/2">
              <Image
                src={joseph.photo}
                alt={joseph.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="mb-2 font-heading text-2xl font-semibold uppercase text-brand-dark sm:text-3xl">
                {joseph.name}
              </h2>
              <p className="mb-6 font-heading text-lg text-brand-red">
                {joseph.role}
              </p>
              <p className="text-base leading-relaxed text-brand-gray-light">
                I&apos;m a coach who believes movement is a doorway to
                confidence, resilience, and unlocking the strength people
                don&apos;t always see in themselves. My foundation was built
                through 21 years of U.S. Army service — as a Supply Specialist,
                Drill Instructor, and H2F (Holistic Health and Fitness)
                Integrator.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-light">
                My mission is to help people rise — to move with confidence,
                think with strength, and build the kind of resilience that
                transforms their life inside and outside the gym.
              </p>
              <p className="mt-6 text-sm italic text-brand-gray-light">
                &ldquo;Desire and imagination have the potential to position a
                person for greatness&rdquo; — Eric Thomas
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Grunge divider + Contact Footer */}
      <ContactFooterSection
        source="jobs-page"
        formSubheading="Please fill out the form below to be considered for an interview."
        formButtonText="Submit Application"
      />
    </>
  );
}
