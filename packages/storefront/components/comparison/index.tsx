import Link from 'next/link';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
import { setModalState } from 'toolkit/modalSlice';
import { deleteComparedProduct } from 'toolkit/compareSlice';
import { userAPI } from 'APIs';

interface Props {
  setModal: boolean;
}

const Modal: React.FC<Props> = ({ setModal }) => {
  const [showModal, setShowModal] = useState(setModal);
  const dispatch = useAppDispatch();

  const comparisonProducts = useAppSelector(
    (state) => state.persistedReducer.compare.productsToCompare
  );

  if (comparisonProducts.length === 0) return null;

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
          <div className="fixed inset-0 z-50 flex justify-center bg-neutral-900/40 bg-opacity-75 transition-opacity">
            <div className="relative my-auto mx-auto overflow-auto">
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
                <div className="flex-auto p-6">
                  <div className="flex flex-col">
                    <div className="overflow-x-auto overflow-y-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                          <table className="border text-center">
                            <thead className="border-b">
                              <tr>
                                <th
                                  scope="col"
                                  className="border-r px-6 py-4 text-sm font-normal"
                                >
                                  Action
                                </th>
                                {comparisonProducts.map((product) => {
                                  return (
                                    <React.Fragment key={product.id}>
                                      <th
                                        scope="col"
                                        className="border-r px-6 py-4 text-sm font-normal"
                                      >
                                        <button
                                          onClick={() => {
                                            dispatch(
                                              deleteComparedProduct(
                                                product?.id!
                                              )
                                            );
                                            userAPI.deleteFromCompare(
                                              product?.id!
                                            );
                                          }}
                                        >
                                          Remove
                                        </button>
                                      </th>
                                    </React.Fragment>
                                  );
                                })}
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b hover:bg-gray-100">
                                <td className="border-r px-6 py-4 text-sm font-normal">
                                  Product name
                                </td>
                                {comparisonProducts.map((product) => {
                                  return (
                                    <React.Fragment key={product.id}>
                                      <td className="border-r px-6 py-4 text-sm font-normal">
                                        {product?.info?.name!}
                                      </td>
                                    </React.Fragment>
                                  );
                                })}
                              </tr>
                              <tr className="border-b bg-white hover:bg-gray-100">
                                <td className="border-r px-6 py-4 text-sm font-normal">
                                  Product image
                                </td>
                                {comparisonProducts.map((product) => {
                                  return (
                                    <React.Fragment key={product.id}>
                                      <td className="border-r p-6 font-normal">
                                        <img
                                          src={product?.photos![0]?.url}
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
                                          <span className="font-normal text-red-600">
                                            ${product.info.price}
                                          </span>
                                        )}
                                        <br />
                                        <Link
                                          href={`/product/${product.id}`}
                                          passHref
                                        >
                                          <a className="text-xs text-gray-500/100 hover:text-red-600">
                                            VIEW PRODUCT
                                          </a>
                                        </Link>
                                      </td>
                                    </React.Fragment>
                                  );
                                })}
                              </tr>
                              <tr className="border-b bg-white hover:bg-gray-100">
                                <td className="border-r px-6 py-4 text-sm font-normal">
                                  Product description
                                </td>
                                {comparisonProducts.map((product) => {
                                  return (
                                    <React.Fragment key={product.id}>
                                      <td className="border-r px-6 py-4 text-sm font-normal">
                                        {product?.meta?.description}
                                      </td>
                                    </React.Fragment>
                                  );
                                })}
                              </tr>
                              <tr className="border-b bg-white hover:bg-gray-100">
                                <td className="border-r px-6 py-4 text-sm font-normal">
                                  Availability
                                </td>
                                {comparisonProducts.map((product) => {
                                  return (
                                    <React.Fragment key={product.id}>
                                      <td className="border-r px-6 py-4 text-sm font-normal">
                                        Available In stock
                                      </td>
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
