import React, { FC } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ErrorMessage, Field } from 'formik';

import FieldTemplate from '@/components/products/forms/fieldTemplate';
import {
  CategorySectionInterface,
  CategoryInterface,
} from '@/components/products/models/index';

const CategorySection: FC<CategorySectionInterface> = (
  props: CategorySectionInterface
) => {
  const { setCategoryData, categoryData, setFieldValue } = props;
  const [showTable, setShowTable] = useState(false);
  const [btnToggler, setBtnToggler] = useState('bi-plus-lg');
  const [reload, setReload] = useState(false);

  const checkTable = () => {
    const totalSelectedCategory = categoryData.filter(
      (data: CategoryInterface) => (data.isSelected ? data : null)
    );
    const isSelectedZero = totalSelectedCategory[0] ? true : false;
    isSelectedZero == showTable ? '' : setShowTable(isSelectedZero);
  };

  const toggleButton = () => {
    if (btnToggler == 'bi-plus-lg') setBtnToggler('bi-dash');
    else setBtnToggler('bi-plus-lg');
  };
  const handleRemoveCategory = (id: string | number | undefined) => {
    categoryData.map((data: CategoryInterface) => {
      data.id == id ? <>{(data.isSelected = false)}</> : '';
    });
    setCategoryData(categoryData);
    setReload(!reload);
  };

  const handleAddCategory = () => {
    const categoryID = (
      document.getElementById('SelectedCategoryIds') as HTMLInputElement
    )?.value;
    if (categoryID == '0') {
      toast.error('Please Select a Category');
      return;
    }
    const isFeatured = (
      document.getElementById('isFeaturedCategory') as HTMLInputElement
    )?.value;
    const displayOrder = parseInt(
      (document.getElementById('displayOrderCategory') as HTMLInputElement)
        ?.value
    );
    categoryData.map((data: CategoryInterface, index: number) => {
      data.id == categoryID ? (
        <>
          {(data.isSelected = true)}
          {(data.isFeatured = isFeatured == 'false' ? false : true)}
          {(data.displayOrder = displayOrder)}
        </>
      ) : (
        ''
      );
    });
    setCategoryData(categoryData);
    setFieldValue('isFeaturedCategory', false);
    setFieldValue('displayOrderCategory', 1);
    setFieldValue('SelectedCategoryIds', 0);
    setReload(!reload);
  };
  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="category"
        data-hideattribute="ProductPage.HideInfoBlock"
        id="category"
      >
        <div className="card-header with-border d-flex justify-content-between align-items-center">
          <button
            className="btn w-100 text-top invisible m-0 h-auto p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#categoryTab"
            aria-expanded="true"
            aria-controls="categoryTab"
            onClick={() => toggleButton()}
          >
            <div className="card-title row align-items-center visible">
              <div className="fs-5 col px-3 text-start">
                <i
                  className="bi bi-diagram-3-fill col-1 px-1"
                  style={{ fontSize: '25px' }}
                />
                Category
              </div>
              <div className="col-1">
                <i className={`bi ${btnToggler}`} />
              </div>
            </div>
          </button>
        </div>
        <div className="collapse " id="categoryTab">
          <div className="card-body">
            <>
              <div className="form-group row my-2 mb-3">
                <div className="col-md-3">
                  <div className="label-wrapper row row-cols-auto float-md-end pe-3">
                    <label
                      className="col-form-label col fs-5 px-1  "
                      htmlFor="SelectedCategoryIds"
                      id="SelectedCategoryIds_label"
                    >
                      Categories<span className="required text-danger ">*</span>
                    </label>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="input-group">
                    
                  </div>
                  
                </div>
              </div>

              <FieldTemplate
                label="Featured"
                isRequired={false}
                fieldID="isFeaturedCategory"
                fieldType="checkbox"
                fieldAs=""
                extraClass=""
                fieldClass="check-box mt-2  "
              />
              <FieldTemplate
                label="Display Order"
                isRequired={false}
                fieldID="displayOrderCategory"
                fieldType="number"
                fieldAs=""
                extraClass=""
                fieldClass=""
              />
              <div className="mt-4 text-center">
                <button
                  className="btn btn-primary mx-auto"
                  type="button"
                  onClick={() => handleAddCategory()}
                >
                  Add
                </button>
              </div>
              {checkTable()}
              {showTable ? (
                <div className="my-3 py-3">
                  <table className="table-bordered table ">
                    <thead>
                      <tr>
                        <th className="py-3 text-center">Category</th>
                        <th className="py-3 text-center">Feaured</th>
                        <th className="py-3 text-center">Display order</th>
                        <th className="py-3 text-center">Remove</th>
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
                                  <td className="text-center">
                                    <button
                                      className="btn btn-danger mx-auto"
                                      type="button"
                                      onClick={() =>
                                        handleRemoveCategory(data?.id)
                                      }
                                    >
                                      Remove
                                    </button>
                                  </td>
                                </tr>
                              </React.Fragment>
                            );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                ''
              )}
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySection;
