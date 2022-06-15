import { Formik, Form } from "formik";
import { productSchema } from "./schema/productSchema";

import PricesForm from "./forms/pricesForm";
import ShippingForm from "./forms/shippingForm";
import InventoryForm from "./forms/inventoryForm";
import ProductInfoForm from "./forms/productInfoForm";

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
                  <span className="fs-5 p-3">
                    <a href="/Product" className="text-decoration-none">
                      <i className="bi bi-arrow-left-circle-fill p-2" />
                      back to product list
                    </a>
                  </span>
                </h1>
                <div className="float-end">
                  <button
                    type="submit"
                    name="save"
                    className="btn btn-primary m-1"
                  >
                    <i className="bi bi-save" />
                    <p className="float-end mx-1 my-0">Save</p>
                  </button>
                  <button
                    type="submit"
                    name="save-continue"
                    className="btn btn-primary m-1"
                  >
                    <i className="bi bi-save" />
                    <p className="float-end mx-1 my-0">
                      Save and Continue Edit
                    </p>
                  </button>
                </div>
              </div>

              <div className="col-md-12 clearfix">
                <button
                  type="button"
                  className="btn btn-info float-left mx-2 my-auto "
                  id="product-editor-settings"
                  data-toggle="modal"
                  data-target="#productsettings-window"
                >
                  <i className="bi bi-gear-fill pt-1" />
                  <p className="float-end mx-1 my-0">Settings</p>
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
