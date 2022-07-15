import React from 'react';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
  const mode = primary ? 'hustlejs-button--primary' : 'hustlejs-button--secondary';
  return (
    <button type='button' className={['hustlejs-button', `hustlejs-button--${size}`, mode].join(' ')} style={{ backgroundColor }} {...props}>
      {label}
    </button>
  );
};
