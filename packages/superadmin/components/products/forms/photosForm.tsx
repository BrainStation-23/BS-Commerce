import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import Tooltips from "../../global/tooltip";

const photosForm = () => {
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

  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="photos"
        id="photos"
      >
        <div className="card-header with-border clearfix">
          <div className="card-title float-start">
            <i className="bi bi-truck float-start" />
            <p className="float-start px-1">photos</p>
          </div>
          <div className="card-tools float-end">
            <div>
              <p>
                <button
                  className="btn btn-tool"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#photosTab"
                  aria-expanded="true"
                  aria-controls="photosTab"
                  onClick={() => toggleButton()}
                >
                  <i className={`bi ${btnToggler}`} />
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="collapse " id="photosTab">
        <div className="card-body">
  <div className="form-group row my-2">
            <div className="col-md-3">
              <div className="label-wrapper row row-cols-auto float-md-end">
                <label className="col-form-label col px-1" htmlFor="photosUrl">
                  URL
                </label>
                <Tooltips title="Short description is the text that is displayed in product list i.e. category / manufacturer pages." />
              </div>
            </div>
            <div className="col-md-9">
              <div className="input-group pe-3 ">
                <Field
                  type="text"
                  className="form-control"
                  id="photosUrl"
                  name="photosUrl"
                />
              </div>
              <div className="errMsg text-red-600 text-danger">
                <ErrorMessage name="photosUrl" />
              </div>
            </div>
          </div>

          <div className="form-group row my-2">
            <div className="col-md-3">
              <div className="label-wrapper row row-cols-auto float-md-end">
                <label className="col-form-label col px-1" htmlFor="photosID">
                  ID
                </label>
                <Tooltips title="Short description is the text that is displayed in product list i.e. category / manufacturer pages." />
              </div>
            </div>
            <div className="col-md-9">
              <div className="input-group pe-3">
                <Field
                  type="text"
                  className="form-control"
                  id="photosID"
                  name="photosID"
                />
              </div>
              <div className="errMsg text-red-600 text-danger">
                <ErrorMessage name="photosID" />
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
                  Title
                </label>
                <Tooltips title="Short description is the text that is displayed in product list i.e. category / manufacturer pages." />
              </div>
            </div>
            <div className="col-md-9">
              <div className="input-group pe-3 ">
                <Field
                  type="text"
                  className="form-control"
                  id="photosTitle"
                  name="photosTitle"
                />
              </div>
              <div className="errMsg text-red-600 text-danger">
                <ErrorMessage name="photosTitle" />
              </div>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-3">
              <div className="label-wrapper row row-cols-auto float-md-end">
                <label
                  className="col-form-label col px-1"
                  htmlFor="displayOrderPhotos"
                >
                  Display Order
                </label>
                <Tooltips title="Product cost is a prime product cost. This field is only for internal use, not visible for customers." />
              </div>
            </div>
            <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
              <div className="input-group pe-3 ">
                <Field
                  type="number"
                  id="displayOrderPhotos"
                  name="displayOrderPhotos"
                  aria-disabled="false"
                />
              </div>
              <div className="errMsg text-red-600 text-danger">
                <ErrorMessage name="displayOrderPhotos" />
              </div>
            </div>
          </div>
</div>

        
        </div>
      </div>
    </>
  );
};

export default photosForm;
