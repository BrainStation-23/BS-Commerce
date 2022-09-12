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
   * Button type
   */
  type?: "button" | "submit" | "reset";
  /**
   * Button click handler
   */
  onClick?: () => void;

  className?: string;
  disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<IButton> = ({
  primary = false,
  label,
  size = "md",
  type = "button",
  onClick,
  className,
  disabled = false,
}: IButton) => {
  const style =
    size === "sm" ? "text-sm" : size === "md" ? "text-base" : "text-lg";
  const bgColor = primary ? "bg-blue-600" : "bg-blue-500";
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
