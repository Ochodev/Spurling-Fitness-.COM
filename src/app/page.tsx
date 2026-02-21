import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/forms/ContactForm";

export default function HomePage() {
  return (
    <>
      {/* ──────────── HERO SECTION (Two-column) ──────────── */}
      <section className="relative min-h-[700px] overflow-hidden bg-brand-dark sm:min-h-[900px]">
        {/* Decorative vertical brushstroke on left */}
        <div className="pointer-events-none absolute -top-[370px] left-0 z-[1] hidden h-[1608px] w-[214px] opacity-30 lg:block">
          <Image
            src="/images/dividers/vertical-01.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="relative z-[2] mx-auto flex min-h-[700px] max-w-[1200px] flex-col lg:flex-row sm:min-h-[900px]">
          {/* Left column — Photo */}
          <div className="relative h-[400px] w-full lg:h-auto lg:w-1/2">
            <Image
              src="/images/heroes/dsc-0926.webp"
              alt="Woman working out with kettlebell"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          {/* Right column — Text */}
          <div className="flex flex-1 flex-col justify-center px-6 py-16 sm:px-12 lg:py-24">
            <h1 className="font-heading text-4xl font-semibold uppercase leading-tight text-white sm:text-5xl md:text-[56px] md:leading-[1.1]">
              Best Personal Training Gym{" "}
              <span className="text-brand-red">For People Over 50</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
              At Spurling Fitness, we help busy individuals over 50 create
              enjoyable fitness routines, establish lasting habits, and achieve
              results that empower their lives. With three convenient locations in
              Kennebunk, Scarborough, and South Portland, we specialize in helping
              adults feel, move, and live better.
            </p>
            <div className="mt-8">
              <Button
                href="/contact-us/"
                variant="outlined"
                size="large"
                className="!border-brand-red !text-brand-red hover:!bg-brand-red hover:!text-white"
              >
                Talk to a Trainer!
              </Button>
            </div>
          </div>
        </div>

        {/* White brushstroke at bottom of hero */}
        <div className="pointer-events-none absolute -bottom-2 left-1/2 z-[3] h-[80px] w-[690px] -translate-x-1/2 sm:h-[109px]">
          <Image
            src="/images/dividers/brushstroke-05.svg"
            alt=""
            fill
            className="object-contain"
            sizes="690px"
          />
        </div>
      </section>

      {/* ──────────── STRUGGLING + 3-STEP (Dark Section with Grunge Top + Bottom) ──────────── */}
      <section
        className="relative bg-brand-dark py-16 sm:py-24"
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
          {/* Struggling heading */}
          <h2 className="font-heading text-3xl font-semibold text-brand-red sm:text-[48px] sm:leading-tight">
            Struggling to Get Results in a Traditional Gym?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
            You&apos;re not alone. Most people over 50 feel lost in a big-box gym —
            unsure what to do, worried about getting hurt, and never seeing real
            results. At Spurling Fitness, we solve that with personalized coaching,
            expert programming, and a welcoming community that holds you accountable
            and celebrates your wins.
          </p>

          {/* 3-Step Cards with Photo Backgrounds */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "1",
                title: "Book Your Introductory Meeting",
                description:
                  "Schedule a free consultation with one of our coaches. We'll learn about your goals, health history, and what you're looking for.",
                image: "/images/heroes/dsc-1003.webp",
              },
              {
                number: "2",
                title: "We'll Customize Your Program",
                description:
                  "Your coach designs a personalized plan based on your unique needs, abilities, and goals. No cookie-cutter programs here.",
                image: "/images/heroes/dsc-1017.webp",
              },
              {
                number: "3",
                title: "Try Our Program Risk-Free For 28 Days",
                description:
                  "Experience your first session risk-free. See the coaching, feel the community, and decide if Spurling is right for you.",
                image: "/images/heroes/dsc-1042.webp",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-lg"
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

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <span className="font-heading text-[180px] font-bold leading-none text-white/20 sm:text-[200px]">
                      {step.number}
                    </span>
                    <h3 className="-mt-12 font-heading text-xl font-semibold uppercase text-white sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button href="/contact-us/" variant="filled" size="large">
              Talk to a Trainer!
            </Button>
          </div>
        </Container>
      </section>

      {/* ──────────── WHAT MAKES SPURLING DIFFERENT (Two-column, white bg) ──────────── */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl font-semibold text-brand-red sm:text-4xl">
                What Makes Spurling Different?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-brand-gray">
                Our expert coaches design personalized programs in a small-group format
                with no more than 6 clients per session. You get the individual
                attention of personal training with the energy and accountability of a
                group. We&apos;ve helped hundreds of adults across Southern Maine build
                strength, lose weight, and gain confidence — regardless of where
                they&apos;re starting from.
              </p>
              <div className="mt-8">
                <Button href="/contact-us/" variant="outlined" size="large">
                  Talk to a Trainer!
                </Button>
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
        className="relative bg-brand-dark py-16 sm:py-24"
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
          <h2 className="mb-12 text-center font-heading text-3xl font-semibold uppercase text-brand-red sm:text-[50px] sm:leading-tight">
            Personal Training Services
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Private One-On-One Training",
                description:
                  "Get individualized attention with our private personal training sessions, tailored specifically to your goals and fitness level.",
                image: "/images/heroes/dsc-1003.webp",
                href: "/what-we-do/private-one-on-one/",
              },
              {
                title: "Small Group Personal Training",
                description:
                  "Experience the best of both worlds — personalized coaching in an energizing small group of no more than 6 people.",
                image: "/images/heroes/dsc-0906.webp",
                href: "/what-we-do/small-group-personal-training/",
              },
              {
                title: "Nutritional Guidance",
                description:
                  "Fuel your results with expert nutritional guidance that complements your training program and lifestyle.",
                image: "/images/misc/nutrition-food.webp",
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
                    <h3 className="font-heading text-xl font-semibold uppercase text-white sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/80">
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
      <section className="py-16 sm:py-20">
        <Container className="text-center">
          <h2 className="mb-10 font-heading text-4xl font-semibold uppercase text-brand-red sm:text-6xl md:text-[76px] md:leading-[1.1]">
            Success Stories
          </h2>

          <div className="mx-auto mb-8 flex items-center justify-center gap-4">
            <div>
              <p className="font-heading text-lg font-semibold uppercase tracking-wider text-brand-dark">
                Excellent
              </p>
              <div className="flex items-center justify-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="mt-1 text-sm text-brand-gray-light">
                Based on 170+ reviews
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Lynn Jourdan",
                text: "Spurling is exceptional. I am 73 and have been going to the gym since I was in my late 40s. The professional team makes all the difference.",
              },
              {
                name: "Washburn Family",
                text: "We joined Spurling because we needed accountability and direction with our fitness goals. The coaches are amazing and truly care about each member.",
              },
              {
                name: "Martha Crow",
                text: "Spurling has been life changing! I've been going for over a year and have gained strength, confidence and friends. Best decision I ever made.",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="rounded-lg border border-gray-200 p-6 text-left shadow-sm"
              >
                <div className="mb-3 flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-3 text-sm leading-relaxed text-brand-gray">
                  {review.text}
                </p>
                <p className="font-heading text-sm font-semibold text-brand-dark">
                  {review.name}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button href="/testimonial/" variant="outlined" size="large">
              View More Testimonials
            </Button>
          </div>
        </Container>
      </section>

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
            <h2 className="mb-10 text-center text-[42px] font-semibold uppercase text-brand-red sm:text-[54px]" style={{ fontFamily: "var(--font-teko), sans-serif" }}>
              Contact Us
            </h2>

            <div className="mx-auto max-w-lg rounded-lg bg-white p-8 shadow-lg">
              <ContactForm source="homepage" />
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}
