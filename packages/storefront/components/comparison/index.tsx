import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';

import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
import { setModalState } from 'toolkit/modalSlice';
import { deleteComparedProduct } from 'toolkit/compareSlice';
import { userAPI } from 'APIs';

interface Props {
  setModal: boolean;
}

const ComparisonModal: React.FC<Props> = ({ setModal }) => {
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
            <div className="relative my-auto mx-auto overflow-x-auto overflow-y-auto md:w-3/4 md:overflow-x-hidden">
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
                  <div
                  // className={`${
                  //   comparisonProducts.length === 3
                  //     ? 'grid-col-4'
                  //     : comparisonProducts.length === 2
                  //     ? 'grid-col-3'
                  //     : 'grid-col-2'
                  // } grid`}
                  >
                    <div className="overflow-x-auto overflow-y-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                          <table className="w-full border text-center md:table-fixed">
                            <thead className="border-b">
                              <tr>
                                <th
                                  scope="col"
                                  className={`col col-span-1 border-r px-6 py-4 text-sm font-normal`}
                                >
                                  Action
                                </th>
                                {comparisonProducts.map((product) => {
                                  return (
                                    <React.Fragment key={product.id}>
                                      <th
                                        scope="col"
                                        className={`col col-span-1 border-r px-6 py-4 text-sm font-normal`}
                                      >
                                        <button
                                          onClick={async () => {
                                            try {
                                              await userAPI.deleteFromCompare(
                                                product?.id!
                                              );
                                              dispatch(
                                                deleteComparedProduct(
                                                  product?.id!
                                                )
                                              );
                                            } catch (error) {
                                              toast.error(
                                                'Some error happend. Try again.',
                                                {
                                                  containerId: 'bottom-right',
                                                }
                                              );
                                            }
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
                                      <td className="border-r p-5  align-top font-normal">
                                        <div>
                                          <Image
                                            src={product?.photos![0]?.url!}
                                            alt={product?.info?.name}
                                            height={100}
                                            width={100}
                                            // className="m-auto"
                                            layout="fixed"
                                          />
                                          <br />
                                          {product?.info?.oldPrice ? (
                                            <>
                                              <span className="text-sm text-red-600">
                                                On Sale ${product.info.price}
                                              </span>
                                            </>
                                          ) : (
                                            <span className="font-normal text-red-600">
                                              ${product.info.price}
                                            </span>
                                          )}
                                          <br />
                                          <Link
                                            href={{
                                              pathname: `/product/${product.meta.friendlyPageName}`,
                                              // query: {
                                              //   id: product?.id,
                                              //   name: product?.info.name,
                                              // },
                                            }}
                                            passHref
                                          >
                                            <a className="text-xs text-gray-500/100 hover:text-red-600">
                                              VIEW PRODUCT
                                            </a>
                                          </Link>
                                        </div>
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
                                        {product?.info.shortDescription}
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

export default ComparisonModal;
