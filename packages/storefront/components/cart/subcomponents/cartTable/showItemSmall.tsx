import { useState } from 'react';

import { ResponseItem } from 'models';
import { useAppDispatch } from 'customHooks/hooks';
import { deleteCartItem, updateCartItem } from 'toolkit/cartSlice';

interface Props {
  data: ResponseItem;
  setTotal: Function;
  total: number;
}

const ShowItemSmall: React.FC<Props> = ({ data, setTotal, total }: Props) => {
  const dispatch = useAppDispatch();

  const [itemToUpdate, setItemToUpdate] = useState({
    productId: data?.productId,
    quantity: data?.quantity,
  });

  return (
    <div key={data?.productId} className="p-4">
      <div className="flex-col-3 flex items-center rounded-lg border bg-white">
        <div className="relative mr-4">
          <img
            className="w-30 h-48 w-full rounded-none rounded-t-lg object-cover"
            src={data?.product?.photos[0]?.url}
            alt="Product Image"
          />
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
          <h5 className="mb-2 mb-3 text-lg font-bold text-gray-900">
            {data?.product?.info?.name}
          </h5>
          <div>
            <div className="w-25 mb-2 box-content border-2 py-2">
              <div className="flex justify-between">
                <button
                  className="mx-4"
                  onClick={() => {
                    let _quantity =
                      itemToUpdate.quantity - 1 > 0
                        ? itemToUpdate.quantity - 1
                        : 0;
                    setItemToUpdate({
                      productId: data?.productId,
                      quantity: _quantity,
                    });
                    dispatch(
                      updateCartItem({
                        productId: itemToUpdate?.productId,
                        quantity: _quantity
                      })
                    );
                    setTotal(total - data?.product?.info?.price!);
                  }}
                >
                  -
                </button>
                <div className="px-2">{itemToUpdate.quantity}</div>
                <button
                  className="mx-4"
                  disabled={itemToUpdate.quantity <= 0 ? true : false}
                  onClick={() => {
                    let _quantity = itemToUpdate.quantity + 1;
                    setItemToUpdate({
                      productId: data?.productId,
                      quantity: _quantity,
                    });
                    dispatch(
                      updateCartItem({
                        productId: itemToUpdate?.productId,
                        quantity: _quantity,
                      })
                    );
                    setTotal(total + data?.product?.info?.price!);
                  }}
                >
                  +
                </button>
              </div>
              <span></span>
            </div>
            <div className="py-2">
              <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                ${data?.product?.info?.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowItemSmall;
