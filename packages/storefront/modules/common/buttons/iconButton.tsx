import React, { ReactElement } from 'react';
import StarIcon from '@/modules/common/icons/starIcon';
interface Props {
  onClickFunction?: Function;
  icon: ReactElement;
  className?: string;
}

const IconButton: React.FC<Props> = ({ onClickFunction, icon, className }) => {
  return (
    <button
      className={` ${className}`}
      onClick={() => {
        onClickFunction && onClickFunction();
      }}
    >
      {icon}
    </button>
  );
};

export default IconButton;
