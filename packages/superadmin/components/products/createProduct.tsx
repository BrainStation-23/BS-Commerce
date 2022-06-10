import ProductInfoForm from "./forms/productInfoForm";

const CreateProduct = () => {
  return (
    <>
      <div className="content-header clearfix">
        <h1 className="float-start">
          Add a new product
          <span className="fs-3 p-3">
            <i className="bi bi-arrow-left-circle-fill" />
            <a href="/Admin/Product/List" className="text-decoration-none">back to product list</a>
          </span>
        </h1>
        <div className="float-end">
          <button type="submit" name="save" className="btn btn-primary">
            <i className="far fa-save" />
            Save
          </button>
          <button type="submit" name="save-continue" className="btn btn-primary m-1">
            <i className="far fa-save" />
            Save and Continue Edit
          </button>
        </div>
      </div>

      <div className="col-md-12 clearfix">
        <div className="float-start">
          <div className="form-group row">
            <div className="col-md-12">
              <div className="onoffswitch">
                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="advanced-settings-mode" defaultChecked={true} />
                <label className="onoffswitch-label" htmlFor="advanced-settings-mode">
                  <span className="onoffswitch-inner" data-locale-basic="Basic" data-locale-advanced="Advanced" />
                  <span className="onoffswitch-switch" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-info float-left mx-2" id="product-editor-settings" data-toggle="modal" data-target="#productsettings-window">
          <i className="bi bi-gear-fill" />
          Settings
        </button>
      </div>


    <div className="mt-4">
      <ProductInfoForm />

    </div>

    </>
  );
};

export default CreateProduct;