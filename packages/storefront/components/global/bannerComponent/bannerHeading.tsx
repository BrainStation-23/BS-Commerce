import { FC } from 'react';

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

const BannerHeading: FC<Props> = (props) => {
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
    <div className="xl:left-30 absolute left-0 top-5 m-5 sm:top-5 md:top-5 md:left-4 lg:top-5 lg:left-12 2xl:left-96">
      {smallHeading && (
        <p
          className={`${smallHeadingColor} text-normal sm:text-normal md:text-normal mb-2 font-normal lg:text-lg xl:text-lg`}
        >
          {smallHeadingText}
        </p>
      )}
      {largeHeading && (
        <p
          className={`${largeHeadingColor} text-3xl font-normal sm:text-3xl md:text-3xl lg:mb-2 lg:text-5xl xl:text-5xl`}
        >
          {largeHeadingText}
        </p>
      )}
      {mediumHeading && (
        <p
          className={`${mediumHeadingColor} text-normal sm:text-normal md:text-normal font-normal lg:text-3xl xl:text-3xl`}
        >
          {mediumHeadingText}
        </p>
      )}
    </div>
  );
};

export default BannerHeading;
