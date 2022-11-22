import Image from 'next/legacy/image';
import myImageLoader from 'image/loader';
import React from 'react';
interface props {
  height: number;
  width: number;
  src: string;
  alt: string;
}
const Picture = ({ height, width, src, alt }: props) => {
  return (
    <Image
      loader={myImageLoader}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Picture;
