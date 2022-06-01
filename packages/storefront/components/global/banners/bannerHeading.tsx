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
    <div className="sm:top-5 lg:top-5 sm:left-0 lg:left-10">
      {smallHeading && (
        <p
          className={`${smallHeadingColor} sm:text-normal lg:text-lg font-normal absolute m-5 sm:top-5 lg:top-5 sm:left-0 lg:left-10`}
        >
          {smallHeadingText}
        </p>
      )}
      {largeHeading && (
        <p
          className={`${largeHeadingColor} sm:text-3xl lg:text-5xl font-normal absolute m-5 sm:top-12 lg:top-14 sm:left-0 lg:left-10`}
        >
          {largeHeadingText}
        </p>
      )}
      {mediumHeading && (
        <p
          className={`${mediumHeadingColor} sm:text-normal lg:text-3xl font-normal absolute m-5 sm:top-20 lg:top-28 sm:left-0 lg:left-10`}
        >
          {mediumHeadingText}
        </p>
      )}
    </div>
  );
};

export default BannerHeading;
