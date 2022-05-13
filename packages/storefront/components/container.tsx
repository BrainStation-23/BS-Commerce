import { FC } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: FC<Props> = ({ children, className }) => {
  return (
    <div className={`${className} container px-4 px-lg-5`}>{children}</div>
  );
};

export default Container;
