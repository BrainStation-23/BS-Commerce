import { string, object, number } from "yup";
import XRegExp from "xregexp";
import * as Yup from "yup";

export const manufactureSchema = object().shape({
  name: string()
    .min(2, "This field must be at least 2 characters long")
    .max(50, "This field must be at most 50 characters long")
    .required("This field must not be empty"),
  description: string()
    .min(2, "This field must be at least 2 characters long")
    .max(50, "This field must be at most 50 characters long")
    .required("This field must not be empty"),
  picture: string().required("This field must not be empty"),
  isPublished: Yup.boolean().required("This field must not be empty"),
  displayOrder: number().required("This field must not be empty"),
  metaKeyword: string().required("This field must not be empty"),
  metaDescription: string()
    .min(2, "This field must be at least 2 characters long")
    .max(50, "This field must be at most 50 characters long")
    .required("This field must not be empty"),
  metaTitle: string().required("This field must not be empty"),
  seftn: string().required("This field must not be empty"),
});
