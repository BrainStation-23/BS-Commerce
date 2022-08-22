import React, { FC } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

import FieldTemplate from '@/components/products/forms/fieldTemplate';
import {} from '@/components/products/models/index';
import CategoryCheckbox from './categoryCheckBox';

const CategorySection: FC<any> = ({
  categogiesFullList,
  setCategoryData,
  categoryData,
  setFieldValue,
  removeCat,
  addCat,
}) => {
  const [showTable, setShowTable] = useState(false);
  const [btnToggler, setBtnToggler] = useState('bi-plus-lg');
  const [reload, setReload] = useState(false);

  const checkTable = () => {
    const totalSelectedCategory = categoryData?.filter((data: any) =>
      data.isSelected ? data : null
    );
  };

  const toggleButton = () => {
    if (btnToggler == 'bi-plus-lg') setBtnToggler('bi-dash');
    else setBtnToggler('bi-plus-lg');
  };
  const handleRemoveCategory = (id: string | number | undefined) => {
    categoryData.map((data: any) => {
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
            aria-expanded="false"
            aria-controls="categoryTab"
            onClick={() => toggleButton()}
          >
            <div className="card-title row align-items-center visible">
              <div className="fs-5 col text-start px-3">
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
        <div className="" id="categoryTab">
          {/* <div className="collapse " id="categoryTab"> */}
          <div className="card-body w-50 m-auto" style={{ minWidth: '216px' }}>
            <>
              {categogiesFullList &&
                categogiesFullList.map((category: any) => {
                  return (
                    <>
                      <CategoryCheckbox
                        categoryData={categoryData}
                        category={category}
                        removeCat={removeCat}
                        addCat={addCat}
                        isSelected={
                          categoryData.filter(
                            (cat) => cat.id === category.id
                          )[0]?.isSelected
                        }
                      />
                    </>
                  );
                })}
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySection;
