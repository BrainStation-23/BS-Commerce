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
    <div>
      {smallHeading && (
        <p
          className={`${smallHeadingColor} sm:text-normal lg:text-lg font-normal absolute m-5 sm:top-5 lg:top-0 sm:left-0 lg:left-10`}
        >
          {smallHeadingText}
        </p>
      )}
      {largeHeading && (
        <p
          className={`${largeHeadingColor} sm:text-3xl lg:text-5xl font-normal absolute m-5 sm:top-12 lg:top-7 sm:left-0 lg:left-10`}
        >
          {largeHeadingText}
        </p>
      )}
      {mediumHeading && (
        <p
          className={`${mediumHeadingColor} sm:text-normal lg:text-3xl font-normal absolute m-5 sm:top-20 lg:top-20 sm:left-0 lg:left-10`}
        >
          {mediumHeadingText}
        </p>
      )}
    </div>
  );
};

export default BannerHeading;
