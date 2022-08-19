export interface IButton {
  /**
   * Primary button attribute
   */
  primary?: boolean;
  /**
   * Button label
   */
  label: string;
  /**
   * Button size
   */
  size?: "sm" | "md" | "lg";
  /**
   * Button click handler
   */
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<IButton> = ({
  primary = false,
  label,
  size = "md",
  onClick,
}: IButton) => {
  const style =
    size === "sm" ? "text-sm" : size === "md" ? "text-base" : "text-lg";
  const bgColor = primary ? "bg-blue-600" : "bg-blue-500";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded py-2 px-4 font-bold text-white hover:bg-blue-700 ${bgColor} ${style}`}
    >
      {label}
    </button>
  );
};

export default Button;
