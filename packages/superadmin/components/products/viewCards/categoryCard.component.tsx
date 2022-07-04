import React, { useEffect } from "react";
import { useState } from "react";

const CaegoryCard = (props: any) => {
  const { product, categoryData } = props;
  const [showTable, setShowTable] = useState(false);

  const checkTable = () => {
    const totalSelectedCategory = categoryData.filter(
      (data: any) => data.isSelected
    );
    const isSelectedZero = totalSelectedCategory[0] ? true : false;
    isSelectedZero ? setShowTable(isSelectedZero) : setShowTable(!isSelectedZero);
    return !isSelectedZero;
  };

  useEffect(() => {
    checkTable();
  }, [showTable]);
  return (
    <>
      {product?.categories?.length >0 ? (
        <div
          className="card card-secondary card-outline my-4"
          data-card-name="meta"
          id="meta"
        >
          <div className="card-header with-border d-flex justify-content-between align-items-center">
            <div className="card-title row align-items-center  pt-2 ps-2">
              <i
                className="bi bi-diagram-3-fill col-1"
                style={{ fontSize: "25px"}}
              />
              <div className="px-3 fs-5 col text-start">Caegories</div>
            </div>
          </div>
          <div className="" id="metaTab">
            <div className="card-body">
              <div className="py-3">
                <table className="table table-bordered table-striped  ">
                  <thead>
                    <tr>

                    <th className="text-center py-3">Category</th>
                    <th className="text-center py-3">Feaured</th>
                    <th className="text-center py-3">Display order</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoryData?.map((data: any, index: any) => {
                      if (data.isSelected)
                        return (
                          <React.Fragment key={index}>
                            <tr>
                              <td className="text-center">{data.value}</td>
                              <td className="text-center">
                                {data.isFeatured ? (
                                  <i className="bi bi-check-lg"></i>
                                ) : (
                                  "X"
                                )}
                              </td>
                              <td className="text-center">
                                {data.displayOrder}
                              </td>
                            </tr>
                          </React.Fragment>
                        );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CaegoryCard;
