import type { NextComponentType } from "next";
import React, { useState } from "react";
import Buttons from "../global/buttons";
import cartImage from "../../public/product.jpeg";
import Image from "next/image";
const Table: NextComponentType = () => {
  const [allCartList, setAllCartList] = useState([
    {
      id: Math.floor(Math.random() * 10),
      image: Image,
      meta: {
        title: "Red Spinach/500gm",
        price: "53",
      },
      qunatity: "3",
    },
    {
      id: Math.floor(Math.random() * 10),
      image: Image,
      meta: {
        title: "Cauliflower/1kg",
        price: "44",
      },
      qunatity: "2",
    },
    {
      id: Math.floor(Math.random() * 10),
      image: Image,
      meta: {
        title: "White Carrot/500gm",
        price: "24",
      },
      qunatity: "1",
    },
    {
      id: Math.floor(Math.random() * 10),
      image: Image,
      meta: {
        title: "Poatat0/500gm",
        price: "5",
      },
      qunatity: "4",
    },
  ]);
  const tableData = () => {
    return allCartList.map((data) => {
      return (
        <tr key="data.id">
          <td className="border border-slate-300 px-8 md:px-4 py-4">
            <Image
              src={cartImage}
              alt="product Image"
              width={130}
              height={120}
            />
          </td>
          <td className="border border-slate-300 md:px-4 xl:px-10 py-10">
            {data.meta.title}
          </td>
          <td className="border border-slate-300 px-6 py-14 ">
            <span className="flex justify-center"> {data.meta.price}</span>
          </td>
          <td className="border border-slate-300 md:px-4 xl:px-10 py-4">
            <div className="box-content h-4 w-20 p-4 border-4">
              <div className="flex justify-between">
                <button>+</button>
                <div>{data.qunatity}</div>
                <button>-</button>
              </div>
            </div>
          </td>
          <td className="border border-slate-300 px-8 py-14">$55.00</td>
          <td className="border border-slate-300 px-12 py-14">
            <button className="flex justify-center">X</button>
          </td>
        </tr>
      );
    });
  };
  return (
    <>
      <div className="md:px-2 lg:px-20 xl:px-30 2xl:40 py-20">
        <table className="border-collapse border border-slate-400">
          <thead className="">
            <tr>
              <th className="border-t border-slate-300 border-b border-green-600 px-16 py-4 md:px-12 text-base bg-slate-200">
                Image
              </th>
              <th className="border border-slate-300 md:px-2 xl:px-10 py-4 text-base bg-slate-200">
                Product
              </th>
              <th className="border border-slate-300 px-10 py-4 text-base bg-slate-200">
                Price
              </th>
              <th className="border border-slate-300 md:px-4 xl:px-10 py-4 text-base bg-slate-200">
                Quantity
              </th>
              <th className="border border-slate-300 px-6 py-4 text-base bg-slate-200">
                Total
              </th>
              <th className="border border-slate-300 px-10 py-4 text-base bg-slate-200">
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData()}
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th className="p-4">
                <Buttons
                  bgColor="black"
                  height={40}
                  width={120}
                  text={"UPDATE CART"}
                />
              </th>
              <th className="p-4">
                <Buttons
                  bgColor="black"
                  height={40}
                  width={150}
                  text={"CONTINUE SHOPPING"}
                />
              </th>
              <th className="p-4">
                <Buttons
                  bgColor="black"
                  height={40}
                  width={120}
                  text={"CLEAR CART"}
                />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
