import Image from 'next/image';
import React from 'react';
interface props {
  height: number;
  width: number;
  src: string;
  alt: string;
}
const Picture = ({ height, width, src, alt }: props) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

export default Picture;
