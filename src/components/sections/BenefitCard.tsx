import { ServiceBenefit } from "@/types";

interface BenefitCardProps {
  benefit: ServiceBenefit;
  index?: number;
}

export default function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h3 className="mb-2 font-heading text-xl font-semibold text-brand-dark">
        {benefit.title}
      </h3>
      <p className="text-sm leading-relaxed text-brand-gray-light">
        {benefit.description}
      </p>
    </div>
  );
}
