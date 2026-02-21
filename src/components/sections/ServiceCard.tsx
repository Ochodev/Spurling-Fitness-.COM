import Image from "next/image";
import Link from "next/link";
import { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={service.href}
      className="group block overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl no-underline"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 font-heading text-xl font-semibold text-brand-dark group-hover:text-brand-red transition-colors">
          {service.name}
        </h3>
        <p className="text-sm leading-relaxed text-brand-gray-light">
          {service.shortDescription}
        </p>
        <span className="mt-4 inline-block font-heading text-sm font-semibold uppercase tracking-wider text-brand-red">
          Learn More →
        </span>
      </div>
    </Link>
  );
}
