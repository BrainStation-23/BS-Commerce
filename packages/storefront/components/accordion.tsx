import React, { FC, useState } from "react";

interface Props {
  title: string;
  body: string;
}

const Accordion: FC<Props> = ({ title, body }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mb-3">
      <div
        className={`${
          isActive ? "bg-green-500 rounded-t-lg text-white" : ""
        } flex justify-between p-3 cursor-pointer`}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="p-4 border border-slate-300 border-solid">{body}</div>
      )}
    </div>
  );
};

export default Accordion;
