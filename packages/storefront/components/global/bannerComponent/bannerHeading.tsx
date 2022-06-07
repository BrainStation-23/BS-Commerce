import { FC } from "react";

interface Props {
  largeHeading: string;
  largeHeadingText: string;
  largeHeadingColor?: string;
  smallHeading: string;
  smallHeadingText: string;
  smallHeadingColor?: string;
  mediumHeading: string;
  mediumHeadingText: string;
  mediumHeadingColor?: string;
}

const BannerHeading: FC<Props> = (props: any) => {
  const {
    largeHeading,
    largeHeadingText,
    largeHeadingColor,
    smallHeading,
    smallHeadingText,
    smallHeadingColor,
    mediumHeading,
    mediumHeadingText,
    mediumHeadingColor,
  } = props;
  return (
    <div className="absolute m-5 left-16 top-5 sm:top-5 md:top-5 lg:top-5 md:left-24 lg:left-56">
      {smallHeading && (
        <p
          className={`${smallHeadingColor} text-normal sm:text-normal md:text-normal lg:text-lg xl:text-lg font-normal mb-2`}
        >
          {smallHeadingText}
        </p>
      )}
      {largeHeading && (
        <p
          className={`${largeHeadingColor} text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl font-normal lg:mb-2`}
        >
          {largeHeadingText}
        </p>
      )}
      {mediumHeading && (
        <p
          className={`${mediumHeadingColor} text-normal sm:text-normal md:text-normal lg:text-3xl xl:text-3xl font-normal`}
        >
          {mediumHeadingText}
        </p>
      )}
    </div>
  );
};

export default BannerHeading;
