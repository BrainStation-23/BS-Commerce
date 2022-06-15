import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import Tooltips from "../../global/tooltip";

const PricesForm = () => {
  const [btnToggler, setBtnToggler] = useState("bi-plus-lg");

  const toggleButton = () => {
    if (btnToggler == "bi-plus-lg") setBtnToggler("bi-dash");
    else setBtnToggler("bi-plus-lg");
  };

  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="prices"
        data-hideattribute="ProductPage.HideInfoBlock"
        id="prices"
      >
        <div className="card-header with-border clearfix">
          <div className="card-title float-start">
            <i className="bi bi-currency-dollar float-start" />

            <p className="float-start px-1">Prices</p>
          </div>
          <div className="card-tools float-end">
            <div>
              <p>
                <button
                  className="btn btn-tool"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#pricesTab"
                  aria-expanded="true"
                  aria-controls="pricesTab"
                  onClick={() => toggleButton()}
                >
                  <i className={`bi ${btnToggler}`} />
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="collapse " id="pricesTab">
          <div className="card-body">
            <div className="form-group row" id="product-price-area">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end p-2">
                  <label className="col-form-label col px-1" htmlFor="Price">
                    Price
                  </label>
                  <Tooltips title="The price of the product. You can manage currency by selecting Configuration > Currencies." />
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <div className="input-group ">
                  <Field type="number" id="Price" name="Price" />

                  <div className="" style={{ height: "10px" }}>
                    <h2 className="required text-danger ">*</h2>
                  </div>
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="OldPrice" />
                </div>
              </div>
            </div>
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end p-2">
                  <label className="col-form-label col px-1" htmlFor="OldPrice">
                    Old price
                  </label>
                  <Tooltips title="The old price of the product. If you set an old price, this will display alongside the current price on the product page to show the difference in price." />
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <div className="input-group ">
                  <Field
                    type="number"
                    id="OldPrice"
                    name="OldPrice"
                    aria-disabled="false"
                  />

                  <div className="" style={{ height: "10px" }}>
                    <h2 className="required text-danger ">*</h2>
                  </div>
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="OldPrice" />
                </div>
              </div>
            </div>
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end p-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="ProductCost"
                  >
                    Product cost
                  </label>
                  <Tooltips title="Product cost is a prime product cost. This field is only for internal use, not visible for customers." />
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <div className="input-group ">
                  <Field
                    type="number"
                    id="ProductCost"
                    name="ProductCost"
                    aria-disabled="false"
                  />

                  <div className="" style={{ height: "10px" }}>
                    <h2 className="required text-danger ">*</h2>
                  </div>
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="ProductCost" />
                </div>
              </div>
            </div>

            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end p-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="SelectedDiscountIds"
                    id="SelectedDiscountIds_label"
                  >
                    Discounts
                  </label>
                  <Tooltips title="Select discounts to apply to this product. You can manage discounts by selecting Discounts from the Promotions menu." />
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <Field
                  as="select"
                  id="SelectedDiscountIds"
                  name="SelectedDiscountIds"
                  data-role="multiselect"
                  aria-disabled="false"
                >
                  <option defaultValue={0} disabled={true}>
                    --Select--
                  </option>
                  <option value={1}>Sample discount with coupon code</option>
                </Field>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="SelectedDiscountIds" />
                </div>
              </div>
            </div>
            <div id="product-tax-area">
              <div className="form-group row">
                <div className="col-md-3">
                  <div className="label-wrapper row row-cols-auto float-md-end p-2">
                    <label
                      className="col-form-label col px-1"
                      htmlFor="IsTaxExempt"
                    >
                      Tax exempt
                    </label>
                    <Tooltips title="Determines whether this product is tax exempt (tax will not be applied to this product at checkout)." />
                  </div>
                </div>
                <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                  <Field
                    className="check-box mt-2"
                    id="IsTaxExempt"
                    name="IsTaxExempt"
                    type="checkbox"
                  />
                  <div className="errMsg text-red-600 text-danger">
                    <ErrorMessage name="IsTaxExempt" />
                  </div>
                </div>
              </div>
              <div className="form-group row" id="pnlTaxCategory">
                <div className="col-md-3">
                  <div className="label-wrapper row row-cols-auto float-md-end p-2">
                    <label
                      className="col-form-label col px-1"
                      htmlFor="TaxCategoryId"
                    >
                      Tax category
                    </label>
                    <Tooltips title="The tax classification for the product. You can manage tax categories by selecting Configuration > Tax > Tax Categories." />
                  </div>
                </div>
                <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                  <Field
                    as="select"
                    className="form-control"
                    data-role="multiselect"
                    id="TaxCategoryId"
                    name="TaxCategoryId"
                  >
                    <option defaultValue={0} disabled={true}>
                      --Select--
                    </option>
                    <option value={1}>Books</option>
                    <option value={2}>Electronics &amp; Software</option>
                    <option value={3}>Downloadable Products</option>
                    <option value={4}>Jewelry</option>
                    <option value={5}>Apparel</option>
                  </Field>
                  <div className="errMsg text-red-600 text-danger">
                    <ErrorMessage name="TaxCategoryId" />
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

export default PricesForm;
