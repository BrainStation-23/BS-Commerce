import Image from 'next/image';
import React from 'react';
interface props {
  height: number;
  src: string;
  alt: string;
}
const Picture = ({ height, src, alt }: props) => {
  return (
    <div>
      <Image src={src} alt={alt} width="100%" height={height} />
    </div>
  );
};

export default Picture;
