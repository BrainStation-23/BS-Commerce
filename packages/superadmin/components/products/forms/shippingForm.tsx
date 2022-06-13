import { ErrorMessage, Field } from "formik";
import { useState } from "react";

const ShippingForm = () => {
  const [btnToggler, setBtnToggler] = useState("bi-plus-lg");
  const [checkboxToggler, setCheckboxToggler] = useState(false);

  const toggleButton = () => {
    if (btnToggler == "bi-plus-lg") setBtnToggler("bi-dash");
    else setBtnToggler("bi-plus-lg");
  };

  const isCheckboxChecked = () =>{
    // const checkbox =  document.getElementById(
    //   'IsShipEnabled',
    // ) as HTMLInputElement | null;
    
    // // 👇️ optional chaining
    // if (checkbox?.checked) {
    //   return true;
    // } else {
    //   return false;
    // }
    setCheckboxToggler(!checkboxToggler);
    console.log(checkboxToggler);
    
  }

  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="prices"
        data-hideattribute="ProductPage.HideInfoBlock"
        id="prices"
      >
        <div className="card-header with-border clearfix">
          <div className="card-title float-start">
            <i className="bi bi-truck float-start" />
            <p className="float-start px-1">
            Shipping 

            </p>
          </div>
          <div className="card-tools float-end">
            <div>
              <p>
                <button
                  className="btn btn-tool"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#shippingTab"
                  aria-expanded="true"
                  aria-controls="shippingTab"
                  onClick={() => toggleButton()}
                >
                  <i className={`bi ${btnToggler}`} />
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="collapse " id="shippingTab">
          <div className="card-body">
          <div className="form-group row">
                <div className="col-md-3">
                  <div className="label-wrapper text-end row">
                    <label className="col-form-label col px-1" htmlFor="IsShipEnabled">
                    Shipping Enabled
                    </label>
                    <div
                    data-toggle="tooltip"
                    className="bi bi-question-circle-fill p-0 mt-2"
                    data-placement="bottom"
                    title="Check if the product can be shipped. You can manage shipping settings by selecting Configuration > Shipping."
                  >
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                 <button className="p-0 m-0 invisible" type="button" onClick={()=>isCheckboxChecked()}>
                     <Field
                    className="check-box visible mt-2"
                    id="IsShipEnabled"
                    name="IsShipEnabled"
                    type="checkbox"
                    onClick={()=>isCheckboxChecked}
                  />
                  </button>
                  
                  <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="IsShipEnabled" />
                </div>
                </div>
              </div>
          </div>

          <div>
            {checkboxToggler?   
            <>
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper text-end row">
                  <label className="col-form-label col px-1" htmlFor="Weight">
                  Weight
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="bi bi-question-circle-fill p-0 mt-2"
                    data-placement="bottom"
                    title="The Product Weight"
                  >
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group ">
                  <Field
                    type="number"
                    id="Weight"
                    name="Weight"
                    aria-disabled="false"
                  />
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="Weight" />
                </div>
              </div>
            </div>
            
            
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper text-end row">
                  <label className="col-form-label col px-1" htmlFor="Length">
                  Length
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="bi bi-question-circle-fill p-0 mt-2"
                    data-placement="bottom"
                    title="The Product Length"
                  >
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group ">
                  <Field
                    type="number"
                    id="Length"
                    name="Length"
                    aria-disabled="false"
                  />
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="Length" />
                </div>
              </div>
            </div>


            
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper text-end row">
                  <label className="col-form-label col px-1" htmlFor="Width">
                  Width
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="bi bi-question-circle-fill p-0 mt-2"
                    data-placement="bottom"
                    title="The Product Width"
                  >
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group ">
                  <Field
                    type="number"
                    id="Width"
                    name="Width"
                    aria-disabled="false"
                  />
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="Width" />
                </div>
              </div>
            </div>

            
            <div className="form-group row advanced-setting">
              <div className="col-md-3">
                <div className="label-wrapper text-end row">
                  <label className="col-form-label col px-1" htmlFor="Height">
                  Height
                  </label>
                  <div
                    data-toggle="tooltip"
                    className="bi bi-question-circle-fill p-0 mt-2"
                    data-placement="bottom"
                    title="The Product Height"
                  >
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group ">
                  <Field
                    type="number"
                    id="Height"
                    name="Height"
                    aria-disabled="false"
                  />
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="Height" />
                </div>
              </div>
            </div>


            </>
        :
            "" }
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingForm;
