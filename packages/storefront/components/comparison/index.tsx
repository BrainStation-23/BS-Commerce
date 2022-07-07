import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
import { setModalState } from 'toolkit/modalSlice';

interface Props {
  setModal: Function;
}
const Modal: React.FC<Props> = ({ setModal }) => {
  const [showModal, setShowModal] = useState(setModal);
  const dispatch = useAppDispatch();

  const comparisonProducts = useAppSelector(
    (state) => state.persistedReducer.compare.productsToCompare
  );
  console.log(comparisonProducts);

  return (
    <>
      {/* <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details
      </button> */}
      {showModal ? (
        <>
          <div className="fixed mt-5 inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-auto">
            <div className="relative my-6 mx-auto overflow-auto">
              <div className="relative flex w-full flex-col rounded-lg bg-white shadow-lg">
                <div className="flex items-start justify-between rounded-t border-b border-solid border-gray-300 p-5 ">
                  <h3 className="mr-3 text-xl font-bold">Compare Product</h3>
                  <button
                    className="border-1 float-right bg-transparent text-black"
                    onClick={() => {
                      setShowModal(false);
                      dispatch(setModalState(false));
                    }}
                  >
                    <span className="block h-8 w-8 bg-black text-xl text-white">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative flex-auto p-6">
                  <div className="flex flex-col">
                    <div className="overflow-x-auto overflow-y-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                          <table className="border text-center">
                            <thead className="border-b">
                              <tr>
                                <th
                                  scope="col"
                                  className="border-r px-6 py-4 text-sm font-medium"
                                >
                                  Action
                                </th>
                                {comparisonProducts.map((product) => {
                                  return (
                                    <React.Fragment key={product.id}>
                                      <th
                                        scope="col"
                                        className="border-r px-6 py-4 text-sm font-medium"
                                      >
                                        <button>Remove</button>
                                      </th>
                                    </React.Fragment>
                                  );
                                })}
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="border-r px-6 py-4 text-sm font-medium">
                                  Product name
                                </td>
                                {comparisonProducts.map((product) => {
                                  return (
                                    <React.Fragment key={product.id}>
                                      <td className="border-r px-6 py-4 text-sm font-medium">
                                        {product?.info?.name!}
                                      </td>
                                    </React.Fragment>
                                  );
                                })}
                              </tr>
                              <tr className="border-b bg-white">
                                <td className="border-r px-6 py-4 text-sm font-medium">
                                  Product image
                                </td>
                                {comparisonProducts.map((product) => {
                                  return (
                                    <React.Fragment key={product.id}>
                                      <td className="border-r p-6 font-medium">
                                        <img
                                          src={product?.photos[0]?.url}
                                          alt={product?.info?.name}
                                          height={100}
                                          width={100}
                                        />
                                        {product?.info?.oldPrice ? (
                                          <p className="text-sm font-bold text-red-600">
                                            On Sale{' '}
                                            <span className="font-normal">
                                              ${product.info.price}
                                            </span>
                                          </p>
                                        ) : (
                                          <span className="text-red-600 font-normal">
                                            ${product.info.price}
                                          </span>
                                        )}
                                      </td>
                                    </React.Fragment>
                                  );
                                })}
                              </tr>
                              <tr className="border-b bg-white">
                                <td className="border-r px-6 py-4 text-sm font-medium">
                                  Product description
                                </td>
                                {comparisonProducts.map((product) => {
                                  return (
                                    <React.Fragment key={product.id}>
                                      <td className="border-r px-6 py-4 text-sm font-medium">
                                        {product?.meta?.description}
                                      </td>
                                    </React.Fragment>
                                  );
                                })}
                              </tr>
                              <tr className="border-b bg-white">
                                <td className="border-r px-6 py-4 text-sm font-medium">
                                  Availability
                                </td>
                                {comparisonProducts.map((product) => {
                                  return (
                                    <React.Fragment key={product.id}>
                                      <td className="border-r px-6 py-4 text-sm font-medium">Available In stock</td>
                                    </React.Fragment>
                                  );
                                })}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
