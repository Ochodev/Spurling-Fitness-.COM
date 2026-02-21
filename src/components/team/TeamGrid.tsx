"use client";

import { useState } from "react";
import TeamMemberCard from "./TeamMemberCard";
import TeamMemberModal from "./TeamMemberModal";
import Container from "@/components/layout/Container";
import { TeamMember } from "@/types";

interface TeamGridProps {
  members: TeamMember[];
  heading?: string;
  className?: string;
}

export default function TeamGrid({
  members,
  heading = "Meet Our Team",
  className = "",
}: TeamGridProps) {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <div className={className}>
      <Container>
        {heading && (
          <h2 className="mb-10 text-center font-heading text-4xl font-semibold uppercase text-brand-red sm:text-6xl md:text-[71px] md:leading-[1.1]">
            {heading}
          </h2>
        )}

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {members.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              onClick={() => setSelected(member)}
            />
          ))}
        </div>
      </Container>

      <TeamMemberModal
        member={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
