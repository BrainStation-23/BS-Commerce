import React from 'react';
interface Props {
  onClickFunction?: Function;
  text?: string;
  disabled?: boolean;
  hidden?: boolean;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  className?: string;
}

const ButtonSecondary: React.FC<Props> = ({
  onClickFunction,
  text,
  disabled,
  className,
  type,
  id,
  hidden,
}) => {
  return (
    <button
      className={`my-1 ml-2 rounded bg-primary px-2 text-white transition-all duration-500 hover:bg-gray-600 focus:outline-none dark:bg-dark_primary dark:hover:bg-slate-300 dark:hover:text-dark_bg ${className}`}
      onClick={() => {
        onClickFunction && onClickFunction();
      }}
      hidden={hidden ? hidden : false}
      id={id}
      type={`${type ? type : 'button'}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonSecondary;
