import { useState } from "react";

import { userAPI } from "APIs";
import { ResponseItem } from "models";
import { useAppDispatch } from "customHooks/hooks";
import { deleteCartItem, updateCartItem } from "toolkit/cartSlice";
interface Props {
  data: ResponseItem,
}

const ShowData: React.FC<Props> = ({ data }: Props) => {

  const [itemToUpdate, setItemToUpdate] = useState({
    productId: data.productId,
    quantity: data.quantity,
  });

  const dispatch = useAppDispatch();

  return (
    <>
      <tr key={data.productId}>
        <td className="border border-slate-300 px-8 md:px-4 py-4">
          <img
            src={data?.product?.photos[0].url}
            alt="product Image"
            width={100}
            height={90}
          />
        </td>
        <td className="border border-slate-300 md:px-2 xl:px-10 py-10">
          {data?.product?.info?.name}
        </td>
        <td className="border border-slate-300 px-6 py-14 ">
          <span className="flex justify-center">
            {" "}
            ${data?.product?.info.price}
          </span>
        </td>
        <td className="border border-slate-150 md:px-2 xl:px-10 py-4">
          <div className="flex justify-center">
            <div className="box-content w-12 p-2 border-2">
              <div className="flex justify-between">
                <button
                  onClick={() => {
                    setItemToUpdate({
                      productId: data?.productId,
                      quantity:
                        itemToUpdate.quantity - 1 > 0
                          ? itemToUpdate.quantity - 1
                          : 0,
                    });
                    userAPI.updateCartItem({
                      productId: itemToUpdate?.productId,
                      quantity: itemToUpdate.quantity - 1,
                    });
                    dispatch(updateCartItem({
                      productId: itemToUpdate?.productId,
                      quantity: itemToUpdate.quantity - 1,
                    }));
                  }}
                >
                  -
                </button>
                <div>{itemToUpdate.quantity}</div>
                <button
                  onClick={() => {
                    setItemToUpdate({
                      productId: data?.productId,
                      quantity: itemToUpdate.quantity + 1,
                    });
                    userAPI.updateCartItem({
                      productId: itemToUpdate?.productId,
                      quantity: itemToUpdate.quantity + 1,
                    });
                    dispatch(updateCartItem({
                      productId: itemToUpdate?.productId,
                      quantity: itemToUpdate.quantity + 1,
                    }));
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </td>
        <td className="border border-slate-300 md:px-2 xl:px-8 py-14">
          <div className="flex justify-center">${data?.product?.info?.price! * itemToUpdate.quantity}</div>
        </td>
        <td className="border border-slate-300 md:px-2 xl:px-12 py-14 ">
          <div className="flex justify-center">
            <button
              onClick={() => {
                userAPI.deleteCartItem(data);
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
