interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
  align?: "left" | "center";
}

export default function SectionHeading({
  children,
  className = "",
  as: Tag = "h2",
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <Tag
      className={`font-heading font-semibold text-brand-dark ${alignClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
