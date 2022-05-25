import type { NextComponentType } from "next";
import React, { useState } from "react";

const Date: NextComponentType = () => {
  return (
    <>
      <div>
        <div className="max-w-xl overflow-hidden shadow-lg">
          <div className="bg-black w-full">
            <div className="text-white px-4 py-2 text-base font-medium">
              DELIVERY DATE
            </div>
          </div>
          <div className="p-6">
            <div>
              <span>Pick a delivery date :</span>
              <span>
                <input
                  className="shadow appearance-none border rounded w-2/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                />
              </span>
            </div>
            <p className="mt-4">We do not deliver during the week-end</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Date;
