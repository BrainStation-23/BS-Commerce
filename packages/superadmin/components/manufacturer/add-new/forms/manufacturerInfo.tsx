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
            className="btn w-100 text-top invisible m-0 h-auto p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#prouctInfoTab"
            aria-expanded="true"
            aria-controls="prouctInfoTab"
            onClick={() => toggleButton()}
          >
            <div className="card-title row align-items-center visible">
              <i
                className="bi bi-info-lg col-1 align-text-top"
                style={{ fontSize: "25px" }}
              />
              <div className="fs-5 col px-3 text-start">Manufacturer Info</div>
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
                <div className="col-md-3">
                  <div className="label-wrapper row row-cols-auto float-md-end">
                    <label className="col-form-label col px-1" htmlFor="Name">
                      Manufacturer Name
                    </label>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="input-group input-group-required">
                    <Field
                      className="form-control text-box single-line"
                      id="name"
                      name="name"
                      type="text"
                      style={{
                        border: "none",
                        borderBottom: "2px grey solid",
                        padding: "2px",
                      }}
                    />
                    <div
                      className="pt-2"
                      style={{ height: "4px", padding: "15px" }}
                    >
                      <h2 className="required text-danger ">*</h2>
                    </div>
                  </div>
                  <div className="errMsg text-danger text-red-600">
                    <ErrorMessage name="name" />
                  </div>
                </div>
              </div>
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
                      id="description"
                      name="description"
                    />
                  </div>
                  <div className="errMsg text-danger text-red-600">
                    <ErrorMessage name="description" />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group row my-2">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label className="col-form-label col px-1" htmlFor="Name">
                    Picture
                  </label>
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group input-group-required">
                  <Field
                    className="form-control text-box single-line"
                    id="picture"
                    name="picture"
                    type="text"
                    style={{
                      border: "none",
                      borderBottom: "2px grey solid",
                    }}
                  />
                  <div
                    className="pt-2"
                    style={{ height: "4px", padding: "15px" }}
                  >
                    <h2 className="required text-danger ">*</h2>
                  </div>
                </div>
                <div className="errMsg text-danger text-red-600">
                  <ErrorMessage name="picture" />
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
                    Published?
                  </label>
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-md-0 mx-2">
                <Field
                  className="check-box mt-2"
                  id="isPublished"
                  name="isPublished"
                  type="checkbox"
                />
                <div className="errMsg text-danger text-red-600">
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
