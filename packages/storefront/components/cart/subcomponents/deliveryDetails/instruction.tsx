import React from 'react';

import type { NextComponentType } from 'next';

const DeilveryInstructions: NextComponentType = () => {
  return (
    <>
      <div>
        <div className="overflow-hidden shadow-lg">
          <div className="w-full bg-black">
            <div className="px-4 py-2 text-base font-medium text-white">
              SPECIAL INSTRUCTIONS FOR SELLER
            </div>
          </div>
          <div className="p-6 pb-12">
            <div>
              <span>
                <input
                  className="focus:shadow-outline h-36 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                  type="text"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeilveryInstructions;
