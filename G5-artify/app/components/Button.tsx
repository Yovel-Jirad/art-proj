'use client';

import { IconType } from "react-icons";

// Define the props interface for the Button component
interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  custom?: string; 
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// Button component definition
const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  outline, 
  small,
  custom,
  icon: Icon,
  onClick,
}) => {
  // Render a button element with dynamic classNames and onClick event handler
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center gap-2
        w-full rounded-full
        transition-all duration-300 ease-in-out
        ${disabled ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"}
        ${outline ? "border-2 border-cyan-600 text-cyan-600 bg-transparent" : "bg-cyan-600 text-white"}
        ${small ? "text-sm font-light py-1 px-3" : "text-md font-bold py-3 px-6"}
        ${custom ? custom : ''}
      `}
    >
      {/* Render the icon if it exists */}
      {Icon && <Icon size={24} />}
      {label} {/* Render the button label */}
    </button>
  );
};

export default Button;
