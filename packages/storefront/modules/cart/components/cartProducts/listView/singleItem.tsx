import _ from 'lodash';
import Image from 'next/legacy/image';
import myImageLoader from 'image/loader';

import { useEffect, useRef, useState } from 'react';

import { ResponseItem, updateCartItemRequest } from '@bs-commerce/models';
import { useAppDispatch, useAppSelector } from 'store/hooks/index';
import {
  deleteCartItem,
  storeAllCartItems,
  updateCartItem,
} from 'store/slices/cartSlice';
import { userAPI } from 'APIs';
import TextButton from '@/modules/common/buttons/textButton';

interface Props {
  data: ResponseItem;
  setTotal: Function;
  total: number;
}

const SingleItem: React.FC<Props> = ({ data, setTotal, total }: Props) => {
  const dispatch = useAppDispatch();
  const currency = useAppSelector((state) => state.persistedReducer.currency);

  const [itemToUpdate, setItemToUpdate] = useState({
    productId: data?.productId,
    quantity: data?.quantity,
  });

  const handleUpdateCart = async (updatedCartItem: updateCartItemRequest) => {
    const cart = await userAPI.updateCartItem(updatedCartItem);
    dispatch(storeAllCartItems(cart?.data?.items!));
    dispatch(updateCartItem(updatedCartItem));
  };

  const debouncedUpdateCartItem = useRef(
    _.debounce(async (updatedCartItem: updateCartItemRequest) => {
      await handleUpdateCart(updatedCartItem);
    }, 1000)
  ).current;

  useEffect(() => {
    return () => {
      debouncedUpdateCartItem.cancel();
    };
  }, [debouncedUpdateCartItem]);

  return (
    <div key={data?.productId} className="p-4">
      <div className="flex-col-3 flex items-center rounded-lg border bg-white">
        <div className="relative mr-4">
          {data?.product?.photos![0]?.url ? (
            <Image
              loader={myImageLoader}
              src={data?.product?.photos![0]?.url!}
              alt="product Image"
              width={100}
              height={90}
              //layout="fixed"
            />
          ) : (
            'Problem Rendering Image'
          )}
          <span
            className="absolute -top-2 -right-3 rounded-full p-0.5 text-center text-xs font-semibold text-white"
            style={{ background: '#808080' }}
            onClick={() => {
              setTotal(
                total - itemToUpdate.quantity * data?.product?.info?.price!
              );
              dispatch(deleteCartItem(data));
            }}
          >
            <svg
              className="h-0 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
            X
          </span>
        </div>
        <div className="col-span-2 justify-between px-4 leading-normal">
          <h5 className="mb-3 text-lg font-bold text-gray-900">
            {data?.product?.info?.name}
          </h5>
          <div className="mb-4 flex gap-x-3">
            <div className="py-2">
              <p className="mb-2 font-normal text-gray-700 dark:text-dark_text">
                {Intl.NumberFormat(
                  `${currency.currencyLanguage}-${currency.currencyStyle}`,
                  { style: 'currency', currency: `${currency.currencyName}` }
                ).format(data?.product?.info?.price!)}
              </p>
            </div>
            <div className="w-25 mb-1 box-content border-2 py-2">
              <div className="flex justify-between text-center">
                <TextButton
                  className="mx-4 mt-0"
                  disabled={itemToUpdate.quantity <= 1 ? true : false}
                  onClickFunction={() => {
                    let _quantity =
                      itemToUpdate.quantity - 1 > 0
                        ? itemToUpdate.quantity - 1
                        : 0;
                    setItemToUpdate({
                      productId: data?.productId,
                      quantity: _quantity,
                    });
                    debouncedUpdateCartItem({
                      productId: data?.productId,
                      quantity: _quantity,
                    });
                    setTotal(total - data?.product?.info?.price!);
                  }}
                  text="-"
                />

                <div className="px-2">{itemToUpdate.quantity}</div>
                <TextButton
                  className="mx-4 mt-0"
                  onClickFunction={() => {
                    let _quantity = itemToUpdate.quantity + 1;
                    setItemToUpdate({
                      productId: data?.productId,
                      quantity: _quantity,
                    });
                    debouncedUpdateCartItem({
                      productId: data?.productId,
                      quantity: _quantity,
                    });
                    setTotal(total + data?.product?.info?.price!);
                  }}
                  text="+"
                />
              </div>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
