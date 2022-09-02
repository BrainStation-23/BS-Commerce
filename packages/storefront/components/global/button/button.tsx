const Button = (props: any) => {
  const {
    buttonText,
    textColor,
    type,
    onHover,
    bg,
    edge,
    padding,
    margin,
    responsiveProps,
    position,
  } = props;

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
