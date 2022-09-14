import { useState } from "react";
import { Field, ErrorMessage } from "formik";

import Tooltips from "../../global/tooltip";

const DiscountInfoForm = () => {
  const [btnToggler, setBtnToggler] = useState("bi-plus-lg");

  const toggleButton = () => {
    if (btnToggler == "bi-plus-lg") setBtnToggler("bi-dash");
    else setBtnToggler("bi-plus-lg");
  };

  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="discount-info"
        data-hideattribute="DiscountPage.HideInfoBlock"
        id="discount-info"
      >
        <div className="card-header with-border clearfix">
          <div className="card-title float-start">
            <h4>
            <i className="bi bi-info-lg float-start" />

            <p className="float-start px-1 mx-2">Discount info</p>
            </h4>
          </div>
          <div className="card-tools float-end">
            <div>
              <p>
                <button
                  className="btn btn-tool"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="true"
                  aria-controls="collapseExample"
                  onClick={() => toggleButton()}
                >
                  <i className={`bi ${btnToggler}`} />
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="collapse " id="collapseExample">
          <div className="card-body">
            <div id="discount-details-area"> 
                <div className="form-group row my-2">
                  <div className="col-md-3">
                    <div className="label-wrapper row row-cols-auto float-md-end">
                      <label className="col-form-label col px-1" htmlFor="Name">
                        Discount name
                      </label>
                      <Tooltips title="The name of the discount." />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="input-group input-group-required">
                      <Field
                        className="form-control text-box single-line"
                        id="discountName"
                        name="discountName"
                        type="text"
                        placeholder="Discount Name"
                      />
                      <div className="pt-2" style={{ height: "10px" }}>
                        <h2 className="required text-danger ">*</h2>
                      </div>
                    </div>
                    <div className="errMsg text-red-600 text-danger">
                      {/* <ErrorMessage name="discountName" /> */}
                    </div>
                  </div>
                </div>
                <div className="form-group row my-2">
                  <div className="col-md-3">
                    <div className="label-wrapper row row-cols-auto float-md-end">
                      <label
                        className="col-form-label col px-1"
                        htmlFor="type"
                      >
                        Discount type
                      </label>
                      <Tooltips title="Discount type" />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="input-group ">
                       <Field
                            as="select"
                            className="form-control"
                            data-val="true"
                            id="Type"
                            name="Type"
                        >
                            <option defaultValue="0">All</option>
                            <option value="1">Assigned to order total</option>
                            <option value="2">Assigned to products</option>
                            <option value="3">Assigned to catagories</option>
                            <option value="4">
                            Assigned to manufacturers
                            </option>
                            <option value="5">Assigned to shipping</option>
                            <option value="6">
                            Assigned to order subtotal
                            </option>
                        </Field>
                      <div className="pt-2" style={{ height: "10px" }}>
                      </div>
                    </div>
                    <div className="errMsg text-red-600 text-danger">
                      {/* <ErrorMessage name="discountName" /> */}
                    </div>
                  </div>
                </div> 
              <div className="form-group row">
                <div className="col-md-3">
                  <div className="label-wrapper row row-cols-auto float-md-end p-2">
                    <label
                      className="col-form-label col px-1"
                      htmlFor="usePercentage"
                    >
                      Use Cupon Code
                    </label>
                    <Tooltips title="Determines whether this product is tax exempt (tax will not be applied to this product at checkout)." />
                  </div>
                </div>
                <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                  <Field
                    className="check-box mt-2"
                    id="usePercentage"
                    name="usePercentage"
                    type="checkbox"
                  />
                  <div className="errMsg text-red-600 text-danger">
                    {/* <ErrorMessage name="usePercentage" /> */}
                  </div>
                </div>
              </div>
              <div className="form-group row my-2">
                <div className="col-md-3">
                  <div className="label-wrapper text-start text-md-end row">
                    <label className="col-form-label col px-1" htmlFor="discountPercentage">
                        Discount Amount
                    </label>
                    <Tooltips title="Discount Percentage" />
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="input-group ">
                    <Field
                      className="form-control text-box single-line"
                      id="discountPercentage"
                      name="discountPercentage"
                      type="number"
                      placeholder="0"
                    />

                    <div className="pt-2" style={{ height: "10px" }}>
                    </div>
                  </div>
                  <div className="errMsg text-red-600 text-danger">
                   {/* <ErrorMessage name="discountPercentage" /> */}
                  </div>
                  <span className="field-validation-custom" />
                </div>
              </div>
            
            <div className="form-group row">
                <div className="col-md-3">
                  <div className="label-wrapper row row-cols-auto float-md-end p-2">
                    <label
                      className="col-form-label col px-1"
                      htmlFor="requireCuponCode"
                    >
                      Use Cupon Code
                    </label>
                    <Tooltips title="Determines whether this product is tax exempt (tax will not be applied to this product at checkout)." />
                  </div>
                </div>
                <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                  <Field
                    className="check-box mt-2"
                    id="requireCuponCode"
                    name="requireCuponCode"
                    type="checkbox"
                  />
                  <div className="errMsg text-red-600 text-danger">
                    {/* <ErrorMessage name="requireCuponCode" /> */}
                  </div>
                </div>
              </div>
              <div className="form-group row my-2">
                <div className="col-md-3">
                  <div className="label-wrapper text-start text-md-end row">
                    <label className="col-form-label col px-1" htmlFor="cuponCode">
                        Cupon Code
                    </label>
                    <Tooltips title="Cupon Code" />
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="input-group ">
                    <Field
                      className="form-control text-box single-line"
                      id="cuponCode"
                      name="cuponCode"
                      type="text"
                      placeholder=""
                    />

                    <div className="pt-2" style={{ height: "10px" }}>
                    </div>
                  </div>
                  <div className="errMsg text-red-600 text-danger">
                   {/* <ErrorMessage name="cuponCode" /> */}
                  </div>
                  <span className="field-validation-custom" />
                </div>
              </div>
            <div className="form-group row my-2 ">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="StartDate"
                  >
                    Start Date
                  </label>
                  <Tooltips title="Start Date" />
                </div>
              </div>
              <div className="col-md-9">
                <div className="py-2">
                   <Field
                        type="date"
                        className="form-control"
                        id="StartDate"
                        name="StartDate"
                    /> 
                </div>
                <div className="pt-2" style={{ height: "10px" }}>
                    </div>
                  </div>
                <div className="errMsg text-red-600 text-danger">
                 {/* <ErrorMessage name="StartDate" /> */}
                </div>
              </div>
              <div className="form-group row my-2 ">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="EndDate"
                  >
                    End Date
                  </label>
                  <Tooltips title="End Date" />
                </div>
              </div>
              <div className="col-md-9">
                <div className="py-2">
                   <Field
                        type="date"
                        className="form-control"
                        id="EndDate"
                        name="EndDate"
                    /> 
                </div>
                <div className="pt-2" style={{ height: "10px" }}>
                    </div>
                  </div>
                <div className="errMsg text-red-600 text-danger">
                 {/* <ErrorMessage name="EndDate" /> */}
                </div>
              </div>
              <div className="form-group row my-2">
                  <div className="col-md-3">
                    <div className="label-wrapper row row-cols-auto float-md-end">
                      <label
                        className="col-form-label col px-1"
                        htmlFor="discountLimit"
                      >
                        Discount limitation
                      </label>
                      <Tooltips title="Discount limitation" />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="input-group ">
                       <Field
                            as="select"
                            className="form-control"
                            data-val="true"
                            id="discountLimit"
                            name="discountLimit"
                        >
                            <option defaultValue="0">Unlimited</option>
                            <option value="1">N times only</option>
                            <option value="2">N times per customer</option>
                        </Field>
                      <div className="pt-2" style={{ height: "10px" }}>
                      </div>
                    </div>
                    <div className="errMsg text-red-600 text-danger">
                      {/* <ErrorMessage name="discountName" /> */}
                    </div>
                  </div>
                </div>
                <div className="form-group row my-2">
                <div className="col-md-3">
                  <div className="label-wrapper text-start text-md-end row">
                    <label className="col-form-label col px-1" htmlFor="nTimes">
                        N times
                    </label>
                    <Tooltips title="N times" />
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="input-group ">
                    <Field
                      className="form-control text-box single-line"
                      id="nTimes"
                      name="nTimes"
                      type="number"
                      placeholder="0"
                    />

                    <div className="pt-2" style={{ height: "10px" }}>
                    </div>
                  </div>
                  <div className="errMsg text-red-600 text-danger">
                   {/* <ErrorMessage name="nTimes" /> */}
                  </div>
                  <span className="field-validation-custom" />
                </div>
              </div> 
              <div className="form-group row my-2">
                <div className="col-md-3">
                  <div className="label-wrapper text-start text-md-end row">
                    <label className="col-form-label col px-1" htmlFor="adminComment">
                        Admin comment
                    </label>
                    <Tooltips title="Admin Comment" />
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="input-group ">
                    <Field
                      className="form-control text-box single-line"
                      id="adminComment"
                      name="adminComment"
                      type="text"
                      placeholder=""
                    />

                    <div className="pt-2" style={{ height: "10px" }}>
                    </div>
                  </div>
                  <div className="errMsg text-red-600 text-danger">
                   {/* <ErrorMessage name="adminComment" /> */}
                  </div>
                  <span className="field-validation-custom" />
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </>
  );
};

export default DiscountInfoForm;
