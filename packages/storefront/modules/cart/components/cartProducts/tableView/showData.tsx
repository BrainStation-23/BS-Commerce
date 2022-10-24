import Link from 'next/link';
import _ from 'lodash';
import Image from 'next/image';

import { useEffect, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'store/hooks/index';
import {
  deleteCartItem,
  storeAllCartItems,
  updateCartItem,
} from 'store/slices/cartSlice';
import { userAPI } from 'APIs';
import { ResponseItem, updateCartItemRequest } from '@bs-commerce/models';
import TextButton from '@/modules/common/buttons/textButton';

interface Props {
  data: ResponseItem;
}

const ShowData: React.FC<Props> = ({ data }: Props) => {
  const dispatch = useAppDispatch();

  const [itemToUpdate, setItemToUpdate] = useState({
    productId: data.productId,
    quantity: data.quantity,
  });
  const currency = useAppSelector((state) => state.persistedReducer.currency);

  const handleCartItemDelete = async () => {
    const productId = data.productId;
    await userAPI.deleteSingleCartItem(productId);
    dispatch(deleteCartItem(data));
  };

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
    <>
      <td className="px-5 py-4">
        {' '}
        {data?.product?.photos![0]?.url ? (
          <Image
            src={data?.product?.photos![0]?.url!}
            alt="product Image"
            width={100}
            height={90}
          />
        ) : (
          'Problem Rendering Image'
        )}
      </td>
      <td className="px-5 py-4">
        <Link
          href={{
            pathname: `/product/${data?.product?.meta?.friendlyPageName}`,
            // query: {
            //   id: data?.product?.id,
            //   name: data?.product?.info.name,
            // },
          }}
          passHref
        >
          <p className="hover:cursor-pointer hover:text-primary">
            {data?.product?.info?.name}
          </p>
        </Link>
      </td>
      <td className="px-5 py-4">
        <span className="flex justify-center">
          {' '}
          {Intl.NumberFormat(
            `${currency.currencyLanguage}-${currency.currencyStyle}`,
            { style: 'currency', currency: `${currency.currencyName}` }
          ).format(data?.product?.info?.price!)}
          {/* ${data?.product?.info?.price} */}
        </span>
      </td>
      <td className="px-5 py-4">
        {' '}
        <div className="flex justify-center">
          <div className="box-content w-12 border-2 p-2">
            <div className="flex justify-between">
              <button
                disabled={itemToUpdate.quantity <= 1 ? true : false}
                onClick={() => {
                  let _quantity =
                    itemToUpdate.quantity - 1 >= 0
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
                }}
              >
                -
              </button>
              <div>
                {' '}
                {Intl.NumberFormat(
                  `${currency.currencyLanguage}-${currency.currencyStyle}`
                ).format(itemToUpdate.quantity)}
              </div>
              {/* {itemToUpdate.quantity} */}
              <button
                onClick={() => {
                  let _quantity = itemToUpdate.quantity + 1;
                  setItemToUpdate({
                    productId: data?.productId,
                    quantity: _quantity,
                  });
                  debouncedUpdateCartItem({
                    productId: data?.productId,
                    quantity: _quantity,
                  });
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </td>
      <td className="px-5 py-4">
        <div className="flex justify-center">
          {Intl.NumberFormat(
            `${currency.currencyLanguage}-${currency.currencyStyle}`,
            { style: 'currency', currency: `${currency.currencyName}` }
          ).format((data?.product?.info?.price! * itemToUpdate.quantity)!)}
          {/* ${data?.product?.info?.price! * itemToUpdate.quantity} */}
        </div>
      </td>
      <td className="px-5 py-4 text-primary dark:text-dark_primary">
        <div className="flex justify-center">
          <TextButton
            onClickFunction={handleCartItemDelete}
            className="mt-0 font-bold"
            text="X"
          />
        </div>
      </td>
    </>
  );
};

export default ShowData;
