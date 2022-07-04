import { FC } from "react";
import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import Tooltips from "../../../global/tooltip";
const DisplayOrders: FC = () => {
  const [btnToggler, setBtnToggler] = useState("bi-plus-lg");
  const toggleButton = () => {
    if (btnToggler == "bi-plus-lg") setBtnToggler("bi-dash");
    else setBtnToggler("bi-plus-lg");
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
              <i className="bi bi-tv fill col-1" style={{ fontSize: "25px" }} />
              <div className="fs-5 col px-3 text-start">Display Order</div>
              <div className="col-1">
                <i className={`bi ${btnToggler}`} />
              </div>
            </div>
          </button>
        </div>
        <div className="collapse " id="categoryTab">
          <div className="card-body">
            <div className="form-group row">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end p-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="displayOrderCategory"
                  >
                    Display Order
                  </label>
                </div>
              </div>
              <div className="col-md-8 mt-md-3 mx-md-0 mx-2">
                <div className="input-group ">
                  <Field
                    type="number"
                    id="displayOrder"
                    name="displayOrder"
                    aria-disabled="false"
                    className="border-bottom form-control rounded-0 border-2 border border-0 shadow-none"
                  />
                </div>
                <div
                  className="col-1 pt-2"
                  style={{ height: "4px", padding: "15px" }}
                >
                  <h2 className="required text-danger ">*</h2>
                </div>
              </div>
              <div className="errMsg text-danger text-red-600">
                <ErrorMessage name="displayOrder" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayOrders;
