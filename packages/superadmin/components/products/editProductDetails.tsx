import { Formik, Form } from "formik";
import { productSchema } from "./schema/productSchema";

import ProductInfoForm from "./forms/productInfoForm";
import PricesForm from "./forms/metaForm";
import InventoryForm from "./forms/categoryForm";
import ShippingForm from "./forms/photosForm";

interface productInterface {
  productName: string;
  ShortDescription: string;
  Sku: string;
  SelectedCategoryIds: number;
  OldPrice: number;
  Price: number;
  ProductCost: number;
  IsTaxExempt: true;
  SelectedDiscountIds: number;
  TaxCategoryId: number;
  ManageInventoryMethodId: string;
  OrderMinimumQuantity: number;
  OrderMaximumQuantity: number;
  AllowedQuantities: string;
  NotReturnable: boolean;
  IsShipEnabled: boolean;
  Weight: number;
  Length: number;
  Width: number;
  Height: number;
}

const EditProduct = (props : productInterface) => {
    const {product} = props;
  return (
    <>
      <Formik
        initialValues={{
          productName: product.productName,
          ShortDescription: product.ShortDescription,
          Sku: product.Sku,
          SelectedCategoryIds: product.SelectedCategoryIds,
          OldPrice: product.OldPrice,
          Price: product.Price,
          ProductCost: product.ProductCost,
          IsTaxExempt: product.IsTaxExempt,
          SelectedDiscountIds: product.SelectedDiscountIds,
          TaxCategoryId: product.TaxCategoryId,
          ManageInventoryMethodId: product.ManageInventoryMethodId,
          OrderMinimumQuantity: product.OrderMinimumQuantity,
          OrderMaximumQuantity: product.OrderMaximumQuantity,
          AllowedQuantities: product.AllowedQuantities,
          NotReturnable: product.NotReturnable,
          IsShipEnabled: product.IsShipEnabled,
          Weight: product.Weight,
          Length: product.Length,
          Width: product.Width,
          Height: product.Height,
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
          actions.setSubmitting(false);
        }}
        validationSchema={productSchema}
      >
        {(formikprops) => {
          return (
            <Form onSubmit={formikprops.handleSubmit}>
              <div className="content-header clearfix">
                <h1 className="float-start">
                  Edit product details 
                  <span className="fs-5 p-3">
                    <a href="/Product" className="text-decoration-none ">
                      <i className="bi bi-arrow-left-circle-fill p-2" />
                      Back to product list
                    </a>
                  </span>
                </h1>
                <div className="float-end">
                  <button type="submit" name="save" className="btn btn-primary m-1">
                    <i className="bi bi-save" />
                    <p className="float-end mx-1 my-0">Save </p>  

                  </button>
                  <button
                    type="submit"
                    name="save-continue"
                    className="btn btn-primary m-1"
                  >
                    <i className="bi bi-save" />
                    <p className="float-end mx-1 my-0">Save and Continue Edit</p>  
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

export default EditProduct;
