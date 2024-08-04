import { IconType } from "react-icons";

// Define the props interface for the ActionBtn component
interface ActionBtnProps {
  icon: IconType; // Icon component to be displayed on the button
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // onClick event handler function
  disabled?: boolean; // Optional prop to disable the button
}

// ActionBtn component definition
const ActionBtn: React.FC<ActionBtnProps> = ({
  icon: Icon,
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center
        w-[40px] h-[40px] 
        rounded-full
        transition-all duration-300 ease-in-out
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"}
        bg-cyan-600 text-white
      `}
    >
      {/* Render the Icon component with size */}
      <Icon size={20} />
    </button>
  );
};

export default ActionBtn;
