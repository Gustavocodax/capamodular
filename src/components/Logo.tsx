interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'h-6 max-w-[50px]',
    md: 'h-8 max-w-[70px]',
    lg: 'h-10 max-w-[90px]',
  };

  return (
    <img
      src="/logot.svg"
      alt="Turbo Digital"
      className={`w-auto object-contain ${sizes[size]} ${className}`}
    />
  );
}
