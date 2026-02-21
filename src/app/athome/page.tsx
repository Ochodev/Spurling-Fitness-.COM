import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import ContactFooterSection from "@/components/sections/ContactFooterSection";

export const metadata = generatePageMetadata({
  title: "At Home Workouts",
  description:
    "Free at-home workout resources from Spurling Fitness. Stay active with guided workouts you can do anywhere, no equipment required.",
  path: "/athome/",
});

const independentWorkouts = [
  {
    title: "Workout 1",
    description:
      "A complete bodyweight strength workout targeting all major muscle groups. No equipment needed — just you and 30 minutes.",
  },
  {
    title: "Workout 2",
    description:
      "Improve your range of motion and reduce stiffness with this guided mobility routine. Perfect for mornings or rest days.",
  },
  {
    title: "Workout 3",
    description:
      "Strengthen your core and improve balance with exercises designed for all fitness levels. Essential for everyday movement.",
  },
];

const coachedWorkouts = [
  {
    title: "Workout 4",
    description:
      "A high-energy, coach-led circuit workout that alternates between strength and cardio intervals. Modifications for all levels.",
  },
  {
    title: "Workout 5",
    description:
      "Follow along with one of our coaches through a complete strength training session using minimal equipment.",
  },
  {
    title: "Workout 6",
    description:
      "A guided cool-down and recovery session to help your muscles recover and prevent soreness.",
  },
];

export default function AtHomePage() {
  return (
    <>
      <Hero
        backgroundImage="/images/heroes/dsc-0906.webp"
        headline="Stay Strong, Stay Active — Anytime"
        subheadline="Access expert-led home workouts designed to keep you moving, energized, and on track with your fitness goals."
        ctaText="View Workouts"
        ctaHref="#workouts"
      />

      {/* Independent Workouts */}
      <section id="workouts" className="bg-white py-16 sm:py-20">
        <Container>
          <h2 className="mb-10 text-center font-heading text-3xl font-semibold uppercase text-brand-red sm:text-4xl">
            Workouts 1-3: Independent Training
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {independentWorkouts.map((workout) => (
              <div key={workout.title} className="rounded-lg bg-brand-gray-lighter p-6">
                <h3 className="mb-2 font-heading text-xl font-semibold text-brand-dark">
                  {workout.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-gray-light">
                  {workout.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Coached Workouts — Dark section with brushstroke top + bottom */}
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
          <h2 className="mb-10 text-center font-heading text-3xl font-semibold uppercase text-brand-red sm:text-4xl">
            Workouts 4-6: Train With a Coach
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coachedWorkouts.map((workout) => (
              <div key={workout.title} className="rounded-lg bg-white/10 p-6">
                <h3 className="mb-2 font-heading text-xl font-semibold text-white">
                  {workout.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {workout.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.youtube.com/playlist?list=PLGTbfEmXJinaCc_2j_x0aORmXQppu967j"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-[5px] bg-brand-red px-6 py-3 font-heading text-[15px] font-normal uppercase tracking-wider text-white no-underline transition-colors hover:bg-brand-red-dark"
            >
              View Full Workout Library
            </a>
          </div>
        </Container>
      </section>

      {/* Success Stories */}
      <SuccessStoriesSection />

      {/* Grunge divider + Contact Footer */}
      <ContactFooterSection source="athome-page" />
    </>
  );
}
