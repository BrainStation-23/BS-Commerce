import { useState } from 'react';
import { Field, ErrorMessage } from 'formik';
import { FC } from 'react';
import Tooltips from '../../../global/tooltip';
const TagInfo: FC = () => {
  const [btnToggler, setBtnToggler] = useState('bi-plus-lg');

  const toggleButton = () => {
    if (btnToggler == 'bi-plus-lg') setBtnToggler('bi-dash');
    else setBtnToggler('bi-plus-lg');
  };
  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="product-info"
        data-hideattribute="ProductPage.HideInfoBlock"
        id="Manufacturer-info"
      >
        <div className="card-header with-border d-flex justify-content-between align-items-center">
          <button
            className="btn w-100 text-top invisible m-0 h-auto p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#prouctInfoTab"
            aria-expanded="true"
            aria-controls="prouctInfoTab"
            onClick={() => toggleButton()}
          >
            <div className="card-title row align-items-center visible">
              <i
                className="bi bi-info-lg col-1 align-text-top"
                style={{ fontSize: '25px' }}
              />
              <div className="fs-5 col px-3 text-start">Tag Info</div>
              <div className="col-1">
                <i className={`bi ${btnToggler}`} />
              </div>
            </div>
          </button>
        </div>
        <div className="collapse " id="prouctInfoTab">
          <div className="card-body">
            <div id="product-details-area">
              <div className="form-group row my-2">
                <div className="col-md-3">
                  <div className="label-wrapper row row-cols-auto float-md-end">
                    <label className="col-form-label col px-1" htmlFor="Name">
                      Tag Name
                    </label>
                    <span className="required text-danger ">*</span>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="input-group input-group-required">
                    <Field
                      className="border-bottom form-control rounded-0 border-2 border border-0 shadow-none"
                      id="name"
                      name="name"
                      type="text"
                    />
                  </div>
                  <div className="errMsg text-danger text-red-600">
                    <ErrorMessage name="name" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TagInfo;
