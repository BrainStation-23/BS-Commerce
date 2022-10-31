import React, { ReactElement } from 'react';
interface Props {
  onClickFunction?: Function;
  children: ReactElement;
  className?: string;
  id?: string;
  disabled?: boolean;
}

const ElementButton: React.FC<Props> = ({
  onClickFunction,
  children,
  className,
  disabled,
  id,
}) => {
  return (
    <button
      className={` ${className}`}
      disabled={disabled ? disabled : false}
      id={id}
      onClick={() => {
        onClickFunction && onClickFunction();
      }}
    >
      {children}
    </button>
  );
};

export default ElementButton;
