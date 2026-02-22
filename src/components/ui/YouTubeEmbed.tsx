"use client";

import { useState } from "react";
import Image from "next/image";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  /** Custom poster image path; falls back to YouTube thumbnail */
  poster?: string;
  className?: string;
}

export default function YouTubeEmbed({
  videoId,
  title = "Video",
  poster,
  className = "",
}: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(
    poster ?? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  );

  if (playing) {
    return (
      <div className={`relative aspect-video w-full overflow-hidden rounded-lg ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className={`group relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg bg-black ${className}`}
      aria-label={`Play ${title}`}
    >
      <Image
        src={thumbSrc}
        alt={title}
        fill
        className="object-cover transition-opacity group-hover:opacity-80"
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => {
          if (!poster) {
            setThumbSrc(
              `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            );
          }
        }}
      />
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/90 transition-transform group-hover:scale-110">
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="ml-1 h-7 w-7"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
