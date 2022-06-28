import type { NextComponentType } from "next";
import React, { useState } from "react";

interface Properties {
  bgColor: string;
  height: number;
  width: number;
  text: string;
}
const Buttons: React.FC<Properties> = (props) => {
  const getButtonClass = () => {
    if (props.bgColor == "black") {
      return `text-xs bg-black text-white px-5 py-2 w-${props.width} h-${props.height} hover:bg-green-500`;
    } else {
      return `text-xs bg-green-400 text-white px-5 py-2 w-${props.width} h-${props.height} hover:bg-black`;
    }
  };
  return (
    <>
      <div>
        <button className={getButtonClass()}>{props.text}</button>
      </div>
    </>
  );
};

export default Buttons;
