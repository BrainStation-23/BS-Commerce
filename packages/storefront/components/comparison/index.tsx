import React, { useState } from "react";

const Modal = ({setModal}) => {
  const [showModal, setShowModal] = useState(setModal);
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
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font-bold mr-3">Compare Product</h3>
                  <button
                    className="bg-transparent border-1 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-white h-8 w-6 text-xl block bg-black">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                          <table className="min-w-full border text-center">
                            <thead className="border-b">
                              <tr>
                                <th
                                  scope="col"
                                  className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                                >
                                  Action
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                                    Product name	
                                </td>
                              </tr>
                              <tr className="bg-white border-b">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                                    Product image	
                                </td>
                              </tr>
                              <tr className="bg-white border-b">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                                    Product description	
                                </td>
                              </tr>
                              <tr className="bg-white border-b">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                                    Availability		
                                </td>
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
