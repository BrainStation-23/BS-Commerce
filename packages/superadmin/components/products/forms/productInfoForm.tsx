import { FC, useState } from "react";
import { Field, ErrorMessage } from "formik";

import CustomSelect from "../CustomSelect.component";
import FieldTemplate from "./fieldTemplate";

const ProductInfoForm: FC = () => {
  const [btnToggler, setBtnToggler] = useState("bi-plus-lg");

  const toggleButton = () => {
    if (btnToggler == "bi-plus-lg") setBtnToggler("bi-dash");
    else setBtnToggler("bi-plus-lg");
  };

  const tagsOptions = [
    {
      label: "Tag1",
      value: "Tag1",
    },
    {
      label: "Tag2",
      value: "Tag2",
    },
    {
      label: "Tag3",
      value: "Tag3",
    },
    {
      label: "Tag4",
      value: "Tag4",
    },
    {
      label: "Tag5",
      value: "Tag5",
    },
  ];

  const brandOptions = [
    {
      label: "Daraz",
      value: "Daraz",
    },
    {
      label: "Pickaboo",
      value: "Pickaboo",
    },
    {
      label: "Chaldal",
      value: "Chaldal",
    },
    {
      label: "Bagdoom",
      value: "Bagdoom",
    },
    {
      label: "Othoba",
      value: "Othoba",
    },
    {
      label: "Ajkerdeal",
      value: "Ajkerdeal",
    },
  ];
  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="product-info"
        data-hideattribute="ProductPage.HideInfoBlock"
        id="product-info"
      >
        <div className="card-header with-border d-flex justify-content-between align-items-center">
          <button
            className="btn invisible w-100 h-auto text-top m-0 p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#prouctInfoTab"
            aria-expanded="true"
            aria-controls="prouctInfoTab"
            onClick={() => toggleButton()}
          >
            <div className="card-title row align-items-center visible">
              <i
                className="bi bi-info-lg col-1 "
                style={{ fontSize: "25px" }}
              />
              <div className="px-3 fs-5 col text-start">Product info</div>
              <div className="col-1">
                <i className={`bi ${btnToggler}`} />
              </div>
            </div>
          </button>
        </div>
        <div className="collapse " id="prouctInfoTab">
          <div className="card-body">
            <div id="product-details-area">
              <FieldTemplate
                label="Product name"
                isRequired={true}
                fieldName="productName"
                fieldType=""
                extraClass=""
                fieldClass="w-50 form-control border border-primary border-0 border-bottom active:border-0 shadow "
              />
              <FieldTemplate
                label="Short description"
                isRequired={false}
                fieldName="ShortDescription"
                fieldType="textarea"
                extraClass=""
                fieldClass="w-50 form-control border border-primary border-0 border-bottom active:border-0 shadow "
              />
              {/* <div className="form-group row my-2">
                <div className="col-md-3">
                  <div className="label-wrapper row row-cols-auto float-md-end">
                    <label
                      className="col-form-label col px-1"
                      htmlFor="ShortDescription"
                    >
                      Short description
                    </label>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="input-group pe-3 ">
                    <Field
                      as="textarea"
                      className="form-control"
                      id="ShortDescription"
                      name="ShortDescription"
                    />
                  </div>
                  <div className="errMsg text-red-600 text-danger">
                    <ErrorMessage name="ShortDescription" />
                  </div>
                </div>
              </div> */}
              <div className="form-group row my-2">
                <div className="col-md-3">
                  <div className="label-wrapper row row-cols-auto float-md-end">
                    <label
                      className="col-form-label col px-1"
                      htmlFor="FullDescription"
                    >
                      Full description
                    </label>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="input-group pe-3 ">
                    <Field
                      as="textarea"
                      className="form-control"
                      id="FullDescription"
                      name="FullDescription"
                    />
                  </div>
                  <div className="errMsg text-red-600 text-danger">
                    <ErrorMessage name="FullDescription" />
                  </div>
                </div>
              </div>
              <div className="form-group row my-2">
                <div className="col-md-3">
                  <div className="label-wrapper text-start text-md-end row">
                    <label className="col-form-label col px-1" htmlFor="Sku">
                      SKU<span className="required text-danger ">*</span>
                    </label>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="input-group ">
                    <Field
                      className="form-control text-box single-line"
                      id="Sku"
                      name="Sku"
                      type="text"
                    />
                  </div>
                  <div className="errMsg text-red-600 text-danger">
                    <ErrorMessage name="Sku" />
                  </div>
                  <span className="field-validation-custom" />
                </div>
              </div>
            </div>
            <div className="form-group row" id="product-price-area">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end py-2">
                  <label className="col-form-label col px-1" htmlFor="Price">
                    Price<span className="required text-danger ">*</span>
                  </label>
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <div className="input-group ">
                  <Field
                    type="number"
                    id="Price"
                    name="Price"
                    className="form-control"
                  />
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="OldPrice" />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end py-2">
                  <label className="col-form-label col px-1" htmlFor="OldPrice">
                    Old price<span className="required text-danger ">*</span>
                  </label>
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <div className="input-group ">
                  <Field
                    type="number"
                    id="OldPrice"
                    name="OldPrice"
                    aria-disabled="false"
                    className="form-control"
                  />
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="OldPrice" />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end py-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="ProductCost"
                  >
                    Product cost<span className="required text-danger ">*</span>
                  </label>
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <div className="input-group ">
                  <Field
                    type="number"
                    id="ProductCost"
                    name="ProductCost"
                    aria-disabled="false"
                    className="form-control"
                  />
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="ProductCost" />
                </div>
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end py-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="showOnHomePage"
                  >
                    Show on HomePage
                  </label>
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <Field
                  className="check-box mt-2"
                  id="showOnHomePage"
                  name="showOnHomePage"
                  type="checkbox"
                />
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="showOnHomePage" />
                </div>
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end py-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="includeInTopMenu"
                  >
                    Include on top menu
                  </label>
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <Field
                  className="check-box mt-2"
                  id="includeInTopMenu"
                  name="includeInTopMenu"
                  type="checkbox"
                />
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="includeInTopMenu" />
                </div>
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end py-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="allowToSelectPageSize"
                  >
                    Allow to select page size
                  </label>
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <Field
                  className="check-box mt-2"
                  id="allowToSelectPageSize"
                  name="allowToSelectPageSize"
                  type="checkbox"
                />
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="allowToSelectPageSize" />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end py-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="published"
                  >
                    Published
                  </label>
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <Field
                  className="check-box mt-2"
                  id="published"
                  name="published"
                  type="checkbox"
                />
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="published" />
                </div>
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end p-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="displayOrder"
                  >
                    Display Order
                  </label>
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <div className="input-group ">
                  <Field
                    type="number"
                    id="displayOrder"
                    name="displayOrder"
                    aria-disabled="false"
                    className="form-control"
                  />
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="displayOrder" />
                </div>
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end py-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="isFeatured"
                  >
                    Featured
                  </label>
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <Field
                  className="check-box mt-2"
                  id="isFeatured"
                  name="isFeatured"
                  type="checkbox"
                />
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="isFeatured" />
                </div>
              </div>
            </div>

            {/* <div className="form-group row">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end py-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="publishDate"
                  >
                    Publlish Date
                  </label>
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <div className="input-group ">
                  <Field
                    type="date"
                    id="publishDate"
                    name="publishDate"
                    aria-disabled="false"
                    className="form-control"
                  />
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="publishDate" />
                </div>
              </div>
            </div> */}

            <div className="form-group row my-2">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label className="col-form-label col px-1" htmlFor="tags">
                    Tags<span className="required text-danger ">*</span>
                  </label>
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group ">
                  {/* <Field
                    type="text"
                    className="form-control"
                    id="tags"
                    name="tags"
                  /> */}
                  <Field
                    className="custom-select w-100"
                    id="tags"
                    name="tags"
                    options={tagsOptions}
                    component={CustomSelect}
                    placeholder="Select tags..."
                    isMulti={true}
                  />
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="tags" />
                </div>
              </div>
            </div>

            <div className="form-group row my-2">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label className="col-form-label col px-1" htmlFor="brands">
                    Brands<span className="required text-danger ">*</span>
                  </label>
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group ">
                  <Field
                    className="custom-select w-100"
                    id="brands"
                    name="brands"
                    options={brandOptions}
                    component={CustomSelect}
                    placeholder="Select brands..."
                    isMulti={true}
                  />
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="brands" />
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
