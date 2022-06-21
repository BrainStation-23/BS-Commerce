import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import Tooltips from "../../global/tooltip";

const CategoryForm = () => {
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
                className="bi bi-diagram-3-fill col-1"
                style={{ fontSize: "25px", marginTop: "-20px" }}
              />
              <div className="px-3 fs-5 col text-start">Category</div>
              <div className="col-1">
                <i className={`bi ${btnToggler}`} />
              </div>
            </div>
          </button>
        </div>
        <div className="collapse " id="categoryTab">
          <div className="card-body">
            <div className="form-group row my-2 ">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end pe-2">
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
                    className="form-control"
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

            <div className="form-group row">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end p-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="isFeaturedCategory"
                  >
                    Featured
                  </label>
                  <Tooltips title="Determines whether this product is tax exempt (tax will not be applied to this product at checkout)." />
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <Field
                  className="check-box mt-2"
                  id="isFeaturedCategory"
                  name="isFeaturedCategory"
                  type="checkbox"
                />
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="isFeaturedCategory" />
                </div>
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-3">
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
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <div className="input-group ">
                  <Field
                    type="number"
                    id="displayOrderCategory"
                    name="displayOrderCategory"
                    aria-disabled="false"
                    className="form-control"
                  />
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="displayOrderCategory" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryForm;
