import { useState } from 'react';

import { useAppDispatch } from 'customHooks/hooks';
import { deleteCartItem, updateCartItem } from 'toolkit/cartSlice';

const ShowData = ({ data }: any) => {
  const dispatch = useAppDispatch();

  const [itemToUpdate, setItemToUpdate] = useState({
    productId: data.productId,
    quantity: data.quantity,
  });

  return (
    <>
      <tr key={data.productId}>
        <td className="border border-slate-300 px-8 py-4 md:px-4">
          <img
            src={data?.product?.photos[0]?.url}
            alt="product Image"
            width={100}
            height={90}
          />
        </td>
        <td className="border border-slate-300 py-10 md:px-2 xl:px-10">
          {data?.product?.info?.name}
        </td>
        <td className="border border-slate-300 px-6 py-14 ">
          <span className="flex justify-center">
            {' '}
            ${data?.product?.info?.price}
          </span>
        </td>
        <td className="border-slate-150 border py-4 md:px-2 xl:px-10">
          <div className="flex justify-center">
            <div className="box-content w-12 border-2 p-2">
              <div className="flex justify-between">
                <button
                  disabled={itemToUpdate.quantity <= 0 ? true : false}
                  onClick={() => {
                    let _quantity =
                      itemToUpdate.quantity - 1 >= 0
                        ? itemToUpdate.quantity - 1
                        : 0;
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
                    dispatch(
                      updateCartItem({
                        productId: itemToUpdate?.productId,
                        quantity: _quantity,
                      })
                    );
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </td>
        <td className="border border-slate-300 py-14 md:px-2 xl:px-8">
          <div className="flex justify-center">
            ${data?.product?.info?.price! * itemToUpdate.quantity}
          </div>
        </td>
        <td className="border border-slate-300 py-14 md:px-2 xl:px-12 ">
          <div className="flex justify-center">
            <button
              onClick={() => {
                dispatch(deleteCartItem(data));
              }}
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
