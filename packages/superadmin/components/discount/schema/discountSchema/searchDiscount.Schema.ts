import { string, object, number } from "yup"; 
import * as Yup from "yup";

export const searchDiscountSchema = object().shape({
  SearchDiscountStartDate: Yup.date()
  .typeError('You must Select a Date'),
  SearchDiscountEndtDate: Yup.date()
  .typeError('You must Select a Date'),
  SearchDiscountName: string()
  .max(50, "This field must be at most 50 characters long"),
  SearchDiscountType: string()
  .typeError('This field must be at most 50 characters long'),
  goToDiscountByCode: string()
  .max(50, "This field must be at most 50 characters long"),
  


});