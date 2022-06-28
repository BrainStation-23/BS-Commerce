import Link from "next/link";
import { ReactChild } from "react";
import Button from "../button/button";

interface BannerProps {
    bg?: string;
    width?: string;
    height?: string;
    buttonText?: string;
    position?: string;
    linkhref: string;
    buttonPosition?: string;
    buttonEdge?: string;
    hasButton?: boolean;
    hasHeading?: boolean;
    heading?: ReactChild;
    hasBodyText?: boolean;
    bodyText?: ReactChild;
    buttonPadding?: string;
    buttonMargin?: string;
    buttonBg?: string;
    onHover?: string;
    buttonTextColor?: string;
}

const Banner: React.FC<BannerProps> = (props) => {
  const {
    bg,
    width,
    height,
    buttonText,
    position,
    linkhref,
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
    buttonTextColor,
  } = props;
  return (
    <div className={`${position} ${bg} ${width} ${height}`}>
      {hasBodyText && <>{bodyText}</>}
      {hasHeading && <>{heading}</>}

      {hasButton && (
        <Link href={linkhref} passHref>
          <a>
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
          </a>
        </Link>
      )}
    </div>
  );
};

export default Banner;
