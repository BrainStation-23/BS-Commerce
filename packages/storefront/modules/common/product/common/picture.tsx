import myImageLoader from 'image/loader';
import Image from 'next/image';

interface props {
  height: number;
  width: number;
  src: string;
  alt: string;
  classes?: string;
}
const Picture = ({ height, width, src, alt, classes }: props) => {
  return (
    <Image
      className={`${classes}`}
      loader={myImageLoader}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Picture;
