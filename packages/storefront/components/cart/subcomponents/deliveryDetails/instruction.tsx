import type { NextComponentType } from "next";
import React, { useState } from "react";

const DeilveryInstructions: NextComponentType = () => {
  return (
    <>
      <div>
        <div className="max-w-xl  overflow-hidden shadow-lg">
          <div className="bg-black w-full">
            <div className="text-white px-4 py-2 text-base font-medium">
              SPECIAL INSTRUCTIONS FOR SELLER
            </div>
          </div>
          <div className="p-6 pb-12">
            <div>
              <span>
                <input
                  className="shadow appearance-none border rounded w-full h-36 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
