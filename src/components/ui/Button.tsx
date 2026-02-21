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
    "inline-block font-heading font-normal uppercase tracking-normal no-underline transition-colors text-center";

  const sizes = {
    default: "px-[24px] py-[12px] text-[15px] leading-[15px] rounded-[5px]",
    large: "px-[24px] py-[12px] text-[31px] leading-[31px] rounded-[3px]",
  };

  const variants = {
    filled:
      "border border-brand-red bg-brand-red text-white hover:bg-brand-red-dark hover:border-brand-red-dark",
    outlined:
      "border-2 border-brand-red text-brand-red bg-transparent hover:bg-brand-red hover:text-white",
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
