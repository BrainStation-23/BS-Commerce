import React, { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ErrorMessage, Field } from 'formik';
import { userAPI } from '@/APIs';

import FieldTemplate from '@/components/products/forms/fieldTemplate';
import {
  manufacturerFormInterface,
  manufacturerInfoInterface,
} from '@/components/products/models/index';

const ProductManufacturers: FC<manufacturerFormInterface> = (
  props: manufacturerFormInterface
) => {
  const [btnToggler, setBtnTogglerr] = useState('bi-plus-lg');
  const [reload, setReload] = useState(false);
  const { manufacturerData } = props;
  //   const [manufacturerData, setManufacturerData] = useState([]);

  const toggleButton = () => {
    if (btnToggler == 'bi-plus-lg') setBtnTogglerr('bi-dash');
    else setBtnTogglerr('bi-plus-lg');
  };

  //   async function loadAllManufacturers() {
  //     const response = await userAPI.getAllManufacturers();
  //     // console.log('manures', response);
  //     const allManufacturers: any = [];

  //     if (response.data.manufacturers.length! > 0) {
  //       response.data.manufacturers.forEach((manufacturer: any) => {
  //         allManufacturers.push({
  //           id: manufacturer.id,
  //           name: manufacturer.name,
  //         });
  //       });
  //       setManufacturerData(allManufacturers);
  //       console.log(manufacturerData);
  //     }
  //   }
  //   useEffect(() => {
  //     loadAllManufacturers();
  //   }, []);
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
            data-bs-target="#manufacturerInfoTab"
            aria-expanded="true"
            aria-controls="#manufacturerInfoTab"
            onClick={() => toggleButton()}
          >
            <div className="card-title row align-items-center visible">
              <div className="fs-5 col px-3 text-start">
                <i
                  className="bi bi-menu-button-wide-fill col-1 px-1"
                  style={{ fontSize: '25px' }}
                />
                Manufacturer
              </div>
              <div className="col-1">
                <i className={`bi ${btnToggler}`} />
              </div>
            </div>
          </button>
        </div>
        <div className="collapse " id="manufacturerInfoTab">
          <div className="card-body">
            <div className="form-group row my-2 mb-3">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end pe-3">
                  <label
                    className="col-form-label col fs-5 px-1  "
                    htmlFor="SelectedCategoryIds"
                    id="SelectedCategoryIds_label"
                  >
                    Manufacturers
                    <span className="required text-danger ">*</span>
                  </label>
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group">
                  <Field
                    as="select"
                    id="manufacturerName"
                    name="manufacturerName"
                    data-role="multiselect"
                    className="form-control single-line border-bottom rounded-0 border border-0 border-2 shadow-none"
                    aria-disabled="false"
                  >
                    <option defaultValue={0} value={0} disabled={true}>
                      --Select--
                    </option>
                    {manufacturerData?.map((data, index: number) => {
                      return (
                        <option key={index} value={data.name}>
                          {data.name}
                        </option>
                      );
                    })}
                  </Field>
                </div>
                <div className="errMsg text-danger text-red-600">
                  <ErrorMessage name="manufacturerId" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductManufacturers;
