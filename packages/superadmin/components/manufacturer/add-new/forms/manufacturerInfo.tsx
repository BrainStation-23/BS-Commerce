import { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { FC } from "react";
import Tooltips from "../../../global/tooltip";
const CreateNewManufacturer: FC = () => {
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
        id="Manufacturer-info"
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
                className="bi bi-info-lg align-text-top col-1"
                style={{ fontSize: "25px", marginTop: "-20px" }}
              />
              <div className="px-3 fs-5 col text-start">Manufacturer Info</div>
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
                <div className="col-md-2">
                  <div className="label-wrapper row row-cols-auto float-md-end">
                    <label className="col-form-label col px-1" htmlFor="Name">
                      Manufacturer Name
                    </label>
                    <Tooltips title="The name of the Manufacturer." />
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="input-group input-group-required">
                    <Field
                      className="form-control text-box single-line"
                      id="name"
                      name="name"
                      type="text"
                    />
                    <div
                      className="pt-2"
                      style={{ height: "4px", padding: "15px" }}
                    >
                      <h2 className="required text-danger ">*</h2>
                    </div>
                  </div>
                  <div className="errMsg text-red-600 text-danger">
                    <ErrorMessage name="name" />
                  </div>
                </div>
              </div>
              <div className="form-group row my-2">
                <div className="col-md-2">
                  <div className="label-wrapper row row-cols-auto float-md-end">
                    <label
                      className="col-form-label col px-1"
                      htmlFor="FullDescription"
                    >
                      Full description
                    </label>
                    <Tooltips title="Short description is the text that is displayed in product list i.e. category / manufacturer pages." />
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="input-group pe-3 ">
                    <Field
                      as="textarea"
                      className="form-control"
                      id="description"
                      name="description"
                    />
                  </div>
                  <div className="errMsg text-red-600 text-danger">
                    <ErrorMessage name="description" />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group row my-2">
              <div className="col-md-2">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label className="col-form-label col px-1" htmlFor="Name">
                    Picture
                  </label>
                  <Tooltips title="The name of the product." />
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group input-group-required">
                  <Field
                    className="form-control text-box single-line"
                    id="picture"
                    name="picture"
                    type="text"
                  />
                  <div
                    className="pt-2"
                    style={{ height: "4px", padding: "15px" }}
                  >
                    <h2 className="required text-danger ">*</h2>
                  </div>
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="picture" />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-2">
                <div className="label-wrapper row row-cols-auto float-md-end py-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="showOnHomePage"
                  >
                    Published?
                  </label>
                  <Tooltips title="Determines whether this product is tax exempt (tax will not be applied to this product at checkout)." />
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <Field
                  className="check-box mt-2"
                  id="isPublished"
                  name="isPublished"
                  type="checkbox"
                />
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="isPublished" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewManufacturer;
