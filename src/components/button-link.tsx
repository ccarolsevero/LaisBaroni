import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "peach";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-mid",
  secondary: "bg-transparent text-ink ring-1 ring-ink/20 hover:bg-white",
  ghost: "bg-transparent text-white ring-1 ring-white/30 hover:bg-white/10",
  peach: "bg-peach text-ink hover:bg-[#edd0b0]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] font-medium tracking-[0.04em] transition-colors duration-200 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
