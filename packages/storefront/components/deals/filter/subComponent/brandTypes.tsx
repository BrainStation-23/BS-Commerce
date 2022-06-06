import type { NextComponentType } from "next";
import React, { useState } from "react";
import CounterElement from "./counterElement";
import radio from "../../../../styles/radioButton.module.css";
const BrandTypeOptions: NextComponentType = () => {
  const availableOptions = [
    { id: 4343, meta: { name: "A Type Vegetable" } },
    { id: 4534, meta: { name: "B Type Vegetable" } },
    { id: 4633, meta: { name: "C Type Vegetable" } },
    { id: 45643, meta: { name: "D Type Vegetable" } },
    { id: 34564, meta: { name: "E Type Vegetable" } },
    { id: 45332, meta: { name: "F Type Vegetable" } },
    { id: 45430, meta: { name: "G Type Vegetable" } },
    { id: 343490, meta: { name: "H Type Vegetable" } },
  ];
  const [brandTypesOptionVal, setBrandTypesOptionVal] = useState("");
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
                  value={brandTypesOptionVal}
                  onChange={(e) => setBrandTypesOptionVal(e.target.value)}
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

export default BrandTypeOptions;
