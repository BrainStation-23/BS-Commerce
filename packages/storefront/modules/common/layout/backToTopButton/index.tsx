import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ElementButton from '../../buttons/elementButton';
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
        <ElementButton
          className="fixed bottom-[65px] right-[30px] z-50 h-[40px] w-[40px] rounded-full border-2 border-white bg-primary dark:bg-dark_primary"
          onClickFunction={scrollUp}
        >
          <UpArrowIcon />
        </ElementButton>
      )}
    </div>
  );
};

export default BackToTopButton;
