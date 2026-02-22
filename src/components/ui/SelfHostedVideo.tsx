"use client";

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
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <video
        src={src}
        poster={poster}
        controls
        playsInline
        preload="none"
        className="aspect-[4/5] w-full object-cover"
      />
      {label && (
        <span className="pointer-events-none absolute bottom-12 left-4 font-heading text-2xl font-bold uppercase text-white drop-shadow-lg sm:text-3xl">
          {label}
        </span>
      )}
    </div>
  );
}
