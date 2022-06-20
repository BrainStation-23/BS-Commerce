import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import Tooltips from "../../global/tooltip";

const MetaForm = () => {
  const [btnToggler, setBtnToggler] = useState("bi-plus-lg");

  const toggleButton = () => {
    if (btnToggler == "bi-plus-lg") setBtnToggler("bi-dash");
    else setBtnToggler("bi-plus-lg");
  };

  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="meta"
        data-hideattribute="ProductPage.HideInfoBlock"
        id="meta"
      >
        <div className="card-header with-border clearfix">
          <div className="card-title float-start">
            <i className="bi bi-currency-dollar float-start" />

            <p className="float-start px-1">Meta</p>
          </div>
          <div className="card-tools float-end">
            <div>
              <p>
                <button
                  className="btn btn-tool"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#metaTab"
                  aria-expanded="true"
                  aria-controls="metaTab"
                  onClick={() => toggleButton()}
                >
                  <i className={`bi ${btnToggler}`} />
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="collapse " id="metaTab">
          <div className="card-body">
            <div className="form-group row my-2">
              <div className="col-md-3">
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
                    type="text"
                    className="form-control"
                    id="keywords"
                    name="keywords"
                  />
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="keywords" />
                </div>
              </div>
            </div>
            <div className="form-group row my-2">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label className="col-form-label col px-1" htmlFor="metaTitle">
                    Title
                  </label>
                  <Tooltips title="Short description is the text that is displayed in product list i.e. category / manufacturer pages." />
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group pe-3">
                  <Field
                    type="text"
                    className="form-control"
                    id="metaTitle"
                    name="metaTitle"
                  />
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="metaTitle" />
                </div>
              </div>
            </div>
            <div className="form-group row my-2">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label className="col-form-label col px-1" htmlFor="metaDescription">
                    Description
                  </label>
                  <Tooltips title="Short description is the text that is displayed in product list i.e. category / manufacturer pages." />
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group pe-3">
                  <Field
                    type="text"
                    className="form-control"
                    id="metaDescription"
                    name="metaDescription"
                  />
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="metaDescription" />
                </div>
              </div>
            </div>
            
            <div className="form-group row my-2">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end">
                  <label className="col-form-label col px-1" htmlFor="metaFriendlyPageName">
                    Friendly Page Name
                  </label>
                  <Tooltips title="Short description is the text that is displayed in product list i.e. category / manufacturer pages." />
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group ">
                  <Field
                    type="text"
                    className="form-control"
                    id="metaFriendlyPageName"
                    name="metaFriendlyPageName"
                  />
                  <div className="pt-2" style={{ height: "10px" }}>
                    <h2 className="required text-danger ">*</h2>
                  </div>
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="metaFriendlyPageName" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaForm;
