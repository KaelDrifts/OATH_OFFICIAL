import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  variant = 'primary',
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-pixel retro-button retro-blink';
  
  const sizeClasses = {
    small: 'px-3 py-1.5 text-xs',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base'
  };
  
  const variantClasses = {
    primary: 'bg-retro-green text-retro-brown border-retro-brown',
    secondary: 'bg-retro-red text-white border-retro-brown',
    outline: 'bg-transparent border-retro-brown text-retro-brown hover:bg-retro-brown/10'
  };
  
  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;