import React from "react";
import Image from "next/image";

export interface ImageProps {
  src: string;
  width: string | number;
  height: string | number;
  alt: string;
  className?: any;
}

export const ImageCom: React.FC<ImageProps> = ({
  alt,
  src,
  className = "",
  height,
  width,
}) => {
  return (
    <Image
      className={className}
      alt={alt}
      src={src}
      height={height}
      width={width}
    />
  );
};
