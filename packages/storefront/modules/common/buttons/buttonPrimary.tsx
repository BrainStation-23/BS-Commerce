import React from 'react';
interface Props {
  onClickFunction?: Function;
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  id?: string;
}

const ButtonPrimary: React.FC<Props> = ({
  onClickFunction,
  text,
  disabled,
  className,
  type,
  id,
}) => {
  return (
    <>
      {onClickFunction ? (
        <button
          id={id}
          className={`w-full bg-slate-300 p-2 transition-all duration-500 hover:bg-primary hover:text-white dark:text-black dark:hover:bg-dark_primary dark:hover:text-white ${className}`}
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
          id={id}
          className={`w-full bg-slate-300 p-2 transition-all duration-500 hover:bg-primary hover:text-white dark:text-black dark:hover:bg-dark_primary dark:hover:text-white ${className}`}
          disabled={disabled}
          type={`${type ? type : 'button'}`}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default ButtonPrimary;