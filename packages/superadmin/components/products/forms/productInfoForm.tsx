import { FC, useState } from "react";

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
              <div className="px-3 fs-5 col text-start">
                <i
                  className="bi bi-info-lg col-1 px-1"
                  style={{ fontSize: "25px" }}
                />
                Product info
              </div>
              <div className="col-1">
                <i className={`bi ${btnToggler}`} />
              </div>
            </div>
          </button>
        </div>
        <div className="collapse " id="prouctInfoTab">
          <div className="card-body">
            <FieldTemplate
              label="Product name"
              isRequired={true}
              fieldID="productName"
              fieldType="text"
              fieldAs=""
              extraClass=""
              fieldClass=""
            />
            <FieldTemplate
              label="Short description"
              isRequired={false}
              fieldID="ShortDescription"
              fieldType=""
              fieldAs="textarea"
              extraClass=""
              fieldClass=""
            />
            <FieldTemplate
              label="Full description"
              isRequired={false}
              fieldID="FullDescription"
              fieldType=""
              fieldAs="textarea"
              extraClass=""
              fieldClass=""
            />
            <FieldTemplate
              label="SKU"
              isRequired={true}
              fieldID="Sku"
              fieldType="text"
              fieldAs=""
              extraClass=""
              fieldClass=""
            />
            <FieldTemplate
              label="Price"
              isRequired={true}
              fieldID="Price"
              fieldType="number"
              fieldAs=""
              extraClass=""
              fieldClass=""
            />
            <FieldTemplate
              label="Old price"
              isRequired={true}
              fieldID="OldPrice"
              fieldType="number"
              fieldAs=""
              extraClass=""
              fieldClass=""
            />
            <FieldTemplate
              label="Product cost"
              isRequired={true}
              fieldID="ProductCost"
              fieldType="number"
              fieldAs=""
              extraClass=""
              fieldClass=""
            />
            <FieldTemplate
              label="Show on HomePage"
              isRequired={false}
              fieldID="showOnHomePage"
              fieldType="checkbox"
              fieldAs=""
              extraClass=""
              fieldClass="check-box mt-2  "
            />
            <FieldTemplate
              label="Include on top menu"
              isRequired={false}
              fieldID="includeInTopMenu"
              fieldType="checkbox"
              fieldAs=""
              extraClass=""
              fieldClass="check-box mt-2  "
            />
            <FieldTemplate
              label="Allow to select page size"
              isRequired={false}
              fieldID="allowToSelectPageSize"
              fieldType="checkbox"
              fieldAs=""
              extraClass=""
              fieldClass="check-box mt-2  "
            />
            <FieldTemplate
              label="Published"
              isRequired={false}
              fieldID="published"
              fieldType="checkbox"
              fieldAs=""
              extraClass=""
              fieldClass="check-box mt-2  "
            />
            <FieldTemplate
              label="Display Order"
              isRequired={true}
              fieldID="displayOrder"
              fieldType="number"
              fieldAs=""
              extraClass=""
              fieldClass=""
            />
            <FieldTemplate
              label="Featured"
              isRequired={false}
              fieldID="isFeatured"
              fieldType="checkbox"
              fieldAs=""
              extraClass=""
              fieldClass="check-box mt-2  "
            />

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

            <FieldTemplate
              label="Tags"
              isRequired={true}
              fieldID="tags"
              fieldType="none"
              fieldAs=""
              extraClass=""
              fieldClass="custom-select w-100"
              options={tagsOptions}
              component={CustomSelect}
              placeholder="Select brands..."
              isMulti={true}
            />
            <FieldTemplate
              label="Brands"
              isRequired={true}
              fieldID="brands"
              fieldType="none"
              fieldAs=""
              extraClass=""
              fieldClass="custom-select w-100"
              options={brandOptions}
              component={CustomSelect}
              placeholder="Select brands..."
              isMulti={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfoForm;
