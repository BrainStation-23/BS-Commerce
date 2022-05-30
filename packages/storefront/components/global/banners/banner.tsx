import Link from "next/link";
import Button from "../button/button";

const Banner = (props: any) => {
  const {
    bg,
    width,
    height,
    buttonText,
    position,
    href,
    buttonPosition,
    buttonEdge,
    hasButton,
    hasHeading,
    heading,
    hasBodyText,
    bodyText,
    buttonPadding,
    buttonMargin,
    buttonBg,
    onHover,
    buttonTextColor
  } = props;
  return (
    <div className={`${position} ${bg} ${width} ${height}`}>
      {hasBodyText && <>{bodyText}</>}
      {hasHeading && <>{heading}</>}

      {hasButton && (
        <Link href={href} passHref>
          <Button
            position={buttonPosition}
            padding={buttonPadding}
            margin={buttonMargin}
            bg={buttonBg}
            buttonText={buttonText}
            onHover={onHover}
            textColor={buttonTextColor}
            edge={buttonEdge}
          />
        </Link>
      )}
    </div>
  );
};

export default Banner;
