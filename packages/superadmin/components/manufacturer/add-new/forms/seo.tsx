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
            className="btn w-100 text-top invisible m-0 h-auto p-0"
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
                style={{ fontSize: "25px" }}
              />
              <div className="fs-5 col px-3 text-start">SEO</div>
              <div className="col-1">
                <i className={`bi ${btnToggler}`} />
              </div>
            </div>
          </button>
        </div>
        <div className="collapse " id="photosTab">
          <div className="card-body">
            <div className="form-group row my-2">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label className="col-form-label col px-1" htmlFor="keywords">
                    Keywords
                    <span className="required text-danger ">*</span>
                  </label>
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group pe-3">
                  <Field
                    className="border-bottom form-control rounded-0 border-3 border border-0 shadow-none"
                    id="metaKeyword"
                    name="metaKeyword"
                    type="text"
                  />
                </div>
                <div className="errMsg text-danger text-red-600">
                  <ErrorMessage name="metaKeyword" />
                </div>
              </div>
            </div>
            <div className="form-group row my-2">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="photosTitle"
                  >
                    Meta Description
                    <span className="required text-danger ">*</span>
                  </label>
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group pe-3 ">
                  <Field
                    type="text"
                    className="border-bottom form-control rounded-0 border-3 border border-0 shadow-none"
                    id="metaDescription"
                    name="metaDescription"
                  />
                </div>
                <div className="errMsg text-danger text-red-600">
                  <ErrorMessage name="metaDescription" />
                </div>
              </div>
            </div>
            <div className="form-group row my-2">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="photosTitle"
                  >
                    Meta Title
                    <span className="required text-danger ">*</span>
                  </label>
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group pe-3 ">
                  <Field
                    type="text"
                    className="border-bottom form-control rounded-0 border-3 border border-0 shadow-none"
                    id="metaTitle"
                    name="metaTitle"
                  />
                </div>
                <div className="errMsg text-danger text-red-600">
                  <ErrorMessage name="metaTitle" />
                </div>
              </div>
            </div>
            <div className="form-group row my-2">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="photosTitle"
                  >
                    SEFN
                    <span className="required text-danger ">*</span>
                  </label>
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group pe-3 ">
                  <Field
                    type="text"
                    className="border-bottom form-control rounded-0 border-3 border border-0 shadow-none"
                    id="seftn"
                    name="seftn"
                  />
                </div>
                <div className="errMsg text-danger text-red-600">
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
