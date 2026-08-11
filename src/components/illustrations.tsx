export function LineBrain({ className = "h-28 w-28" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden>
      <path
        d="M46 22c-14 2-24 14-24 28 0 4 .8 8 2.2 11.2C16.8 64.8 12 74 12 84.5 12 97 23 107.5 36.5 110c1.2 12.5 12 22 24.8 22 7 0 13.4-2.8 18-7.4 4.6 4.6 11 7.4 18 7.4 12.8 0 23.6-9.5 24.8-22C135 107.5 146 97 146 84.5c0-10.5-4.8-19.7-12.2-23.3 1.4-3.2 2.2-7.2 2.2-11.2 0-14-10-26-24-28-4.8-8-14.2-10.5-23.5-8-6.5-6.2-17-6.2-23.5 0C56.2 14.8 50.5 18 46 22Z"
        transform="translate(-18 -14) scale(0.92)"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M60 38v48M42 54h18M42 68h18M60 54h22M60 68h22"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LineSofa({ className = "h-24 w-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 90" fill="none" className={className} aria-hidden>
      <path d="M18 52c0-10 8-18 18-18h68c10 0 18 8 18 18v18H18V52Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 58c0-7 5-12 12-12h8v24H14c-3.3 0-6-2.7-6-6V58Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M112 46h8c7 0 12 5 12 12v6c0 3.3-2.7 6-6 6h-14V46Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M36 34V22c0-6 5-11 11-11h46c6 0 11 5 11 11v12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M28 76v6M112 76v6M22 82h96" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function LineCat({ className = "h-16 w-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden>
      <circle cx="40" cy="40" r="28" stroke="currentColor" strokeWidth="1.4" />
      <path d="M28 36c0-8 5-16 12-16s12 8 12 16" stroke="currentColor" strokeWidth="1.4" />
      <path d="M32 22 28 12l8 6M48 22l4-10-8 6" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="34" cy="38" r="1.4" fill="currentColor" />
      <circle cx="46" cy="38" r="1.4" fill="currentColor" />
      <path d="M40 42v4M36 48c2.4 2 5.6 2 8 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function LineSun({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden>
      <path d="M12 52c8-18 22-28 38-28" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M18 40c6-4 10-4 16 0M28 28c4-6 10-8 18-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function LineLeaves({ className = "h-24 w-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 90" fill="none" className={className} aria-hidden>
      <path d="M20 70c8-28 28-48 52-56-4 28-22 50-52 56Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M28 62c10-8 22-12 36-14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M38 78c18-10 28-28 32-48" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function LineDesk({ className = "h-28 w-28" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden>
      <rect x="28" y="38" width="48" height="36" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M76 48h16v26H76" stroke="currentColor" strokeWidth="1.4" />
      <path d="M22 86h76M34 86v16M86 86v16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M40 52h24M40 60h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function LineMarks({ className = "h-16 w-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 56" fill="currentColor" className={className} aria-hidden>
      <path d="M12 48c8-2 14-8 14-18 0-8-4-14-12-14C8 16 4 22 4 30c0 12 8 18 20 22v-8c-6-2-12-6-12-14 0-4 2-6 6-6 4 0 6 3 6 8 0 6-4 10-12 8Z" />
      <path d="M44 48c8-2 14-8 14-18 0-8-4-14-12-14-6 0-10 6-10 14 0 12 8 18 20 22v-8c-6-2-12-6-12-14 0-4 2-6 6-6 4 0 6 3 6 8 0 6-4 10-12 8Z" />
    </svg>
  );
}
