import React, { FC, useEffect, useState } from 'react';

import {
  CategoryCardInterface,
  CategoryInterface,
} from '@/components/products/models/index';

const CaegoryCard: FC<CategoryCardInterface> = (
  props: CategoryCardInterface
) => {
  const { product, categoryData } = props;
  const [showTable, setShowTable] = useState(false);

  const checkTable = () => {
    const totalSelectedCategory = categoryData.filter(
      (data: CategoryInterface) => data.isSelected
    );
    const isSelectedZero = totalSelectedCategory[0] ? true : false;
    isSelectedZero
      ? setShowTable(isSelectedZero)
      : setShowTable(!isSelectedZero);
    return !isSelectedZero;
  };

  useEffect(() => {
    checkTable();
  }, [showTable]);
  return (
    <>
      {product?.categories?.length > 0 ? (
        <div
          className="card card-secondary card-outline my-4"
          data-card-name="meta"
          id="meta"
        >
          <div className="card-header with-border d-flex justify-content-between align-items-center">
            <div className="card-title row align-items-center  ps-2 pt-2">
              <i
                className="bi bi-diagram-3-fill col-1"
                style={{ fontSize: '25px' }}
              />
              <div className="fs-5 col text-start px-3">Caegories</div>
            </div>
          </div>
          <div className="" id="metaTab">
            <div className="card-body">
              <div className="py-3">
                <table className="table-bordered table-striped table  ">
                  <thead>
                    <tr>
                      <th className="py-3 text-center">Category</th>
                      <th className="py-3 text-center">Feaured</th>
                      <th className="py-3 text-center">Display order</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoryData?.map(
                      (data: CategoryInterface, index: number) => {
                        if (data.isSelected)
                          return (
                            <React.Fragment key={index}>
                              <tr>
                                <td className="text-center">{data.value}</td>
                                <td className="text-center">
                                  {data.isFeatured ? (
                                    <i className="bi bi-check-lg"></i>
                                  ) : (
                                    'X'
                                  )}
                                </td>
                                <td className="text-center">
                                  {data.displayOrder}
                                </td>
                              </tr>
                            </React.Fragment>
                          );
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default CaegoryCard;
