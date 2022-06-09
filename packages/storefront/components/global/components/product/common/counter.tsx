import React from "react";

const Counter = (props: any) => {
  const { time }: any = props;
  return (
    <div className="rounded flex flex-wrap mb-0 justify-center">
      <div className="bg-white px rounded m-1 p-2.5">
        <p className="text-xl text-center">{time.day}</p>
        <p className="p-2.0 text-xl">Days</p>
      </div>

      <div className="bg-white px rounded m-1 p-2.5">
        <p className="text-xl text-center">{time.hour}</p>
        <p className="p-2.0 text-xl">Hour</p>
      </div>

      <div className="bg-white px rounded m-1 p-2.5">
        <p className="text-xl text-center">{time.min}</p>
        <p className="p-2.0 text-xl">Mint</p>
      </div>

      <div className="bg-white px rounded m-1 p-2.5">
        <p className="text-xl text-center">{time.sec}</p>
        <p className="p-2.0 text-xl">Sec</p>
      </div>
    </div>
  );
};

export default Counter;
