import type { NextComponentType } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

import { ResponseItem } from '@bs-commerce/models';
import { deleteCartItem } from 'store/slices/cartSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks/index';

import Modal from '@/modules/common/modal/modal';
import Image from 'next/image';
import myImageLoader from 'image/loader'

import { userAPI } from 'APIs';
import useTranslation from 'next-translate/useTranslation';
import ButtonPrimary from '@/modules/common/buttons/buttonPrimary';
import CrossIcon from '../../../common/icons/crossIcon';
import ElementButton from '@/modules/common/buttons/elementButton';
import CartIcon from '@/modules/common/icons/cartIcon';

const CartDropdown: NextComponentType = () => {
  const componentRef = useRef();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [cartTotal, setCartTotal] = useState(false);
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);
  const { t } = useTranslation();

  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );
  const currency = useAppSelector((state) => state.persistedReducer.currency);

  const token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );

  const totalCartPrice = cartData?.reduce((total, data) => {
    return total + data?.product?.info?.price! * data.quantity;
  }, 0);

  const handleCartItemDelete = async (product: ResponseItem) => {
    const productId = product.productId;
    await userAPI.deleteSingleCartItem(productId);
    dispatch(deleteCartItem(product));
  };

  const handleClickProceed = () => {
    if (!token) setModalOn(true);
    else {
      router.push('/checkout');
    }
  };

  const handleClickViewCart = () => {
    if (!token) setModalOn(true);
    else {
      router.push('/cart');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
    function handleClick(e: MouseEvent) {
      if (componentRef && componentRef.current) {
        const ref: any = componentRef.current;
        if (!ref.contains(e.target)) {
          setCartTotal(false);
        }
      }
    }
  }, []);
  const dropdownData = () => {
    return cartData?.map((cartData, index) => {
      return (
        <div key={cartData.productId}>
          <div className="mr-4 flex items-center justify-between">
            <div className="group flex h-auto w-full items-center px-4 py-2 text-sm leading-5 text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:text-black">
              <div className="flex-col-4 flex items-center bg-white dark:bg-slate-800">
                <div className="col-span-2">
                  <a href="#" className="">
                    {cartData?.product?.photos![0]?.url ? (
                      <Image
                loader={myImageLoader}
                        src={cartData?.product?.photos![0]?.url!}
                        alt="Product Image"
                        height={100}
                        width={100}
                      />
                    ) : (
                      'Problem Rendering Image'
                    )}
                  </a>
                </div>
                <div className="col-span-2 justify-between px-4 leading-normal">
                  <div>
                    <a
                      href="#"
                      className="mr-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                    >
                      {cartData?.product?.info?.name}
                    </a>
                  </div>
                  <div>
                    <div className="py-2">
                      <span className="mb-2 font-normal text-gray-700 dark:text-gray-300">
                        {cartData?.quantity} X &nbsp;
                      </span>
                      <p className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
                        {Intl.NumberFormat(
                          `${currency.currencyLanguage}-${currency.currencyStyle}`,
                          {
                            style: 'currency',
                            currency: `${currency.currencyName}`,
                          }
                        ).format(cartData?.product?.info?.price!)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ml-16 mb-16"
              onClick={(e) => {
                e.stopPropagation();
                handleCartItemDelete(cartData);
              }}
            >
              <ElementButton>
                <CrossIcon />
              </ElementButton>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      {modalOn && (
        <Modal
          setModalOn={setModalOn}
          setChoice={setChoice}
          modalTitle="You need to login first."
          bodyText="Proceed to login?"
        />
      )}
      <div
        ref={componentRef as any}
        className="flex items-center justify-center"
      >
        <div className="relative inline-block text-left">
          <div className="hover:text-primary">
            <ElementButton
              className="inline-flex w-full justify-center text-base font-medium text-gray-700 hover:text-primary  dark:text-dark_text  dark:hover:text-dark_primary "
              onClickFunction={() => setCartTotal(!cartTotal)}
            >
              <>
                <CartIcon />
                <span className="">
                  {cartData?.length > 0 ? cartData?.length : 0}
                </span>
              </>
            </ElementButton>
          </div>
          {cartTotal && document.body.clientWidth >= 1024 ? (
            <div className="absolute right-0 mt-2 h-auto w-96 origin-top-right rounded-md ">
              <div className=" rounded-md bg-white dark:bg-slate-800">
                {/* new div starts here */}
                <div
                  className={
                    cartData.length
                      ? 'h-48 overflow-y-scroll border-x-2 py-1 dark:border-none'
                      : 'h-20 border dark:border-none'
                  }
                >
                  {cartData.length > 0 ? (
                    dropdownData()
                  ) : (
                    <div className="p-5 text-lg">
                      Your cart is currently empty
                    </div>
                  )}
                </div>
                {/* new div ends here */}
                {cartData.length > 0 ? (
                  <>
                    <div className="flex justify-between border-x-2 p-6 dark:border-none dark:text-gray-300">
                      <span className="text-base font-semibold">Total</span>
                      <span className="text-base font-semibold">
                        {Intl.NumberFormat(
                          `${currency.currencyLanguage}-${currency.currencyStyle}`,
                          {
                            style: 'currency',
                            currency: `${currency.currencyName}`,
                          }
                        ).format(totalCartPrice)}
                        {/* ${totalCartPrice} */}
                      </span>
                    </div>
                    <div className="border-x-2 px-6 py-2 dark:border-none">
                      <Link href="/cart" passHref>
                        <ButtonPrimary
                          onClickFunction={() => {
                            handleClickViewCart();
                            setCartTotal(!cartTotal);
                          }}
                          text={t('common:view_cart')}
                        />
                      </Link>
                    </div>
                    <div className="mb-4 border-x-2 border-b-2 px-6 pb-5 dark:border-none">
                      <ButtonPrimary
                        onClickFunction={handleClickProceed}
                        text={t('common:checkout')}
                      />
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};

export default CartDropdown;
