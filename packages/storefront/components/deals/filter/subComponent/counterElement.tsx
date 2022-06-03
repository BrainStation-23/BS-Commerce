import type { NextComponentType } from "next";
const counterElement = () => {
  return (
    <>
      <div className="border border-gray-300 w-28 rounded-xl">
        <span className="p-4">0 selected</span>
      </div>
    </>
  );
};

export default counterElement;
