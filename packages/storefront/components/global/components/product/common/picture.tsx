import Image from 'next/image';
import React from 'react';

const Picture = (props: any) => {
  const { height, width, src, alt }: any = props;

  return <Image src={src} alt={alt} width={width} height={height} />;
};

export default Picture;
