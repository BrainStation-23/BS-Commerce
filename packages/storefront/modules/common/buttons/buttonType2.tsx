import React from 'react';
interface Props {
  onClickFunction?: Function;
  text?: string;
  disabled?: boolean;
  className?: string;
}

const ButtonType2: React.FC<Props> = ({
  onClickFunction,
  text,
  disabled,
  className,
}) => {
  return (
    <button
      className={`my-1 ml-2 rounded bg-primary px-2 text-white hover:bg-gray-600 focus:outline-none dark:bg-dark_primary sm:px-12 lg:px-16 ${className}`}
      onClick={() => {
        onClickFunction && onClickFunction();
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonType2;
