const BannerHeading = (props: any) => {
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
    <div className="top-5 sm:top-5 md:top-5 lg:top-5 sm:left-0 md:left-0 lg:left-10 xl:left-10">
      {smallHeading && (
        <p
          className={`${smallHeadingColor} text-normal sm:text-normal md:text-normal lg:text-lg xl:text-lg font-normal absolute m-5 top-5 left-0 sm:left-0 md:left-0 lg:left-10 xl:left-10`}
        >
          {smallHeadingText}
        </p>
      )}
      {largeHeading && (
        <p
          className={`${largeHeadingColor} text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl font-normal absolute m-5 top-12 sm:top-12 md:top-12 lg:top-14 xl:top-14 left-0 sm:left-0 md:left-0 lg:left-10 xl:left-0`}
        >
          {largeHeadingText}
        </p>
      )}
      {mediumHeading && (
        <p
          className={`${mediumHeadingColor} text-normal sm:text-normal md:text-normal lg:text-3xl xl:text-3xl font-normal absolute m-5 top-20 sm:top-20 md:top-20 lg:top-28 xl:top-28 left-0 sm:left-0 md:left-0 lg:left-10 xl:left-10`}
        >
          {mediumHeadingText}
        </p>
      )}
    </div>
  );
};

export default BannerHeading;
