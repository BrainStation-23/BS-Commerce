import { userAPI } from "APIs";
import { useAppSelector } from "customHooks/hooks";
import { GetCustomerProductParams } from "models";
import Image from "next/image";

const TableData = () => {
  const cartData = useAppSelector(
    (state) => state.getAllCartItemsStore.allCartItems
  );
  async function getProduct(id: GetCustomerProductParams) {
    const res = userAPI.getPublicProductsById(id);
    // console.log(res);
  }
  return (
    <>
      {cartData.map((data, index) => {
        return (
          <tr key={data.id}>
            <td className="border border-slate-300 px-8 md:px-4 py-4">
              <Image
                src={cartData?.product.photos[0].url}
                alt="product Image"
                width={100}
                height={90}
              />
            </td>
            <td className="border border-slate-300 md:px-2 xl:px-10 py-10">
              {cartData.product.info.name}
            </td>
            <td className="border border-slate-300 px-6 py-14 ">
              <span className="flex justify-center">
                {" "}
                ${cartData.product.info.price}
              </span>
            </td>
            <td className="border border-slate-150 md:px-2 xl:px-10 py-4">
              <div className="flex justify-center">
                <div className="box-content h-4 w-12 p-4 border-4">
                  <div className="flex justify-between">
                    <button>+</button>
                    <div>{cartData.items.quantity}</div>
                    <button>-</button>
                  </div>
                </div>
              </div>
            </td>
            <td className="border border-slate-300 md:px-2 xl:px-8 py-14">
              <div className="flex justify-center">${30}</div>
            </td>
            <td className="border border-slate-300 md:px-2 xl:px-12 py-14 ">
              <div className="flex justify-center">
                <button>X</button>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TableData;
