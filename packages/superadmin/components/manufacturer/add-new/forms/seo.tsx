import { FC } from "react";
import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import Tooltips from "../../../global/tooltip";
import CustomSelect from "./customSelect";
const SEO: FC = () => {
  const [btnToggler, setBtnToggler] = useState("bi-plus-lg");
  const [checkboxToggler, setCheckboxToggler] = useState(false);

  const toggleButton = () => {
    if (btnToggler == "bi-plus-lg") setBtnToggler("bi-dash");
    else setBtnToggler("bi-plus-lg");
  };

  const isCheckboxChecked = () => {
    setCheckboxToggler(!checkboxToggler);
    console.log(checkboxToggler);
  };
  const keywordOptions = [
    {
      label: "Manufacturer A",
      value: "Manufacturer A",
    },
    {
      label: "Manufacturer B",
      value: "Manufacturer B",
    },
    {
      label: "Manufacturer C",
      value: "Manufacturer C",
    },
    {
      label: "Manufacturer D",
      value: "Manufacturer D",
    },
    {
      label: "Manufacturer E",
      value: "Manufacturer E",
    },
  ];
  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="photos"
        id="photos"
      >
        <div className="card-header with-border d-flex justify-content-between align-items-center">
          <button
            className="btn invisible w-100 h-auto text-top m-0 p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#photosTab"
            aria-expanded="true"
            aria-controls="photosTab"
            onClick={() => toggleButton()}
          >
            <div className="card-title row align-items-center visible">
              <i
                className="bi bi-search fill col-1"
                style={{ fontSize: "25px", marginTop: "-20px" }}
              />
              <div className="px-3 fs-5 col text-start">SEO</div>
              <div className="col-1">
                <i className={`bi ${btnToggler}`} />
              </div>
            </div>
          </button>
        </div>
        <div className="collapse " id="photosTab">
          <div className="card-body">
            <div className="form-group row my-2">
              <div className="col-md-2">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label className="col-form-label col px-1" htmlFor="keywords">
                    Keywords
                  </label>
                  <Tooltips title="Short description is the text that is displayed in product list i.e. category / manufacturer pages." />
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group pe-3">
                  <Field
                    className="form-control text-box single-line"
                    id="metaKeyword"
                    name="metaKeyword"
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
                  <ErrorMessage name="metaKeyword" />
                </div>
              </div>
            </div>
            <div className="form-group row my-2">
              <div className="col-md-2">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="photosTitle"
                  >
                    Meta Description
                  </label>
                  <Tooltips title="Short description is the text that is displayed in product list i.e. category / manufacturer pages." />
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group pe-3 ">
                  <Field
                    type="text"
                    className="form-control"
                    id="metaDescription"
                    name="metaDescription"
                  />
                  <div
                    className="pt-2"
                    style={{ height: "4px", padding: "15px" }}
                  >
                    <h2 className="required text-danger ">*</h2>
                  </div>
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="metaDescription" />
                </div>
              </div>
            </div>
            <div className="form-group row my-2">
              <div className="col-md-2">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="photosTitle"
                  >
                    Meta Title
                  </label>
                  <Tooltips title="Short description is the text that is displayed in product list i.e. category / manufacturer pages." />
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group pe-3 ">
                  <Field
                    type="text"
                    className="form-control"
                    id="metaTitle"
                    name="metaTitle"
                  />
                  <div
                    className="pt-2"
                    style={{ height: "4px", padding: "15px" }}
                  >
                    <h2 className="required text-danger ">*</h2>
                  </div>
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="metaTitle" />
                </div>
              </div>
            </div>
            <div className="form-group row my-2">
              <div className="col-md-2">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="photosTitle"
                  >
                    SEFN
                  </label>
                  <Tooltips title="Short description is the text that is displayed in product list i.e. category / manufacturer pages." />
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group pe-3 ">
                  <Field
                    type="text"
                    className="form-control"
                    id="seftn"
                    name="seftn"
                  />
                  <div
                    className="pt-2"
                    style={{ height: "4px", padding: "15px" }}
                  >
                    <h2 className="required text-danger ">*</h2>
                  </div>
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="seftn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SEO;
