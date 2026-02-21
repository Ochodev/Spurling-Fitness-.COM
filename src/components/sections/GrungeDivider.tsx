import Image from "next/image";

interface GrungeDividerProps {
  variant?: "white-torn" | "red-texture";
}

export default function GrungeDivider({ variant = "white-torn" }: GrungeDividerProps) {
  if (variant === "red-texture") {
    return (
      <div className="relative h-[120px] w-full sm:h-[200px] md:h-[260px] lg:h-[308px]">
        <Image
          src="/images/dividers/texture-grunge.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    );
  }

  return (
    <div
      className="relative h-[60px] w-full overflow-hidden sm:h-[80px]"
      style={{
        backgroundImage: "url(/images/dividers/wholevertical-01-mod.svg)",
        backgroundSize: "800px",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "50% 50%",
      }}
    />
  );
}
