import React from 'react';

interface CharacterFloatingProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  delay?: string;
}

const CharacterFloating: React.FC<CharacterFloatingProps> = ({ 
  className = '', 
  size = 'md',
  delay = '0s'
}) => {
  const sizeClasses = {
    sm: 'h-16 w-auto',
    md: 'h-24 w-auto',
    lg: 'h-32 w-auto'
  };

  return (
    <div 
      className={`animate-float ${className}`} 
      style={{ animationDelay: delay }}
    >
      <img 
        src="/lovable-uploads/9484fc27-3615-4dac-b2fa-ba066fce7efa.png" 
        alt="Salloum Character" 
        className={`${sizeClasses[size]} opacity-80 hover:opacity-100 transition-opacity duration-300`}
      />
    </div>
  );
};

export default CharacterFloating;