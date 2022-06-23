import { NextComponentType } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { products } from "../../allData/product-data.json";
import Breadcrumb from "@/components/global/breadcrumbs/breadcrumb";
import ProductDescription from "./productDescription";
import ProductImagesSlider from "./product-image-slider";
import { useRouter } from "next/router";

import { Product } from "models";
interface SingleProduct {
  product: Product;
}

const ProductDetailsComponent = ({ product }: SingleProduct) => {
  //const { query } = useRouter();

  //const product = products.find((product) => product.id === Number(query.pid));
  var isAvailable = true;
  //if (product.stock > 0) isAvailable = true;
  var disableDecrement = false;
  var disableIncrement = false;
  let i = 0;

  const [size, setSize] = useState("s");
  const [color, setColor] = useState("white");
  const [amount, setAmount] = useState(1);
  const [cart, setCart] = useState([{}]);
  const [wishlist, setWishlist] = useState([]);
  const [clicked, setClicked] = useState(false);

  const toCart = () => {
    setCart([...cart, { ...`${product.info.id}`, amount }]);
  };

  const toWishlist = () => {
    setWishlist([...wishlist, `${product.info.id}`]);
    setClicked(true);
  };

  return (
    <>
      <Breadcrumb
        title={product.info.name}
        pathArray={["Home", product.info.name]}
        linkArray={["/home", "/product" + product.id]}
      />
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div>
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full">
                <div className="relative inset-0 bg-cover bg-center z-0">
                  <ProductImagesSlider product={product}></ProductImagesSlider>
                </div>
              </div>
              <div className="lg:w-1/2 w-full lg:pl-5 ">
                <h2 className="text-gray-900 text-xl title-font font-normal mb-1">
                  {product.info.name}
                </h2>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <div className="flex mb-1 mt-2"></div>
                <div className="text-gray-900 ml-1 mb-1 mt-2">
                  <span className="text-sm">Vendor: {product.vendor}</span>
                  <span className="text-sm ml-2 mr-2">|</span>
                  <span className="text-sm">SKU: {product.info.sku}</span>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-green-600 mt-2 mb-2 ml-1">
                    ${product.info.price}
                  </span>
                </div>
                <div className="flex">
                  <span className="text-gray-900 ml-1 mb-1 mt-2 text-sm">
                    Availability:
                  </span>
                  {isAvailable ? (
                    <span className="text-green-600 ml-2 mb-1 mt-2 text-sm">
                      {product.stock} left in stock
                    </span>
                  ) : (
                    <span className="text-green-600 ml-2 mb-1 mt-2 text-sm">
                      Out of stock
                    </span>
                  )}
                </div>

                <p className="text-gray-900 text-sm ml-1 mb-1 mt-2">
                  {product.info.fullDescription}
                </p>
                {product.info.size && (
                  <div className="flex mt-2 items-center mb-2">
                    <div className="flex ml-1 items-center">
                      <span className="mr-3">Size:</span>
                      <div className="flex">
                        <button
                          onClick={() => setSize("s")}
                          className="hover:text-green-600 m-2"
                        >
                          s
                        </button>
                        <button
                          onClick={() => setSize("m")}
                          className="hover:text-green-600 m-2"
                        >
                          m
                        </button>
                        <button
                          onClick={() => setSize("l")}
                          className="hover:text-green-600 m-2"
                        >
                          l
                        </button>
                        <button
                          onClick={() => setSize("xl")}
                          className="hover:text-green-600 m-2"
                        >
                          xl
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {product.info.color && (
                  <div className="flex mt-2 items-center mb-2">
                    <div className="flex">
                      <span className="mr-3">Color:</span>
                      <button
                        onClick={() => setColor("white")}
                        className="border-2 border-gray-300 w-6 h-6 active:outline"
                      ></button>
                      <button
                        onClick={() => setColor("black")}
                        className="border-2 border-gray-300 ml-3 bg-gray-700 w-6 h-6 active:outline"
                      ></button>
                      <button
                        onClick={() => setColor("red")}
                        className="border-2 border-gray-300 ml-3 bg-red-500 w-6 h-6 active:outline"
                      ></button>
                    </div>
                  </div>
                )}

                <div className="lg:w-fit flex flex-wrap">
                  <div className="flex ml-1 mr-3 mt-4 title-text items-center">
                    Quantity
                    <div className="m-1 border-2 border-gray-300 rounded px-auto ">
                      <button
                        onClick={() => setAmount(amount - 1)}
                        {...(amount <= 1 ? (disableDecrement = true) : null)}
                        disabled={disableDecrement}
                        className="m-2"
                      >
                        -
                      </button>
                      <span className="m-2">{amount}</span>
                      <button
                        onClick={() => setAmount(amount + 1)}
                        {...(amount >= product.stock
                          ? (disableIncrement = true)
                          : null)}
                        disabled={disableIncrement}
                        className="m-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {isAvailable ? (
                    <button
                      onClick={toCart}
                      className="mt-4 ml-10 text-white bg-green-600 px-10 rounded focus:outline-none hover:bg-gray-600"
                      type="button"
                      data-modal-toggle="popup-modal"
                    >
                      Add to cart
                    </button>
                  ) : (
                    <button
                      disabled={true}
                      className="mt-4 ml-10 text-white bg-green-600 px-10 rounded focus:outline-none hover:bg-gray-600"
                    >
                      Soldout
                    </button>
                  )}
                </div>
                <div className="lg:w-fit flex flex-wrap">
                  <Link href="/cart" passHref>
                    <button
                      disabled={!isAvailable}
                      className="rounded mt-5 ml-1 bg-gray-600 lg:px-48 md:px-32 px-20 py-1 text-white hover:bg-green-400 transition duration-200 ease-out hover:ease-in	"
                    >
                      Buy Now
                    </button>
                  </Link>
                </div>
                <div className="ml-1 text-grey-700">
                  <div>
                    <button
                      onClick={toWishlist}
                      className="hover:text-green-600 mt-10"
                    >
                      {clicked ? "Added to wishlist" : "+ Add to wishlist"}
                    </button>
                  </div>
                  <div>
                    <button className="hover:text-green-600 mt-2">
                      + Compare
                    </button>
                  </div>
                  <div>
                    <button className=" flex hover:text-green-600 mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Ask about this product
                    </button>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <ProductDescription product={product}></ProductDescription>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsComponent;
