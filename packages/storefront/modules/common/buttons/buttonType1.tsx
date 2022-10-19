import React from 'react';
interface Props {
  onClickFunction?: Function;
  text?: string;
  disabled?: boolean;
  className?: string;
}

const ButtonType1: React.FC<Props> = ({
  onClickFunction,
  text,
  disabled,
  className,
}) => {
  return (
    <button
      className={`p-2 w-full bg-slate-300 hover:bg-primary hover:text-white dark:text-black dark:hover:bg-dark_primary dark:hover:text-white ${className}`}
      onClick={() => {
        onClickFunction && onClickFunction();
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonType1;
