import React from 'react';
interface Props {
  onClickFunction?: Function;
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const ButtonType1: React.FC<Props> = ({
  onClickFunction,
  text,
  disabled,
  className,
  type,
}) => {
  return (
    <>
      {onClickFunction ? (
        <button
          className={`w-full bg-slate-300 p-2 hover:bg-primary hover:text-white dark:text-black dark:hover:bg-dark_primary dark:hover:text-white ${className}`}
          onClick={() => {
            onClickFunction && onClickFunction();
          }}
          disabled={disabled}
          type={`${type ? type : 'button'}`}
        >
          {text}
        </button>
      ) : (
        <button
          className={`w-full bg-slate-300 p-2 hover:bg-primary hover:text-white dark:text-black dark:hover:bg-dark_primary dark:hover:text-white ${className}`}
          disabled={disabled}
          type={`${type ? type : 'button'}`}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default ButtonType1;
