import type { NextComponentType } from "next";
import React, { useState } from "react";
import CounterElement from "./counterElement";
import radiott from "../../../../styles/radioButton.module.css";
const ProductTypeOptions: NextComponentType = () => {
  const availableProductTypeOptions = [
    { id: 3423423, meta: { name: "Type A" } },
    { id: 45347, meta: { name: "Type A" } },
    { id: 345654, meta: { name: "Type A" } },
    { id: 89765, meta: { name: "Type A" } },
    { id: 454545, meta: { name: "Type A" } },
    { id: 555400, meta: { name: "Type A" } },
    { id: 44588, meta: { name: "Type A" } },
    { id: 667769, meta: { name: "Type A" } },
  ];
  const [availibityProductTypeOptionVal, setavailibityProductTypeOptionVal] =
    useState("");
  return (
    <>
      <div className="py-2">
        <CounterElement />
      </div>
      <div className={radiott.custom}>
        {availableProductTypeOptions.map((availableOption) => {
          return (
            <div key={availableOption.id}>
              <div className="flex justify-between py-4">
                <input
                  id={availableOption.id + ""}
                  type="radio"
                  name={availableOption.meta.name}
                  value={availibityProductTypeOptionVal}
                  onChange={(e) =>
                    setavailibityProductTypeOptionVal(e.target.value)
                  }
                />
                <label
                  htmlFor={availableOption.id + ""}
                  className="flex items-center cursor-pointer"
                >
                  {availableOption.meta.name}
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

export default ProductTypeOptions;
