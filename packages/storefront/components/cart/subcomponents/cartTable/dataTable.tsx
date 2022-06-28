import type { NextComponentType } from "next";
import React, { useState } from "react";
import Buttons from "../../../global/components/buttons/button";
import Image from "next/image";
// import cartDatas from "../../../../allData/cart-data.json";
import { useAppDispatch, useAppSelector } from "customHooks/hooks";
import { userAPI } from "APIs";
import Link from "next/link";
import { useRouter } from "next/router";
import TableData from "./tableData";
import { deleteCart } from "toolkit/cartSlice";

const DataTable = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const cartData = useAppSelector(
        (state) => state.persistedReducer.cart.allCartItems
    );
    // console.log("From Data Table", cartData);
   
    return (
        <>
            <div className="md:px-2 lg:px-20 xl:px-30 2xl:40 py-20">
                <table className="border-collapse border border-slate-400">
                    <thead className="">
                        <tr>
                            <th className="border-0 border-slate-300 border-b border-green-600 px-16 py-4 md:px-8 text-base bg-slate-200">
                                Image
                            </th>
                            <th className="border border-slate-300 md:px-2 xl:px-10 py-4 text-base bg-slate-200">
                                Product
                            </th>
                            <th className="border border-slate-300 px-10 py-4 text-base bg-slate-200">
                                Price
                            </th>
                            <th className="border border-slate-300 md:px-2 xl:px-10 py-4 text-base bg-slate-200">
                                Quantity
                            </th>
                            <th className="border border-slate-300 md:px-2 xl:px-6 py-4 text-base bg-slate-200">
                                Total
                            </th>
                            <th className="border border-slate-300 md:px-2 xl:px-10 py-4 text-base bg-slate-200">
                                Remove
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableData />
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th className="p-4">
                                <Buttons
                                    bgColor="black"
                                    height={10}
                                    width={120}
                                    text={"UPDATE CART"}
                                />
                            </th>
                            <th className="p-4">
                                <Buttons
                                    bgColor="black"
                                    height={10}
                                    width={150}
                                    text={"CONTINUE SHOPPING"}
                                />
                            </th>
                            <th className="p-4">
                                <button
                                    style={{ background: "black", color: "white", height: "39px", width: "120px"}}
                                    // bgColor="black"
                                    // height={12}
                                    // width={120}
                                    // text={"CLEAR CART"}
                                    className="text-xs"
                                    onClick={() => {
                                        userAPI.deleteAllCartItem();
                                        dispatch(deleteCart());
                                        // location.href =
                                        //     "http://localhost:3002/home";
                                        // router.push('/cart');
                                    }}
                                >
                                    CLEAR CART
                                </button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default DataTable;
