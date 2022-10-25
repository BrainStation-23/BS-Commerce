import React from 'react';
interface Props {
  onClickFunction?: Function;
  text?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';

  className?: string;
}

const ButtonSecondary: React.FC<Props> = ({
  onClickFunction,
  text,
  disabled,
  className,
  type,
}) => {
  return (
    <button
      className={`my-1 ml-2 rounded bg-primary px-2 text-white hover:bg-gray-600 focus:outline-none dark:bg-dark_primary dark:hover:bg-slate-300 dark:hover:text-dark_bg ${className}`}
      onClick={() => {
        onClickFunction && onClickFunction();
      }}
      type={`${type ? type : 'button'}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonSecondary;
