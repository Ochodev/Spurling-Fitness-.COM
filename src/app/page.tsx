import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import TalkToTrainerButton from "@/components/ui/TalkToTrainerButton";
import ContactForm from "@/components/forms/ContactForm";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesWrapper";

export default function HomePage() {
  return (
    <>
      {/* ──────────── HERO SECTION (Two-column) ──────────── */}
      <section className="relative overflow-hidden">
        {/* ── Hero flex row — full-width, 2-col, overflow hidden ── */}
        <div className="relative flex min-h-[500px] flex-col overflow-hidden lg:h-[900px] lg:min-h-0 lg:flex-row">
          {/* Left column — Photo (background-image, like live site) */}
          <div
            className="relative h-[400px] shrink-0 lg:h-[900px] lg:w-[638px]"
            style={{
              backgroundImage: "url(/images/heroes/dsc-0926.webp)",
              backgroundSize: "cover",
              backgroundPosition: "50% 0%",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#fab494",
            }}
          >
            {/* Decorative vertical brushstroke — straddles the seam between image and text columns */}
            <div className="pointer-events-none absolute z-[2] hidden h-[1608px] w-[214px] lg:block" style={{ left: "445px", top: "-406px" }}>
              <Image
                src="/images/dividers/vertical-01.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            {/* Bottom SVG divider — positioned at bottom of image column */}
            <div className="pointer-events-none absolute -bottom-[33px] left-0 z-[2] h-[101px] w-full">
              <Image
                src="/images/dividers/brushstroke-05.svg"
                alt=""
                fill
                className="object-fill"
                sizes="690px"
              />
            </div>
          </div>

          {/* Right column — Text (flex-1, bg white/72%, uniform 120px padding) */}
          <div className="flex flex-1 shrink-0 flex-col items-start justify-center bg-white/[0.72] px-6 py-16 sm:px-12 lg:p-[120px]">
            <h1 className="font-heading text-4xl font-semibold leading-[1] text-black sm:text-5xl md:text-[64px] md:leading-[64px]">
              BEST PERSONAL TRAINING GYM{" "}
              <span className="text-brand-red">FOR PEOPLE OVER 50</span>
            </h1>
            <p className="mt-6 text-[16px] leading-[24px] text-brand-dark" style={{ width: "486px", maxWidth: "100%", marginBottom: "14.4px" }}>
              At Spurling Fitness, we help busy individuals over 50 create
              enjoyable fitness routines, establish lasting habits, and achieve
              results that empower their lives. With three convenient locations
              in <strong>Kennebunk,</strong>{" "}
              <strong>Scarborough, and South Portland</strong>, we specialize in
              helping adults feel, move, and live better. Whether you&apos;re
              looking to lose weight, rehab injuries, or boost your energy,
              we&apos;re here every step of the way.
            </p>
            <div className="mt-0" style={{ marginBottom: "30px" }}>
              <TalkToTrainerButton variant="outlined" size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── STRUGGLING + 3-STEP (Dark Section with Grunge Top + Bottom) ──────────── */}
      <section
        className="relative bg-brand-dark pt-24 pb-16 sm:pt-36 sm:pb-24"
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
        <Container className="relative z-[1] text-center">
          {/* Struggling heading - styled as p on live site, Kanit 600 48px */}
          <p className="font-heading text-3xl font-semibold text-brand-red sm:text-[48px] sm:leading-[48px]">
            Struggling to Get Results in a Traditional Gym?
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-body text-[16px] font-normal leading-[24px] text-white">
            At Spurling Fitness, we help adults in Kennebunk, Scarborough, and
            South Portland get fit with a personal training plan that&apos;s actually
            built for them. Our mission is to empower you to take control of your
            health and well-being through coaching, accountability, and a fun
            community.
          </h2>

          {/* 3-Step Cards with Photo Backgrounds */}
          <div className="mt-16 grid gap-4 md:grid-cols-3 md:gap-6">
            {[
              {
                number: "1",
                title: "Book Your Introductory Meeting",
                description:
                  "We'll meet at one of our three locations to learn more about your goals and challenges.",
                image: "/images/heroes/img-0601.webp",
              },
              {
                number: "2",
                title: "We'll Customize Your Program",
                description:
                  "Whether you're new to fitness or looking for a change, we'll tailor your program to your level, goals, and any injuries.",
                image: "/images/heroes/dsc-1003.webp",
              },
              {
                number: "3",
                title: "Try Our Program Risk-Free For 28 Days",
                description:
                  "Every time you walk in, your workout is ready — with your coach and your community by your side.",
                image: "/images/heroes/dsc-1017.webp",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="group relative overflow-hidden"
              >
                <div className="relative h-[420px] sm:h-[480px]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-black/50" />

                  <h2 className="absolute right-4 top-4 font-heading text-[200px] font-semibold leading-none text-white/80">
                    {step.number}
                  </h2>
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-6 pb-10 text-center">
                    <h3 className="font-heading text-[28px] font-semibold uppercase leading-[28px] text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[24px] text-white">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <TalkToTrainerButton variant="filled" size="large" />
          </div>
        </Container>
      </section>

      {/* ──────────── WHAT MAKES SPURLING DIFFERENT (Two-column, white bg) ──────────── */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="lg:w-1/2">
              <h3 className="font-heading text-3xl font-semibold uppercase text-brand-red sm:text-[59px] sm:leading-[59px]">
                What Makes Spurling Different?
              </h3>
              <p className="mt-6 text-[16px] leading-[24px] text-brand-dark">
                At Spurling Fitness, every session is led by an expert coach
                who&apos;s focused on <em>your</em> goals — no wandering the gym, no
                guessing what to do. Our small group format gives you the personal
                attention of one-on-one training with the motivation of a team.
                With locations in Kennebunk, Scarborough, and South Portland,
                we&apos;ve helped hundreds of adults in Southern Maine gain strength,
                confidence, and lasting results — and we&apos;re ready to help you
                do the same.
              </p>
              <div className="mt-8">
                <TalkToTrainerButton variant="outlined" size="large" />
              </div>
            </div>

            <div className="relative h-[500px] w-full overflow-hidden rounded-lg lg:h-[600px] lg:w-1/2">
              <Image
                src="/images/misc/img-7817.webp"
                alt="Spurling Fitness community members"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────── PERSONAL TRAINING SERVICES (Dark Section with Grunge Top + Bottom) ──────────── */}
      <section
        className="relative bg-brand-dark pt-24 pb-24 sm:pt-44 sm:pb-44"
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
          <h2 className="mb-12 text-center font-heading text-3xl font-semibold uppercase text-brand-red sm:text-[71px]" style={{ lineHeight: "1" }}>
            PERSONAL TRAINING SERVICES
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "PRIVATE ONE-ON-ONE TRAINING",
                description:
                  "Experience personalized training sessions tailored to your specific needs and goals, ensuring maximum results and continuous support.",
                image: "/images/heroes/dsc-0906.webp",
                href: "/what-we-do/private-one-on-one/",
              },
              {
                title: "SMALL GROUP PERSONAL TRAINING",
                description:
                  "Enjoy the benefits of a customized workout in a supportive, small group setting. Get individualized routines and guidance, while sharing the experience with others.",
                image: "/images/heroes/dsc-1042.webp",
                href: "/what-we-do/small-group-personal-training/",
              },
              {
                title: "NUTRITIONAL GUIDANCE",
                description:
                  "Get expert nutritional advice to complement your fitness routine, helping you make healthier choices and achieve your wellness goals.",
                image: "/images/misc/nutrition-guide.webp",
                href: "/what-we-do/nutritional-guidance/",
              },
            ].map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group relative block overflow-hidden rounded-lg no-underline"
              >
                <div className="relative h-[350px] sm:h-[400px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/60" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h2 className="font-heading text-2xl font-semibold uppercase text-white sm:text-[32px] sm:leading-[32px]">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-[16px] leading-[24px] text-white">
                      {service.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* ──────────── SUCCESS STORIES (White bg) ──────────── */}
      <SuccessStoriesSection />

      {/* ──────────── CONTACT US (Dark Section with Orange Grunge Divider) ──────────── */}
      <section className="bg-brand-dark">
        <div className="relative h-[120px] w-full sm:h-[200px] md:h-[260px] lg:h-[308px]">
          <Image
            src="/images/dividers/texture-grunge.webp"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="py-16 sm:py-20">
          <Container>
            <h2 className="mb-4 text-center font-semibold uppercase text-brand-red text-[42px] sm:text-[54px] sm:leading-[54px]" style={{ fontFamily: "var(--font-teko), sans-serif" }}>
              CONTACT US
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-center text-[16px] leading-[24px] text-gray-300">
              Unleash your full potential and experience a life-changing
              transformation with our empowering fitness programs designed to
              help you achieve your dreams.
            </p>

            <div className="mx-auto max-w-lg rounded-lg bg-white p-8 shadow-lg">
              <ContactForm source="homepage" />
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}
