import React from 'react';
import StarIcon from '@/modules/common/icons/starIcon';

interface IReview {
  name: string;
  email: string;
  message: string;
  rating: number;
}

const SingleReview: React.FC<IReview> = ({
  email,
  message,
  name,
  rating,
}: IReview) => {
  const stars = Array(5).fill(0);

  return (
    <div className="flex flex-row">
      <div className="mr-3">
        <div className="rounded-full border border-gray-600/30 p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-10 w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-semibold">{name}</span>
        <div className="flex">
          {stars.map((_, index) => (
            <span key={index}>
              {index + 1 <= rating ? (
                <StarIcon fill="currentColor" />
              ) : (
                <StarIcon stroke="currentColor" />
              )}
            </span>
          ))}
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SingleReview;
