// Validation schema
import * as Yup from "yup";

export const adminValidationSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});
