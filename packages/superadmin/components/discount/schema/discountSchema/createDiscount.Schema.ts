import { string, object, number } from "yup";
import XRegExp from "xregexp";
import * as Yup from "yup";

export const discountSchema = object().shape({
  discountName:  string()
  .matches(
    XRegExp("^[\\pL.]+(?:\\s[\\pL]+)*$"),
    "This field should contain letters only"
  )
  .min(2, "This field must be at least 2 characters long")
  .max(50, "This field must be at most 50 characters long")
  .required("This field must not be empty"),
  type:  string()
  .min(2, "This field must be at least 2 characters long")
  .max(50, "This field must be at most 50 characters long"),
  usePercentage: Yup.boolean(),
  discountAmount: number(),
  startDate: Yup.date(),
  endDate: Yup.date(),
  requireCuponCode: Yup.boolean(),
  cuponCode: string()
  .min(2, "This field must be at least 2 characters long")
  .max(50, "This field must be at most 50 characters long"),
  discountLimit: string()
  .min(2, "This field must be at least 2 characters long")
  .max(50, "This field must be at most 50 characters long"),
  nTimes: number(),
  adminComment: string(),

});