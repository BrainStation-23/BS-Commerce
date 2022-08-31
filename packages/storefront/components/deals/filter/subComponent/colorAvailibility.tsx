import type { NextComponentType } from "next";
import React, { useState } from "react";
import CounterElement from "./counterElement";
import radio from "../../../../styles/radioButton.module.css";
const ColourTypeOptions: NextComponentType = () => {
  const availableOptions = [
    { id: 32320, meta: { name: "Red" } },
    { id: 435, meta: { name: "Yellow" } },
    { id: 6787, meta: { name: "Violet" } },
    { id: 45458, meta: { name: "Green" } },
    { id: 4545670, meta: { name: "Pink" } },
    { id: 5467, meta: { name: "Maroon" } },
    { id: 556009, meta: { name: "White" } },
  ];
  const [availibityColorOptionVal, setavailibityColorOptionVal] = useState("");
  return (
    <>
      <div className="py-2">
        <CounterElement />
      </div>
      <div className={radio.custom}>
        {availableOptions.map((option) => {
          return (
            <div key={option.id}>
              <div className="flex justify-between py-4">
                <input
                  id={option.id + ""}
                  type="radio"
                  name={option.meta.name}
                  value={availibityColorOptionVal}
                  onChange={(e) => setavailibityColorOptionVal(e.target.value)}
                />
                <label
                  htmlFor={option.id + ""}
                  className="flex items-center cursor-pointer"
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
