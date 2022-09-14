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
}: IButton) => {
  const style =
    size === "sm" ? "text-sm" : size === "md" ? "text-base" : "text-lg";
  const bgColor = primary ? "bg-blue-600" : "bg-blue-500";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`my-2 rounded bg-green-600/100 py-2 px-4 text-white hover:bg-black  ${style}`}
    >
      {label}
    </button>
  );
};
