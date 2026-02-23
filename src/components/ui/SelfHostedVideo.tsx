"use client";

import { useState } from "react";

interface SelfHostedVideoProps {
  src: string;
  poster?: string;
  label?: string;
  className?: string;
}

export default function SelfHostedVideo({
  src,
  poster,
  label,
  className = "",
}: SelfHostedVideoProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <video
        src={src}
        poster={poster}
        controls
        playsInline
        preload="none"
        className="aspect-[4/5] w-full object-cover"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      {label && !playing && (
        <span className="pointer-events-none absolute bottom-16 left-4 font-heading text-3xl font-bold uppercase text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] sm:text-4xl">
          {label}
        </span>
      )}
    </div>
  );
}
