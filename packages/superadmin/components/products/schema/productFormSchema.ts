import { string, object, ref, number } from "yup";
import XRegExp from "xregexp";
import * as Yup from "yup";

export const productSchema = object().shape({
          productName:  string()
          .matches(
            XRegExp("^[\\pL.]+(?:\\s[\\pL]+)*$"),
            "This field should contain letters only"
          )
          .min(2, "This field must be at least 2 characters long")
          .max(50, "This field must be at most 50 characters long")
          .required("This field must not be empty"),
          ShortDescription:  string()
          .min(2, "This field must be at least 2 characters long")
          .max(50, "This field must be at most 50 characters long")
          .required("This field must not be empty"),
          Sku: string()
          .required("This field must not be empty")
          .min(1, "This field must be at least 1 characters long")
          .max(400, "This field must be at most 400 characters long"),
          SelectedCategoryIds: number()
          .typeError('You must Select a Category')
          .required("This field must not be empty"),
          OldPrice: number()
          .required("This field must not be empty"),
          Price: number()
          .required("This field must not be empty"),
          ProductCost: number()
          .required("This field must not be empty"),
          IsTaxExempt: Yup.boolean(),
          SelectedDiscountIds:  number()
          .typeError('You must Select a Category')
          .required("This field must not be empty"),
          TaxCategoryId: number()
          .typeError('You must Select a Category')
          .required("This field must not be empty"),
          ManageInventoryMethodId: number()
          .typeError('You must Select a Category')
          .required("This field must not be empty"),
          OrderMinimumQuantity: number()
          .required("This field must not be empty"),
          OrderMaximumQuantity: number()
          .required("This field must not be empty"),
          AllowedQuantities: string()
          .max(1000, "This field must be at most 1000 characters long"),
          NotReturnable: Yup.boolean(),
          IsShipEnabled: Yup.boolean(),


});


export const searchProductSchema = object().shape({
  SearchProductName: string()
          .max(50, "This field must be at most 50 characters long"),
          SearchCategoryId: number()
          .typeError('You must Select a Category'),
          SearchIncludeSubCategories: Yup.boolean(),
          SearchManufacturerId: number()
          .typeError('You must Select a Category'),
          SearchVendorId: number()
          .typeError('You must Select a Category'),
          SearchWarehouseId: number()
          .typeError('You must Select a Category'),
          SearchProductTypeId: number()
          .typeError('You must Select a Category'),
          SearchPublishedId: number()
          .typeError('You must Select a Category'),
          goToProductBySku: string()
          .max(50, "This field must be at most 50 characters long"),


});