const BannerBodyText = (props: any) => {
  const { text, textColor, textSize, fontWeight, margin } = props;
  return (
    <div>
      <p className={`${textColor} ${textSize} ${fontWeight} ${margin}`}>{text}</p>
    </div>
  );
};

export default BannerBodyText;
