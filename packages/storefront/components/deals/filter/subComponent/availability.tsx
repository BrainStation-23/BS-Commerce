import type { NextComponentType } from "next";
import React, { useState } from "react";
import CounterElement from "./counterElement";
import radiot from "../../../../styles/radioButton.module.css";
const AvaialabilityOptions: NextComponentType = () => {
  const availableOptions = [
    { id: 1234, meta: { name: "In Stock" } },
    { id: 4567, meta: { name: "Out of Stock" } },
  ];
  const [availibityOptionVal, setavailibityOptionVal] = useState("");
  return (
    <>
      <div className="py-2">
        <CounterElement />
      </div>
      <div className={radiot.custom}>
        {availableOptions.map((option) => {
          return (
            <div key={option.id}>
              <div className="flex justify-between py-4">
                <input
                  id={option.id + ""}
                  type="radio"
                  name={option.meta.name}
                  value={availibityOptionVal}
                  onChange={(e) => setavailibityOptionVal(e.target.value)}
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

export default AvaialabilityOptions;
