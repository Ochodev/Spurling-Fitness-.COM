import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "filled" | "outlined";
  className?: string;
  size?: "default" | "large";
}

export default function Button({
  href,
  children,
  variant = "filled",
  className = "",
  size = "default",
}: ButtonProps) {
  const base =
    "inline-block font-heading font-normal uppercase tracking-wider no-underline transition-colors text-center";

  const sizes = {
    default: "px-6 py-3 text-[15px] rounded-[5px]",
    large: "px-8 py-4 text-[31px] rounded-[5px]",
  };

  const variants = {
    filled:
      "bg-brand-red text-white hover:bg-brand-red-dark",
    outlined:
      "border-2 border-brand-red text-brand-red bg-transparent hover:bg-brand-red hover:text-white rounded-[3px]",
  };

  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
