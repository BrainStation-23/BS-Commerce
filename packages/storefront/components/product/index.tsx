import Link from 'next/link';
import React, { useState } from 'react';

import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { userAPI } from 'APIs';
import { Product } from 'models';
import { addToCart } from 'toolkit/cartSlice';
import { useAppDispatch, useAppSelector } from 'customHooks/hooks';

import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import ProductImagesSlider from '@/components/product/product-image-slider';
import ProductDescription from '@/components/product/productDescription';
interface SingleProduct {
  product: Product;
}

const ProductDetailsComponent: React.FC<SingleProduct> = ({
  product,
}: SingleProduct) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );

  var isAvailable = true;
  var disableDecrement = false;
  var disableIncrement = false;
  let i = 0;

  const [size, setSize] = useState('s');
  const [color, setColor] = useState('white');
  const [amount, setAmount] = useState(1);
  const [cart, setCart] = useState([{}]);
  const [wishlist, setWishlist] = useState([]);
  const [clicked, setClicked] = useState(false);

  const toCart = async (product: Product) => {
    const cartProduct = {
      id: product.id!,
      info: product.info!,
      photos: product.photos!,
    };
    const cartItem = {
      product: cartProduct!,
      productId: product.id!,
      quantity: amount,
    };
    setAmount(0);
    dispatch(addToCart(cartItem));
  };

  const toWishlist = async (id: string, quantity: number) => {
   if (token) {
      const data = {
        productId: id,
        quantity,
      };
      try {
        await userAPI.addToWishList(data);
        toast.success('Item added to wishlist');
      } catch (error) {
        toast.error('Failed to add item to wishlist');
      }
    }
    else {
      toast.error('Please login to your account first.');
      router.push('/account/sign-in')
    }
  };

  return (
    <>
      <Breadcrumb
        title={product?.info?.name}
        pathArray={['Home', product.info?.name]}
        linkArray={['/', '/product' + product.id]}
      />
      <section className="body-font overflow-hidden bg-white text-gray-700">
        <div className="container mx-auto px-5 py-24">
          <div>
            <div className="mx-auto flex flex-wrap lg:w-4/5">
              <div className="w-full lg:w-1/2">
                <div className="relative inset-0 z-0 bg-cover bg-center">
                  <ProductImagesSlider product={product}></ProductImagesSlider>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:pl-5 ">
                <h2 className="title-font mb-1 text-xl font-normal text-gray-900">
                  {product.info?.name}
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

                <div className="mb-1 mt-2 flex"></div>
                <div className="ml-1 mb-1 mt-2 text-gray-900">
                  <span className="text-sm">Vendor: {product?.vendor}</span>
                  <span className="ml-2 mr-2 text-sm">|</span>
                  <span className="text-sm">SKU: {product?.info?.sku}</span>
                </div>
                <div className="flex">
                  <span className="title-font mt-2 mb-2 ml-1 text-2xl font-medium text-green-600">
                    ${product?.info?.price}
                  </span>
                </div>
                <div className="flex">
                  <span className="ml-1 mb-1 mt-2 text-sm text-gray-900">
                    Availability:
                  </span>
                  {isAvailable ? (
                    <span className="ml-2 mb-1 mt-2 text-sm text-green-600">
                      {product?.stock} left in stock
                    </span>
                  ) : (
                    <span className="ml-2 mb-1 mt-2 text-sm text-green-600">
                      Out of stock
                    </span>
                  )}
                </div>

                <p className="ml-1 mb-1 mt-2 text-sm text-gray-900">
                  {product?.info?.fullDescription}
                </p>
                {product?.info?.size && (
                  <div className="mt-2 mb-2 flex items-center">
                    <div className="ml-1 flex items-center">
                      <span className="mr-3">Size:</span>
                      <div className="flex">
                        <button
                          onClick={() => setSize('s')}
                          className="m-2 hover:text-green-600"
                        >
                          s
                        </button>
                        <button
                          onClick={() => setSize('m')}
                          className="m-2 hover:text-green-600"
                        >
                          m
                        </button>
                        <button
                          onClick={() => setSize('l')}
                          className="m-2 hover:text-green-600"
                        >
                          l
                        </button>
                        <button
                          onClick={() => setSize('xl')}
                          className="m-2 hover:text-green-600"
                        >
                          xl
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {product?.info?.color && (
                  <div className="mt-2 mb-2 flex items-center">
                    <div className="flex">
                      <span className="mr-3">Color:</span>
                      <button
                        onClick={() => setColor('white')}
                        className="h-6 w-6 border-2 border-gray-300 active:outline"
                      ></button>
                      <button
                        onClick={() => setColor('black')}
                        className="ml-3 h-6 w-6 border-2 border-gray-300 bg-gray-700 active:outline"
                      ></button>
                      <button
                        onClick={() => setColor('red')}
                        className="ml-3 h-6 w-6 border-2 border-gray-300 bg-red-500 active:outline"
                      ></button>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap lg:w-fit">
                  <div className="title-text ml-1 mr-3 mt-4 flex items-center">
                    Quantity
                    <div className="px-auto m-1 rounded border-2 border-gray-300 ">
                      <button
                        onClick={() =>
                          setAmount(amount - 1 >= 0 ? amount - 1 : 0)
                        }
                        className="m-2"
                      >
                        -
                      </button>
                      <span className="m-2">{amount}</span>
                      <button
                        onClick={() => setAmount(amount + 1)}
                        disabled={disableIncrement}
                        className="m-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {isAvailable ? (
                    <button
                      onClick={() => toCart(product)}
                      className="mt-4 ml-10 rounded bg-green-600 px-10 text-white hover:bg-gray-600 focus:outline-none"
                      type="button"
                      data-modal-toggle="popup-modal"
                    >
                      Add to cart
                    </button>
                  ) : (
                    <button
                      disabled={true}
                      className="mt-4 ml-10 rounded bg-green-600 px-10 text-white hover:bg-gray-600 focus:outline-none"
                    >
                      Soldout
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap lg:w-fit">
                  <Link href="/cart" passHref>
                    <button
                      disabled={!isAvailable}
                      className="mt-5 ml-1 rounded bg-gray-600 px-20 py-1 text-white transition duration-200 ease-out hover:bg-green-400 hover:ease-in md:px-32 lg:px-48	"
                    >
                      Buy Now
                    </button>
                  </Link>
                </div>
                <div className="text-grey-700 ml-1">
                  <div>
                    <button
                      onClick={() => toWishlist(product?.id, 1)}
                      className="mt-10 hover:text-green-600"
                    >
                      {clicked ? 'Added to wishlist' : '+ Add to wishlist'}
                    </button>
                  </div>
                  <div>
                    <button className="mt-2 hover:text-green-600">
                      + Compare
                    </button>
                  </div>
                  <div>
                    <button className=" mt-2 flex hover:text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-6 w-6"
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
