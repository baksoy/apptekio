import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient: 'primary' | 'secondary';
}

const gradients = {
  primary: 'from-indigo-900 via-blue-800 to-blue-700',
  secondary: 'from-blue-600 via-indigo-500 to-purple-500'
};

export default function GradientText({ children, className = '', gradient }: GradientTextProps) {
  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r leading-tight inline-block ${gradients[gradient]} ${className}`}>
      {children}
    </span>
  );
}