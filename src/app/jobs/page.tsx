import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import ContactFooterSection from "@/components/sections/ContactFooterSection";

export const metadata = generatePageMetadata({
  title: "We're Hiring!",
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

      {/* All content in one continuous white section */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 font-heading text-3xl font-bold uppercase text-brand-red sm:text-4xl md:text-[42px]">
              Join Our Team at Spurling Fitness
            </h2>
            <p className="mb-12 font-heading text-xl font-bold uppercase text-brand-dark sm:text-2xl">
              Job Posting: Head Coach at Spurling Fitness
            </p>

            <h2 className="mb-6 font-heading text-2xl font-bold uppercase text-brand-red sm:text-3xl md:text-[36px]">
              Why Work With Us
            </h2>
            <p className="mb-10 leading-relaxed text-brand-gray-light">
              Spurling Fitness is more than just a gym—it&apos;s a
              community-driven movement dedicated to transforming lives through
              coaching, accountability, and connection. Every hour our clients
              spend with us is designed to be the best hour of their day, and we
              bring that same passion and commitment to our team members.
            </p>

            <h2 className="mb-6 font-heading text-2xl font-bold uppercase text-brand-red sm:text-3xl md:text-[36px]">
              What Makes Spurling Fitness Unique?
            </h2>
            <ul className="mb-4 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">
                    A Purpose-Driven Environment:
                  </strong>{" "}
                  We empower individuals who may feel intimidated by traditional
                  gyms, fostering confidence and growth.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">
                    A Team Culture Built on Integrity &amp; Excellence:
                  </strong>{" "}
                  We go above and beyond to create an exceptional experience for
                  both clients and staff.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">
                    Opportunities for Growth:
                  </strong>{" "}
                  With a new location opening, we&apos;re looking for leaders
                  who want to be part of something bigger.
                </span>
              </li>
            </ul>
            <p className="mb-16 text-lg font-bold leading-relaxed text-brand-dark">
              This is not just a job—it&apos;s a chance to make an impact,
              inspire change, and grow both personally and professionally.
            </p>

            <h2 className="mb-6 font-heading text-2xl font-bold uppercase text-brand-red sm:text-3xl md:text-[36px]">
              What We&apos;re Looking For
            </h2>
            <div className="mb-10 space-y-4 leading-relaxed text-brand-gray-light">
              <p>
                The Head Coach at Spurling Fitness is a critical part of our
                success. This role goes beyond coaching sessions—it includes
                responsibilities in sales, marketing, client growth, and
                community engagement.
              </p>
              <p>
                We need someone who embraces ownership of their role, actively
                contributes to the growth of our gym, and collaborates to ensure
                the Spurling Fitness mission resonates throughout the community.
              </p>
            </div>

            <h2 className="mb-4 font-heading text-2xl font-bold uppercase text-brand-red sm:text-3xl md:text-[36px]">
              Who You Are
            </h2>
            <p className="mb-4 font-heading text-xl font-bold uppercase text-brand-dark">
              You Are:
            </p>
            <ul className="mb-12 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">
                    Ownership-Driven:
                  </strong>{" "}
                  You take pride in being part of the gym&apos;s growth and
                  success.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">
                    Strategic Thinker:
                  </strong>{" "}
                  You understand how sales, marketing, and community engagement
                  contribute to long-term success.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">
                    Energetic Leader:
                  </strong>{" "}
                  You inspire clients and team members through clear
                  communication.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">Proactive:</strong> You
                  don&apos;t wait for opportunities—you create them.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">
                    Connection-Focused:
                  </strong>{" "}
                  You excel at building meaningful relationships with clients,
                  teammates, and the greater community.
                </span>
              </li>
            </ul>

            <h2 className="mb-6 font-heading text-2xl font-bold uppercase text-brand-red sm:text-3xl md:text-[36px]">
              Key Responsibilities
            </h2>

            <p className="mb-4 font-heading text-xl font-bold uppercase text-brand-dark sm:text-2xl">
              Beyond the Gym Floor
            </p>
            <ul className="mb-8 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">Drive Growth:</strong>{" "}
                  Support membership growth through sales efforts, lead
                  management, and consistent follow-up.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">
                    Marketing Leadership:
                  </strong>{" "}
                  Collaborate on marketing strategies, create engaging social
                  media content, and represent Spurling Fitness at events.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">
                    Community Building:
                  </strong>{" "}
                  Foster partnerships with local businesses and organizations to
                  increase awareness and engagement.
                </span>
              </li>
            </ul>

            <p className="mb-4 font-heading text-xl font-bold uppercase text-brand-dark sm:text-2xl">
              Daily Responsibilities
            </p>
            <ul className="mb-8 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  Lead and manage training sessions and client interactions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  Maintain a clean, organized, and welcoming facility.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  Manage and follow up on leads to ensure a steady flow of new
                  members.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  Execute internal promotions to enhance client engagement.
                </span>
              </li>
            </ul>

            <p className="mb-4 font-heading text-xl font-bold uppercase text-brand-dark sm:text-2xl">
              Weekly Responsibilities
            </p>
            <ul className="mb-8 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  Participate in team meetings and strategy sessions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  Execute marketing campaigns and initiatives.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  Maintain client accountability through regular check-ins and
                  outreach.
                </span>
              </li>
            </ul>

            <p className="mb-4 font-heading text-xl font-bold uppercase text-brand-dark sm:text-2xl">
              Monthly Responsibilities
            </p>
            <ul className="mb-12 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  Oversee inventory management to ensure all supplies are
                  stocked.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  Collaborate on client programming and monthly marketing plans.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  Assist with team scheduling and spending plan updates.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  Build meaningful connections with the greater community to
                  promote awareness and partnerships.
                </span>
              </li>
            </ul>

            <h2 className="mb-6 font-heading text-2xl font-bold uppercase text-brand-red sm:text-3xl md:text-[36px]">
              The Ideal Candidate
            </h2>
            <ul className="mb-12 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">
                    Results-Oriented:
                  </strong>{" "}
                  You thrive on meeting goals.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">
                    Relationship Builder:
                  </strong>{" "}
                  You excel at connecting with clients and community members.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">
                    Organized and Reliable:
                  </strong>{" "}
                  You manage tasks effectively and consistently deliver on
                  responsibilities.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">
                    Passionate About Strength Training:
                  </strong>{" "}
                  You believe in the transformative power of Strength Training.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">Sales-Minded:</strong>{" "}
                  You&apos;re comfortable guiding prospective clients toward the
                  best membership options.
                </span>
              </li>
            </ul>

            <h2 className="mb-6 font-heading text-2xl font-bold uppercase text-brand-red sm:text-3xl md:text-[36px]">
              What We Offer
            </h2>
            <ul className="mb-12 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">
                    Competitive Compensation:
                  </strong>{" "}
                  $50,000 - $60,000/year (base + commission + bonuses).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">Schedule:</strong>{" "}
                  Mornings only—no afternoons or weekend shifts required.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">Team Benefits:</strong>{" "}
                  Paid time off, a retirement plan with company match, and free
                  training.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">
                    Professional Development:
                  </strong>{" "}
                  Ongoing education, in-services, and career advancement
                  opportunities.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-brand-gray-light">
                  <strong className="text-brand-dark">Purposeful Work:</strong>{" "}
                  A chance to leave a lasting legacy by helping clients transform
                  their lives.
                </span>
              </li>
            </ul>

            <h2 className="mb-6 font-heading text-2xl font-bold uppercase text-brand-red sm:text-3xl md:text-[36px]">
              Are You Ready to Make an Impact?
            </h2>
            <div className="space-y-4 leading-relaxed text-brand-gray-light">
              <p>
                If you&apos;re ready to help us launch a new gym, inspire
                clients, and drive Spurling Fitness to the next level, we want to
                hear from you.
              </p>
              <p className="font-bold text-brand-dark">
                Apply today and join us in changing lives—starting with your own.
              </p>
              <p>
                Please fill out the form below to be considered for an interview.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Success Stories */}
      <SuccessStoriesSection />

      {/* Contact Footer */}
      <ContactFooterSection
        source="jobs-page"
        formSubheading="Unleash your full potential and experience a life-changing transformation with our empowering fitness programs designed to help you achieve your dreams."
      />
    </>
  );
}
