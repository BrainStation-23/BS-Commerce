import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import Tooltips from "../../global/tooltip";

const RequirementsForm = () => {
  const [btnToggler, setBtnToggler] = useState("bi-plus-lg");

  const toggleButton = () => {
    if (btnToggler == "bi-plus-lg") setBtnToggler("bi-dash");
    else setBtnToggler("bi-plus-lg");
  };

  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="requirements"
        data-hideattribute="ProductPage.HideInfoBlock"
        id="requirements"
      >
        <div className="card-header with-border clearfix">
          <div className="card-title float-start">
            <h4>
            <i className="bi bi-list float-start" />
            
            <p className="float-start px-1 mx-2">Requirements</p>
            </h4>
          </div>
          <div className="card-tools float-end">
            <div>
              <p>
                <button
                  className="btn btn-tool"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#requirementsTab"
                  aria-expanded="true"
                  aria-controls="requirementsTab"
                  onClick={() => toggleButton()}
                >
                  <i className={`bi ${btnToggler}`} />
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="collapse " id="requirementsTab">
          <div className="card-body">
            <h6>You need to save the discount before you can add requirements for this discount page.</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequirementsForm;
