import { FC } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: FC<Props> = ({ children, className = "" }) => {
  return (
    <div className={`${className} container mx-auto px-4`}>{children}</div>
  );
};

export default Container;
