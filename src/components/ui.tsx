export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Pill({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex rounded-full bg-white/75 px-3.5 py-1 text-[10px] font-medium tracking-[0.16em] text-ink uppercase ${className}`}
    >
      {children}
    </span>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-medium tracking-[0.2em] text-mid uppercase">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      {title ? (
        <h2 className={`font-display text-[1.85rem] leading-[1.2] font-medium text-balance sm:text-4xl ${eyebrow ? "mt-3" : ""}`}>
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="hero-copy mt-4 text-[15px] leading-relaxed sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
