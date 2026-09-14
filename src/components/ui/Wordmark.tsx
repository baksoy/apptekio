interface WordmarkProps {
  className?: string;
}

// APPTEK wordmark: a small "week peak" mark + the name.
export default function Wordmark({ className = '' }: WordmarkProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink"
        aria-hidden="true"
      >
        <svg width="18" height="18" viewBox="0 0 64 64" fill="none">
          <path
            d="M20 42 L32 20 L44 42"
            stroke="#7FAE89"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M25 36 L39 36" stroke="#D07E4F" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-tight text-ink">
        apptek<span className="text-moss-500">.</span>
      </span>
    </span>
  );
}
