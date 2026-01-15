import { string, object, number } from "yup";
import XRegExp from "xregexp";
import * as Yup from "yup";

export const productSchema = object().shape({
  productName: string()
    .min(2, "This field must be at least 2 characters long")
    .max(50, "This field must be at most 50 characters long")
    .required("This field must not be empty"),
  ShortDescription: string()
    .min(2, "This field must be at least 2 characters long")
    .max(50, "This field must be at most 50 characters long")
    .required("This field must not be empty"),
  FullDescription: string(),
  Sku: string()
    .required("This field must not be empty")
    .min(1, "This field must be at least 1 characters long")
    .max(400, "This field must be at most 400 characters long"),

  OldPrice: number().required("This field must not be empty"),
  Price: number().required("This field must not be empty"),
  ProductCost: number().required("This field must not be empty"),

  showOnHomePage: Yup.boolean(),
  includeInTopMenu: Yup.boolean(),
  allowToSelectPageSize: Yup.boolean(),
  published: Yup.boolean(),
  displayOrder: number(),
  isFeatured: Yup.boolean(),
  publishDate: string(),

  // tags: string(),
  // brands: string(),

  // keywords: string(),
  metaTitle: string(),
  metaDescription: string(),
  metaFriendlyPageName: string(),

  photosUrl: string(),
  photosID: string(),
  photosTitle: string(),
  displayOrderPhotos: string(),

  SelectedCategoryIds: string()
    .typeError("You must Select a Category")
    .required("This field must not be empty"),
  isFeaturedCategory: Yup.boolean(),
  displayOrderCategory: number(),
});
