import Image from "next/image";
import { TeamMember } from "@/types";

interface TeamMemberCardProps {
  member: TeamMember;
  onClick: () => void;
}

export default function TeamMemberCard({ member, onClick }: TeamMemberCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden text-left"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
        {/* Name overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="font-heading text-lg font-semibold uppercase text-white">
            {member.name}
          </h3>
        </div>
      </div>
    </button>
  );
}
