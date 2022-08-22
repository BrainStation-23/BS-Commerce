import React, { FC, useState } from 'react';
const CounterElement: FC = () => {
  return (
    <>
      <div className="w-24 rounded-xl  border border-gray-300">
        <span className="p-2 text-sm">0 selected</span>
      </div>
    </>
  );
};

export default CounterElement;
