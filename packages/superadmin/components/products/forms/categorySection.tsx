import React, { FC } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { CategoryInterface } from '@/components/products/models/index';
import CategoryCheckbox from './categoryCheckBox';
import { NestedCategoryList } from '@bs-commerce/models';

const CategorySection: FC<{
  categogiesFullList: NestedCategoryList[];
  categoryData: CategoryInterface[];
  removeCategory: Function;
  addCategory: Function;
}> = ({ categogiesFullList, categoryData, removeCategory, addCategory }) => {
  const [btnToggler, setBtnToggler] = useState('bi-plus-lg');

  const toggleButton = () => {
    if (btnToggler == 'bi-plus-lg') setBtnToggler('bi-dash');
    else setBtnToggler('bi-plus-lg');
  };
  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="category"
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
          <div className="card-body w-50 m-auto" style={{ minWidth: '216px' }}>
            <>
              {categogiesFullList &&
                categogiesFullList.map((category: NestedCategoryList) => {
                  return (
                    <>
                      <CategoryCheckbox
                        categoryData={categoryData}
                        category={category}
                        removeCategory={removeCategory}
                        addCategory={addCategory}
                        isSelected={
                          categoryData.filter(
                            (cat: CategoryInterface) => cat.id === category.id
                          )[0]?.isSelected!
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
