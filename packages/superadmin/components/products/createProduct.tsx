import ProductInfoForm from "./forms/productInfoForm";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import PricesForm from "./forms/pricesForm";
import { productSchema } from "./schema/productFormSchema";
import InventoryForm from "./forms/inventoryForm";
import ShippingForm from "./forms/shippingForm";

const CreateProduct = () => {
  return (
    <>
      <Formik
        initialValues={{
          productName: "",
          ShortDescription: "",
          Sku: "",
          SelectedCategoryIds: "--Select--",
          OldPrice: 0,
          Price: 0,
          ProductCost: 0,
          IsTaxExempt: true,
          SelectedDiscountIds: "--Select--",
          TaxCategoryId: "--Select--",
          ManageInventoryMethodId: "Don't track inventory",
          OrderMinimumQuantity: 0,
          OrderMaximumQuantity: 10000,
          AllowedQuantities: "",
          NotReturnable: false,
          IsShipEnabled: false,
          Weight: 0,
          Length: 0,
          Width: 0,
          Height: 0,
          // ProductCost: "",
          // ProductCost: "",
          // ProductCost: "",
          // ProductCost: "",
          // ProductCost: "",
        }}
        onSubmit={(values, actions) => {
          const data = {
            productName: values.productName,
            ShortDescription: values.ShortDescription,
            Sku: values.Sku,
            SelectedCategoryIds: values.SelectedCategoryIds,
            OldPrice: values.OldPrice,
            Price: values.Price,
            IsTaxExempt: values.IsTaxExempt,
            SelectedDiscountIds: values.SelectedDiscountIds,
            TaxCategoryId: values.TaxCategoryId,
            ProductCost: values.ProductCost,
            ManageInventoryMethodId: values.ManageInventoryMethodId,
            OrderMinimumQuantity: values.OrderMinimumQuantity,
            OrderMaximumQuantity: values.OrderMaximumQuantity,
            AllowedQuantities: values.AllowedQuantities,
            NotReturnable: values.NotReturnable,
            Weight: values.Weight,
            Length: values.Length,
            Width: values.Width,
            Height: values.Height,
            // SelectedCategoryIds: values.SelectedCategoryIds,
            // SelectedCategoryIds: values.SelectedCategoryIds,
          };
          console.log(data);
          // handleSearchSubmit(data);
          actions.setSubmitting(false);
        }}
        validationSchema={productSchema}
      >
        {(formikprops) => {
          return (
            <Form onSubmit={formikprops.handleSubmit}>
              <div className="content-header clearfix">
                <h1 className="float-start">
                  Add a new product
                  <span className="fs-3 p-3">
                    <a
                      href="/Product"
                      className="text-decoration-none"
                    >
                    <i className="bi bi-arrow-left-circle-fill p-2"  />
                       back to product list
                    </a>
                  </span>
                </h1>
                <div className="float-end">
                  <button type="submit" name="save" className="btn btn-primary">
                    <i className="far fa-save" />
                    Save
                  </button>
                  <button
                    type="submit"
                    name="save-continue"
                    className="btn btn-primary m-1"
                  >
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
                        <input
                          type="checkbox"
                          name="onoffswitch"
                          className="onoffswitch-checkbox"
                          id="advanced-settings-mode"
                          defaultChecked={true}
                        />
                        <label
                          className="onoffswitch-label"
                          htmlFor="advanced-settings-mode"
                        >
                          <span
                            className="onoffswitch-inner"
                            data-locale-basic="Basic"
                            data-locale-advanced="Advanced"
                          />
                          <span className="onoffswitch-switch" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-info float-left mx-2"
                  id="product-editor-settings"
                  data-toggle="modal"
                  data-target="#productsettings-window"
                >
                  <i className="bi bi-gear-fill" />
                  Settings
                </button>
              </div>

              <div className="mt-4">
                <ProductInfoForm />
                <PricesForm />
                <ShippingForm />
                <InventoryForm />
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default CreateProduct;
