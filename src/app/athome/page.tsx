import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesWrapper";
import ContactFooterSection from "@/components/sections/ContactFooterSection";

export const metadata = generatePageMetadata({
  title: "At Home Workouts",
  description:
    "Free at-home workout resources from Spurling Fitness. Stay active with guided workouts you can do anywhere, no equipment required.",
  path: "/athome/",
});

const independentWorkouts = [
  { title: "Workout 1", videoId: "tTG7mAYj1lc" },
  { title: "Workout 2", videoId: "qgmdB3ITV4I" },
  { title: "Workout 3", videoId: "u21YOW272qw" },
];

const coachedWorkouts = [
  { title: "Workout 4", videoId: "tTG7mAYj1lc" },
  { title: "Workout 5", videoId: "SbRowDLvweQ" },
  { title: "Workout 6", videoId: "km_JWZ4bq70" },
];

export default function AtHomePage() {
  return (
    <>
      <Hero
        backgroundImage="/images/heroes/img-49071.webp"
        headline="Stay Strong, Stay Active — Anytime"
        subheadline="Access expert-led home workouts designed to keep you moving, energized, and on track with your fitness goals."
        ctaText="Talk to a Trainer!"
        ctaHref="/contact-us/"
      />

      {/* ─── Intro ─── */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-brand-dark">
            Even though we are parting ways, we know you will still need to move
            your body to maintain your health. We&apos;ve got you covered.{" "}
            <strong>Workouts 1-3</strong> are quick overview workouts that you
            can do on your own, and <strong>workouts 4-6</strong> are ones that
            you can follow along with a coach as you do the workout.
          </p>
        </Container>
      </section>

      {/* ─── Workouts 1-3: Independent Training ─── */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <h2 className="mb-2 text-center font-heading text-3xl font-semibold uppercase text-brand-dark sm:text-4xl">
            Workouts 1-3: Independent Training
          </h2>
          <p className="mb-10 text-center text-base text-brand-gray-light">
            Short and effective workouts you can do on your own to stay strong
            and active
          </p>

          <div className="mx-auto max-w-3xl space-y-8">
            {independentWorkouts.map((workout) => (
              <div key={workout.videoId + workout.title}>
                <h3 className="mb-3 font-heading text-xl font-semibold uppercase text-brand-red">
                  {workout.title}
                </h3>
                <YouTubeEmbed
                  videoId={workout.videoId}
                  title={workout.title}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Workouts 4-6: Train With a Coach ─── */}
      <section
        className="relative bg-brand-dark py-20 sm:py-28"
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
          <h2 className="mb-2 text-center font-heading text-3xl font-semibold uppercase text-white sm:text-4xl">
            Workouts 4-6: Train With a Coach
          </h2>
          <p className="mb-10 text-center text-base text-gray-300">
            Follow along with our expert coaches for guided sessions that keep
            you engaged and motivated.
          </p>

          <div className="mx-auto max-w-3xl space-y-8">
            {coachedWorkouts.map((workout) => (
              <div key={workout.videoId + workout.title}>
                <h3 className="mb-3 font-heading text-xl font-semibold uppercase text-brand-red">
                  {workout.title}
                </h3>
                <YouTubeEmbed
                  videoId={workout.videoId}
                  title={workout.title}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Success Stories ─── */}
      <SuccessStoriesSection />

      {/* ─── Contact Footer ─── */}
      <ContactFooterSection source="athome-page" />
    </>
  );
}
