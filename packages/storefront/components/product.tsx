import type { GetServerSideProps, NextPage } from "next";
// import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import img from "../images/laptop2.jpg";
import img1 from "../images/laptop3.jpg";
// import { connect } from "react-redux";
// import productPic from "../public/product.jpeg";

// import { InferGetServerSidePropsType } from "next";

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const res = await fetch(`http://localhost:3000/products`);
//     const data = await res.json();
//     // console.log(data)
//     return {
//         props: {
//             products: data,
//         }, // will be passed to the page component as props
//     };
// };

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   getProducts()
// };

import { getProducts } from "../redux/product.actions";
import { useEffect } from "react";

const Product: NextPage = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const productData = useSelector((state: any) => state.productData);

    console.log("Anik", productData.data);

    return (
        <>
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 justify-items-center">
                {productData["data"] &&
                    productData["data"].length > 0 &&
                    productData.data.map((product: any) => (
                        <div className="col mb-5" key={product._id}>
                            <div className="transition duration-0 hover:duration-700 group py-3 hover:bg-white cursor-pointer">
                                <div className="rounded overflow-hidden shadow-lg max-w-sm">
                                    <div className="relative">
                                        <div className="relative w-96 h-60  text-white overflow-hidden cursor-pointer transition-all duration-700">
                                            <div className="absolute inset-0 bg-cover bg-center z-0">
                                                <Image
                                                    src={img1}
                                                    alt="laptop"
                                                    className="h-10 w-10"
                                                />
                                            </div>

                                            <div className="mb-0.5">

                                            <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-black font-semibold">
                                                <div className="bg-white px-0.1 py-0.1 rounded-full">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="mx-2.5 my-2.5 h-10 w-10 p-2 inline-block hover:bg-[#40A944] rounded-[50px] text-5xl"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={1.5}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                                        />
                                                    </svg>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="mx-2.5 my-2.5 h-10 w-10 p-2 inline-block hover:bg-[#40A944] rounded-[50px] text-5xl"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={1.5}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                        />
                                                    </svg>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="mx-2.5 my-2.5 h-10 w-10 p-2 inline-block hover:bg-[#40A944] rounded-[50px] text-5xl"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={1.5}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                        />
                                                    </svg>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="mx-2.5 my-2.5 h-10 w-10 p-2 inline-block hover:bg-[#40A944] rounded-[50px] text-5xl"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={1.5}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            </div>
                                        </div>

                                        <div className="px-6 py-4 text-center">
                                            <div className="text-inherit text-xl mb-2 font-medium">
                                                {product.name}
                                            </div>
                                            <p className="text-base text-gray-600">
                                                {product.description}
                                            </p>
                                            <br />
                                            <p className="text-lg font-medium text-green-600">
                                                ${product.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Product;
