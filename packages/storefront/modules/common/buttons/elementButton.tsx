import React, { ReactElement } from 'react';
interface Props {
  onClickFunction?: Function;
  children: ReactElement;
  className?: string;
}

const ElementButton: React.FC<Props> = ({
  onClickFunction,
  children,
  className,
}) => {
  return (
    <button
      className={` ${className}`}
      onClick={() => {
        onClickFunction && onClickFunction();
      }}
    >
      {children}
    </button>
  );
};

export default ElementButton;
