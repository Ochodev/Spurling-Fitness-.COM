import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "1",
    title: "Book",
    description:
      "Schedule a free consultation with one of our coaches. We'll learn about your goals, health history, and what you're looking for.",
  },
  {
    number: "2",
    title: "Customize",
    description:
      "Your coach designs a personalized plan based on your unique needs, abilities, and goals. No cookie-cutter programs here.",
  },
  {
    number: "3",
    title: "Try",
    description:
      "Experience your first session risk-free. See the coaching, feel the community, and decide if Spurling is right for you.",
  },
];

interface ThreeStepProcessProps {
  heading?: string;
  className?: string;
}

export default function ThreeStepProcess({
  heading = "Getting Started Is Easy",
  className = "",
}: ThreeStepProcessProps) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <Container>
        <SectionHeading className="mb-12 text-3xl sm:text-4xl">
          {heading}
        </SectionHeading>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Step number circle */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-red text-2xl font-bold text-white font-heading">
                {step.number}
              </div>
              <h3 className="mb-2 font-heading text-2xl font-semibold text-brand-dark">
                {step.title}
              </h3>
              <p className="text-brand-gray-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
