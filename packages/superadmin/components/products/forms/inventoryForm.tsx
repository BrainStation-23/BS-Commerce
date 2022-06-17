import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import Tooltips from "../../global/tooltip";

const InventoryForm = () => {
  const [btnToggler, setBtnToggler] = useState("bi-plus-lg");

  const toggleButton = () => {
    if (btnToggler == "bi-plus-lg") setBtnToggler("bi-dash");
    else setBtnToggler("bi-plus-lg");
  };

  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="inventory"
        data-hideattribute="ProductPage.HideInfoBlock"
        id="inventory"
      >
        <div className="card-header with-border clearfix">
          <div className="card-title float-start">
            <i className="bi bi-diagram-3-fill float-start" />
            <p className="float-start px-1">Inventory</p>
          </div>
          <div className="card-tools float-end">
            <div>
              <p>
                <button
                  className="btn btn-tool"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#inventoryTab"
                  aria-expanded="true"
                  aria-controls="inventoryTab"
                  onClick={() => toggleButton()}
                >
                  <i className={`bi ${btnToggler}`} />
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="collapse " id="inventoryTab">
          <div className="card-body">
            <div className="form-group row" id="pnlTaxCategory">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end p-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="ManageInventoryMethodId"
                  >
                    Inventory method
                  </label>
                  <Tooltips title="Select inventory method. There are three methods: Don’t track inventory, Track inventory and Track inventory by attributes. You should use Track inventory by attributes when the product has different combinations of these attributes and then manage inventory for these combinations." />
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <Field
                  as="select"
                  className="form-control"
                  id="ManageInventoryMethodId"
                  name="ManageInventoryMethodId"
                >
                  <option defaultValue={0}>Don&apos;t track inventory</option>
                  <option value={1}>Track inventory</option>
                  <option value={2}>
                    Track inventory by product attributes
                  </option>
                </Field>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="ManageInventoryMethodId" />
                </div>
              </div>
            </div>

            <div className="form-group row" id="inventory-area">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end p-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="OrderMinimumQuantity"
                  >
                    Minimum cart qty
                  </label>
                  <Tooltips title="Set the minimum quantity allowed in a customer's shopping cart e.g. set to 3 to only allow customers to purchase 3 or more of this product." />
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <div className="input-group ">
                  <Field
                    type="number"
                    id="OrderMinimumQuantity"
                    name="OrderMinimumQuantity"
                  />

                  <div className="" style={{ height: "10px" }}>
                    <h2 className="required text-danger ">*</h2>
                  </div>
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="OrderMinimumQuantity" />
                </div>
              </div>
            </div>

            <div className="form-group row" id="inventory-area">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end p-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="OrderMaximumQuantity"
                  >
                    Maximum cart qty
                  </label>
                  <Tooltips title="Set the maximum quantity allowed in a customer's shopping cart e.g. set to 3 to only allow customers to purchase 3 or more of this product." />
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <div className="input-group ">
                  <Field
                    type="number"
                    id="OrderMaximumQuantity"
                    name="OrderMaximumQuantity"
                  />

                  <div className="" style={{ height: "10px" }}>
                    <h2 className="required text-danger ">*</h2>
                  </div>
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="OrderMaximumQuantity" />
                </div>
              </div>
            </div>

            <div className="form-group row" id="inventory-area">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end p-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="AllowedQuantities"
                  >
                    Allowed quantities
                  </label>
                  <Tooltips title="Enter a comma separated list of quantities you want this product to be restricted to. Instead of a quantity textbox that allows them to enter any quantity, they will receive a dropdown list of the values you enter here." />
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <div className="input-group ">
                  <Field
                    type="text"
                    id="AllowedQuantities"
                    name="AllowedQuantities"
                  />

                  <div className="" style={{ height: "10px" }}>
                    <h2 className="required text-danger ">*</h2>
                  </div>
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="AllowedQuantities" />
                </div>
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end p-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="NotReturnable"
                  >
                    Not returnable
                  </label>
                  <Tooltips title="Determines whether this product is tax exempt (tax will not be applied to this product at checkout)." />
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <Field
                  className="check-box mt-2 "
                  id="NotReturnable"
                  name="NotReturnable"
                  type="checkbox"
                />
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="NotReturnable" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryForm;
