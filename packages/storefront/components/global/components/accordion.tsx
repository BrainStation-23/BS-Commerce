import React, { FC, useState } from 'react';
interface Props {
  title: string;
  body: string;
}

//Need to pass the Accordion object props to the Accordion component
const Accordion: FC<Props> = ({ title, body }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mb-3">
      <div
        className={`transition-all duration-1000 ${
          isActive ? 'rounded-t-lg bg-primary text-white' : ''
        } z-10 flex cursor-pointer justify-between p-3`}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {
        <div
          className={`z-0 origin-top overflow-hidden p-4 transition-all duration-700 ${
            isActive
              ? 'translate-y h-max border border-solid border-slate-300'
              : 'translate-y h-0 p-0 '
          }`}
        >
          {body}
        </div>
      }
    </div>
  );
};

export default Accordion;
