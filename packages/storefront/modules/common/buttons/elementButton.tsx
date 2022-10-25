import React, { ReactElement } from 'react';
interface Props {
  onClickFunction?: Function;
  childreen: ReactElement;
  className?: string;
}

const ElementButton: React.FC<Props> = ({
  onClickFunction,
  childreen,
  className,
}) => {
  return (
    <button
      className={` ${className}`}
      onClick={() => {
        onClickFunction && onClickFunction();
      }}
    >
      {childreen}
    </button>
  );
};

export default ElementButton;
