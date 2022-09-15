import React from 'react';
interface props {
  time: {
    day: string;
    hour: string;
    min: string;
    sec: string;
  };
}
const Counter = ({ time }: props) => {
  return (
    <div className="mb-0 flex flex-wrap justify-center rounded">
      <div className="px m-1 rounded bg-white p-2.5">
        <p className="text-center text-xl">{time.day}</p>
        <p className="p-2.0 text-xl">Days</p>
      </div>

      <div className="px m-1 rounded bg-white p-2.5">
        <p className="text-center text-xl">{time.hour}</p>
        <p className="p-2.0 text-xl">Hour</p>
      </div>

      <div className="px m-1 rounded bg-white p-2.5">
        <p className="text-center text-xl">{time.min}</p>
        <p className="p-2.0 text-xl">Mint</p>
      </div>

      <div className="px m-1 rounded bg-white p-2.5">
        <p className="text-center text-xl">{time.sec}</p>
        <p className="p-2.0 text-xl">Sec</p>
      </div>
    </div>
  );
};

export default Counter;
