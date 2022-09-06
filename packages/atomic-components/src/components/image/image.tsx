export interface ImageProp {
  src: string;
  height?: string | number;
  width?: string | number;
  style?: string;
  layout?: string;
  alt: string;
  quality?: string | number;
}

/**
 * Primary UI component for user interaction
 */
export const Image: React.FC<ImageProp> = ({
  src,
  height,
  width,
  style,
  layout,
  alt,
  quality,
}) => {
  return (
    <>
      <img
        src={src}
        height={height}
        width={width}
        className={style}
        alt={alt}
      />
    </>
  );
};
