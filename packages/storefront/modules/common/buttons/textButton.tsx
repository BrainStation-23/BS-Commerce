import React from 'react';
import StarIcon from '@/modules/common/icons/starIcon';
interface Props {
  onClickFunction: Function;
  text?: string;
  className?: string;
}

const TextButton: React.FC<Props> = ({ onClickFunction, text, className }) => {
  return (
    <button
      className={`mt-2 hover:text-primary dark:hover:text-dark_primary ${className}`}
      onClick={() => {
        onClickFunction();
      }}
    >
      {text}
    </button>
  );
};

export default TextButton;
