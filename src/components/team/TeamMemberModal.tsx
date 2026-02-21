"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { TeamMember } from "@/types";

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export default function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (member) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [member]);

  if (!member) return null;

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="m-auto max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-0 backdrop:bg-black/50"
    >
      <div className="p-6 sm:p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="float-right cursor-pointer text-2xl text-brand-gray-light hover:text-brand-red transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="flex flex-col gap-6 sm:flex-row">
          {/* Photo */}
          <div className="relative h-[280px] w-[220px] shrink-0 self-center overflow-hidden rounded-lg sm:self-start">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover"
              sizes="220px"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="font-heading text-2xl font-semibold text-brand-dark">
              {member.name}
            </h2>
            <p className="mt-1 font-heading text-lg text-brand-red">
              {member.role}
            </p>

            {member.certifications && member.certifications.length > 0 && (
              <div className="mt-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-gray-light">
                  Certifications
                </p>
                <ul className="mt-1 space-y-0.5">
                  {member.certifications.map((cert) => (
                    <li key={cert} className="text-sm text-brand-gray">
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Bio */}
        <p className="mt-6 leading-relaxed text-brand-gray-light">
          {member.bio}
        </p>
      </div>
    </dialog>
  );
}
