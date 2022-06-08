import type { NextComponentType } from "next";
import React, { useState } from "react";
import CounterElement from "./counterElement";
import radiott from "../../../../styles/radioButton.module.css";
const ProductTypeOptions: NextComponentType = () => {
  const availableProductTypeOptions = [
    { id: 3423423, meta: { name: "Laptops" } },
    { id: 45347, meta: { name: "Smartphones" } },
    { id: 345654, meta: { name: "Fragrances" } },
    { id: 89765, meta: { name: "Skincare" } },
    { id: 454545, meta: { name: "Groceries" } },
    { id: 555400, meta: { name: "Home-Decoration" } },
    { id: 44588, meta: { name: "Toiletries" } },
    { id: 6677691, meta: { name: "Daily Essentials" } },
    { id: 6677692, meta: { name: "Phone Accesories" } },
    { id: 6677693, meta: { name: "Dry Foods" } },
    { id: 6677690, meta: { name: "Green Vegetables" } },
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
