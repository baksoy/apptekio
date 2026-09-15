interface WordmarkProps {
  className?: string;
}

// APPTEK wordmark — "Archway" concept: an azure doorway (one front door) with a
// warm amber threshold that also reads as an "A". Colors use theme tokens so the
// logo tracks the active palette (azure + amber on the default warmed Theme C).
export default function Wordmark({ className = '' }: WordmarkProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-moss-500 shadow-sm"
        aria-hidden="true"
      >
        <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
          <path
            d="M19 48 L19 33 A13 13 0 0 1 45 33 L45 48"
            className="stroke-paper-soft"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M25 40 L39 40"
            className="stroke-clay-300"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-tight text-ink">
        apptek<span className="text-clay-400">.</span>
      </span>
    </span>
  );
}
