"use client";

import { useState } from "react";

interface GoogleMapProps {
  embedUrl: string;
  title: string;
  className?: string;
}

export default function GoogleMap({
  embedUrl,
  title,
  className = "",
}: GoogleMapProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100 ${className}`}>
      {!loaded && (
        <button
          onClick={() => setLoaded(true)}
          className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-2 text-brand-gray-light hover:text-brand-red transition-colors"
          aria-label={`Load map for ${title}`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-10 w-10"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span className="text-sm font-medium">Click to load map</span>
        </button>
      )}
      {loaded && (
        <iframe
          src={embedUrl}
          title={title}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full"
        />
      )}
    </div>
  );
}
