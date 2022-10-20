import React, { useState } from 'react';
import type { NextComponentType } from 'next';

import CounterElement from '@/modules/cateoryProducts/filter/subComponent/counterElement';
import radio from 'styles/radioButton.module.css';

const ColourTypeOptions: NextComponentType = () => {
  const availableOptions = [
    { id: 32320, meta: { name: 'Red' } },
    { id: 435, meta: { name: 'Yellow' } },
    { id: 6787, meta: { name: 'Violet' } },
    { id: 45458, meta: { name: 'Green' } },
    { id: 4545670, meta: { name: 'Pink' } },
    { id: 5467, meta: { name: 'Maroon' } },
    { id: 556009, meta: { name: 'White' } },
  ];
  const [availibityColorOptionVal, setavailibityColorOptionVal] = useState('');
  return (
    <>
      <div className="py-4">
        <CounterElement />
      </div>
      <div className={radio.custom}>
        {availableOptions.map((option) => {
          return (
            <div key={option.id}>
              <div className="flex justify-between py-1">
                <input
                  id={option.id + ''}
                  type="radio"
                  name={option.meta.name}
                  value={availibityColorOptionVal}
                  onChange={(e) => setavailibityColorOptionVal(e.target.value)}
                />
                <label
                  htmlFor={option.id + ''}
                  className="flex cursor-pointer items-center"
                >
                  {option.meta.name}
                </label>
                <div>(3)</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ColourTypeOptions;
