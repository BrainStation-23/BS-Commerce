import { useState } from "react";
import { Field, ErrorMessage } from "formik";

import Tooltips from "../../global/tooltip";

const ProductInfoForm = () => {
  const [btnToggler, setBtnToggler] = useState("bi-plus-lg");

  const toggleButton = () => {
    if (btnToggler == "bi-plus-lg") setBtnToggler("bi-dash");
    else setBtnToggler("bi-plus-lg");
  };

  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="product-info"
        data-hideattribute="ProductPage.HideInfoBlock"
        id="product-info"
      >
        <div className="card-header with-border clearfix">
          <div className="card-title float-start">
            <i className="bi bi-info-lg float-start" />

            <p className="float-start px-1">Product info</p>
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
            <div id="product-details-area"> 
                <div className="form-group row my-2">
                  <div className="col-md-3">
                    <div className="label-wrapper row row-cols-auto float-md-end">
                      <label className="col-form-label col px-1" htmlFor="Name">
                        Product name
                      </label>
                      <Tooltips title="The name of the product." />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="input-group input-group-required">
                      <Field
                        className="form-control text-box single-line"
                        id="productName"
                        name="productName"
                        type="text"
                        placeholder="Build your own computer"
                      />
                      <div className="pt-2" style={{ height: "10px" }}>
                        <h2 className="required text-danger ">*</h2>
                      </div>
                    </div>
                    <div className="errMsg text-red-600 text-danger">
                      <ErrorMessage name="productName" />
                    </div>
                  </div>
                </div>
                <div className="form-group row my-2">
                  <div className="col-md-3">
                    <div className="label-wrapper row row-cols-auto float-md-end">
                      <label
                        className="col-form-label col px-1"
                        htmlFor="ShortDescription"
                      >
                        Short description
                      </label>
                      <Tooltips title="Short description is the text that is displayed in product list i.e. category / manufacturer pages." />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="input-group ">
                      <Field
                        as="textarea"
                        className="form-control"
                        id="ShortDescription"
                        name="ShortDescription"
                        placeholder={"Build it"}
                      />
                      <div className="pt-2" style={{ height: "10px" }}>
                        <h2 className="required text-danger ">*</h2>
                      </div>
                    </div>
                    <div className="errMsg text-red-600 text-danger">
                      <ErrorMessage name="productName" />
                    </div>
                  </div>
                </div> 
              <div className="form-group row my-2">
                <div className="col-md-3">
                  <div className="label-wrapper text-start text-md-end row">
                    <label className="col-form-label col px-1" htmlFor="Sku">
                      SKU
                    </label>
                    <Tooltips title="Product stock keeping unit (SKU). Your internal unique identifier that can be used to track this product." />
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="input-group ">
                    <Field
                      className="form-control text-box single-line"
                      id="Sku"
                      name="Sku"
                      type="text"
                      placeholder="COMP_CUST"
                    />

                    <div className="pt-2" style={{ height: "10px" }}>
                      <h2 className="required text-danger ">*</h2>
                    </div>
                  </div>
                  <div className="errMsg text-red-600 text-danger">
                    <ErrorMessage name="Sku" />
                  </div>
                  <span className="field-validation-custom" />
                </div>
              </div>
            </div>
            <div className="form-group row my-2 ">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="SelectedCategoryIds"
                    id="SelectedCategoryIds_label"
                  >
                    Categories
                  </label>
                  <Tooltips title="Choose categories. You can manage product categories by selecting Catalog > Categories." />
                </div>
              </div>
              <div className="col-md-9">
                <div className="py-2">
                  <Field
                    as="select"
                    id="SelectedCategoryIds"
                    name="SelectedCategoryIds"
                    data-role="multiselect"
                    aria-disabled="false"
                  >
                    <option defaultValue={0} disabled={true}>
                      --Select--
                    </option>
                    <option value={5}>Electronics</option>
                    <option value={6}>
                      Electronics &gt;&gt; Camera &amp; photo
                    </option>
                    <option value={7}>Electronics &gt;&gt; Cell phones</option>
                    <option value={8}>Electronics &gt;&gt; Others</option>
                    <option value={9}>Apparel</option>
                    <option value={10}>Apparel &gt;&gt; Shoes</option>
                    <option value={11}>Apparel &gt;&gt; Clothing</option>
                    <option value={12}>Apparel &gt;&gt; Accessories</option>
                    <option value={13}>Digital downloads</option>
                    <option value={1}>Computers</option>
                    <option value={2}>Computers &gt;&gt; Desktops</option>
                    <option value={3}>Computers &gt;&gt; Notebooks</option>
                    <option value={4}>Computers &gt;&gt; Software</option>
                    <option value={14}>Books</option>
                    <option value={15}>Jewelry</option>
                    <option value={16}>Gift Cards</option>
                  </Field>
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="SelectedCategoryIds" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfoForm;
