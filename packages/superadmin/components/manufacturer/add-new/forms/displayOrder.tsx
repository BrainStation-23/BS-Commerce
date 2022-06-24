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
            className="btn invisible w-100 h-auto text-top m-0 p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#categoryTab"
            aria-expanded="true"
            aria-controls="categoryTab"
            onClick={() => toggleButton()}
          >
            <div className="card-title row align-items-center visible">
              <i
                className="bi bi-tv fill col-1"
                style={{ fontSize: "25px", marginTop: "-20px" }}
              />
              <div className="px-3 fs-5 col text-start">Display Order</div>
              <div className="col-1">
                <i className={`bi ${btnToggler}`} />
              </div>
            </div>
          </button>
        </div>
        <div className="collapse " id="categoryTab">
          <div className="card-body">
            <div className="form-group row">
              <div className="col-md-2">
                <div className="label-wrapper row row-cols-auto float-md-end p-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="displayOrderCategory"
                  >
                    Display Order
                  </label>
                  <Tooltips title="Product cost is a prime product cost. This field is only for internal use, not visible for customers." />
                </div>
              </div>
              <div className="col-md-8 mt-md-3 mx-2 mx-md-0">
                <div className="input-group ">
                  <Field
                    type="number"
                    id="displayOrder"
                    name="displayOrder"
                    aria-disabled="false"
                    className="form-control"
                  />
                </div>
                <div
                  className="pt-2 col-1"
                  style={{ height: "4px", padding: "15px" }}
                >
                  <h2 className="required text-danger ">*</h2>
                </div>
              </div>
              <div className="errMsg text-red-600 text-danger">
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
