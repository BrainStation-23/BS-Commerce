import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import Tooltips from "../../global/tooltip";

const PhotosForm = () => {
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
                className="bi bi-image-fill col-1"
                style={{ fontSize: "25px", marginTop: "-20px" }}
              />
              <div className="px-3 fs-5 col text-start">Photos</div>
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
                  <label
                    className="col-form-label col px-1"
                    htmlFor="photosUrl"
                  >
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

            {/* <div className="form-group row my-2">
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
            </div> */}

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
                    className="form-control"
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

export default PhotosForm;
