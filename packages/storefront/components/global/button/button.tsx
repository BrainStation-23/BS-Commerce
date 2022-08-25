interface Props {
  buttonText?: string;
  textColor?: string;
  type?: 'button' | 'submit' | 'reset';
  onHover?: string;
  bg?: string;
  edge?: string;
  padding?: string;
  margin?: string;
  responsiveProps?: string;
  position?: string;
}

const Button: React.FC<Props> = ({
  buttonText,
  textColor,
  type = 'button',
  onHover,
  bg,
  edge,
  padding,
  margin,
  responsiveProps,
  position,
}: Props) => {
  return (
    <button
      type={type}
      className={`${position} ${textColor} ${bg} hover:${onHover} ${padding} ${margin} ${edge} ${responsiveProps}`}
    >
      {buttonText}
    </button>
  );
};
export default Button;
