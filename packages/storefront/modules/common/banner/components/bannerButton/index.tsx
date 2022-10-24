import ButtonType2 from "@/modules/common/buttons/buttonType2";

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
    <ButtonType2
      type={type}
      className={`${position} ${textColor} ${bg} hover:${onHover} ${padding} ${margin} ${edge} ${responsiveProps}`}
      text={buttonText}
    />
  );
};
export default Button;
