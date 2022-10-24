import React from 'react';
import StarIcon from '@/modules/common/icons/starIcon';
interface Props {
  onClickFunction: Function;
  text?: string;
  className?: string;
  disabled?: boolean;
}

const TextButton: React.FC<Props> = ({
  onClickFunction,
  text,
  className,
  disabled,
}) => {
  return (
    <button
      className={`mt-2 hover:text-primary dark:hover:text-dark_primary ${className}`}
      onClick={() => {
        onClickFunction();
      }}
      disabled={disabled ? disabled : false}
    >
      {text}
    </button>
  );
};

export default TextButton;
