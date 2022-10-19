import React from 'react';
import StarIcon from '@/modules/common/icons/starIcon';

const RatingStars: React.FC = () => {
  return (
    <div className="flex">
      <StarIcon fill="currentColor" />
      <StarIcon fill="currentColor" />
      <StarIcon fill="currentColor" />
      <StarIcon stroke="currentColor" />
      <StarIcon stroke="currentColor" />
    </div>
  );
};

export default RatingStars;
