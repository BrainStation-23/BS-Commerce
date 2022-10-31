interface Props {
  text: string;
  textColor: string;
  textSize: string;
  fontWeight: string;
  margin: string;
}

const BannerBodyText: React.FC<Props> = (props) => {
  const { text, textColor, textSize, fontWeight, margin } = props;
  return (
    <div>
      <p className={`${textColor} ${textSize} ${fontWeight} ${margin}`}>{text}</p>
    </div>
  );
};

export default BannerBodyText;
