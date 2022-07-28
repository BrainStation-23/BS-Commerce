import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 2,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      {backToTopButton && (
        <button
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            height: '50px',
            width: '50px',
            fontSize: '50px',
          }}
          onClick={scrollUp}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 rounded-full bg-white "
            viewBox="0 0 20 20"
            fill="#40a944"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
