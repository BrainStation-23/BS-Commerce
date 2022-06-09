import type { NextComponentType } from "next";
const CounterElement: NextComponentType = () => {
  return (
    <>
      <div className="border border-gray-300  w-24 rounded-xl">
        <span className="p-2 text-sm">0 selected</span>
      </div>
    </>
  );
};

export default CounterElement;
