import Link from 'next/link';
import _ from 'lodash';
import Image from 'next/image';

import { useEffect, useRef, useState } from 'react';

import { useAppDispatch } from 'customHooks/hooks';
import {
  deleteCartItem,
  storeAllCartItems,
  updateCartItem,
} from 'toolkit/cartSlice';
import { userAPI } from 'APIs';
import { ResponseItem, updateCartItemRequest } from 'models';

interface Props {
  data: ResponseItem;
}

const ShowData: React.FC<Props> = ({ data }: Props) => {
  const dispatch = useAppDispatch();

  const [itemToUpdate, setItemToUpdate] = useState({
    productId: data.productId,
    quantity: data.quantity,
  });

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
      <tr key={data.productId}>
        <td className="border border-slate-300 px-8 py-2 md:px-4">
          {data?.product?.photos![0]?.url ? (
            <Image
              src={data?.product?.photos![0]?.url!}
              alt="product Image"
              width={100}
              height={90}
              //layout="fixed"
            />
          ) : (
            'Problem Rendering Image'
          )}
        </td>
        <td className="border border-slate-300 text-center md:px-2 lg:px-20">
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
            <p className="hover:cursor-pointer hover:text-[#40a944]">
              {data?.product?.info?.name}
            </p>
          </Link>
        </td>
        <td className="border border-slate-300 px-10 py-14">
          <span className="flex justify-center">
            {' '}
            ${data?.product?.info?.price}
          </span>
        </td>
        <td className="border-slate-150 border py-4 md:px-2 lg:px-10">
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
                <div>{itemToUpdate.quantity}</div>
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
        <td className="border border-slate-300 py-14 md:px-2 lg:px-10">
          <div className="flex justify-center">
            ${data?.product?.info?.price! * itemToUpdate.quantity}
          </div>
        </td>
        <td className="border border-slate-300 py-14 md:px-2 lg:px-10 ">
          <div className="flex justify-center">
            <button
              className="font-bold text-[#40a944]"
              onClick={handleCartItemDelete}
            >
              X
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ShowData;
