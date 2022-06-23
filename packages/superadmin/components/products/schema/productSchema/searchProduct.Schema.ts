import { string, object, number } from "yup"; 
import * as Yup from "yup";

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