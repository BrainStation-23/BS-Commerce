import { userAPI } from "APIs";
import { useAppDispatch, useAppSelector } from "customHooks/hooks";
import { useState } from "react";
import { deleteCartItem, updateCartItem } from "toolkit/cartSlice";

const ShowItemSmall = ({ data, setTotal, total }: any) => {
  
  const dispatch = useAppDispatch();
  const [itemToUpdate, setItemToUpdate] = useState({
    productId: data.productId,
    quantity: data.quantity,
  });

  return (
    <div key={data?.productId} className="p-4">
      <div className="flex flex-col-3 items-center bg-white rounded-lg border">
        <div className="mr-4 relative">
          <img
            className="object-cover w-full h-48 rounded-t-lg w-30 rounded-none"
            src={data?.product?.photos[0].url}
            alt="Product Image"
          />
          <span
            className="absolute -top-2 -right-3 p-0.5 text-center text-xs font-semibold text-white rounded-full"
            style={{ background: "#808080" }}
            onClick={() => {
              userAPI.deleteCartItem(data);
              dispatch(deleteCartItem(data));
            }}
          >
            <svg
              className="w-4 h-0"
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
          <h5 className="mb-2 text-lg font-bold text-gray-900 mb-3">
            {data?.product?.info?.name}
          </h5>
          <div>
            <div className="box-content w-25 py-2 border-2 mb-2">
              <div className="flex justify-between">
                <button
                  className="mx-4"
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
                    console.log(total + data.product.info.price)
                    setTotal(total - data.product.info.price)
                    //console.log("ProductId = ",data?.productId);
                    //console.log("ItemToUpdate = ", itemToUpdate);
                    //window.location.href = "/home";
                  }}
                >
                  -
                </button>
                <div className="px-2">{itemToUpdate.quantity}</div>
                <button
                  className="mx-4"
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
                    setTotal(total + data.product.info.price)
                    //console.log("ProductId = ",data?.productId);
                    //console.log("ItemToUpdate = ", itemToUpdate);
                    //window.location.href = "/home";
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
