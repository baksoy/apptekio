interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

// Subtle entrance animation that plays on mount via CSS (animation-fill-mode:
// both keeps the element hidden during its delay, then settles fully visible).
// Content is never gated behind scroll/JS observers, so it always renders — and
// prefers-reduced-motion disables the motion entirely (see index.css).
export default function Reveal({ children, className = '', delay = 0, as = 'div' }: RevealProps) {
  const Tag = as as React.ElementType;
  return (
    <Tag style={{ animationDelay: `${delay}ms` }} className={`animate-rise ${className}`}>
      {children}
    </Tag>
  );
}
