import Image from "next/image";
import Container from "@/components/layout/Container";

interface CoachSpotlightProps {
  name?: string;
  role?: string;
  bio?: string;
  photo?: string;
  className?: string;
}

export default function CoachSpotlight({
  name = "Joseph Davenport",
  role = "Coach",
  bio = "Built his foundation through 21 years of U.S. Army service as a Supply Specialist, Drill Instructor, and H2F (Holistic Health and Fitness) Integrator. Military experiences shaped his leadership, discipline, and motivation through challenge and growth. Mixed Martial Arts deepened his understanding of movement, power, balance, and mental toughness. His mission centers on helping people rise, move confidently, think with strength, and build resilience that transforms life inside and outside the gym.",
  photo = "/images/team/joseph-davenport.webp",
  className = "",
}: CoachSpotlightProps) {
  return (
    <section className={`py-16 sm:py-20 bg-brand-gray-lighter ${className}`}>
      <Container>
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          {/* Photo */}
          <div className="relative h-[350px] w-[280px] shrink-0 overflow-hidden rounded-lg sm:h-[400px] sm:w-[320px]">
            <Image
              src={photo}
              alt={name}
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>

          {/* Bio */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-brand-dark sm:text-3xl">
              {name}
            </h3>
            <p className="mt-1 font-heading text-lg text-brand-red">
              {role}
            </p>
            <p className="mt-4 leading-relaxed text-brand-gray-light">
              {bio}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
