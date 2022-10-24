import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import UpArrowIcon from '../../icons/upArrowIcon';

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
          className="rounded-full border-2 border-white bg-primary dark:bg-dark_primary"
          style={{
            position: 'fixed',
            bottom: '65px',
            right: '30px',
            height: '40px',
            width: '40px',
            // fontSize: '20px',
            zIndex: '50',
          }}
          onClick={scrollUp}
        >
          <UpArrowIcon />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
