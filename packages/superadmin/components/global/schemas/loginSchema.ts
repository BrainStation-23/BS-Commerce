import { string, object } from "yup";

function validatePassword(password: any) {
  const minLength = 8;
  const maxLength = 50;
  const containsUppercase = new RegExp("^(?=.*[A-Z])").test(password);
  const containsLowercase = new RegExp("^(?=.*[a-z])").test(password);
  const containsDigit = new RegExp("^(?=.*[0-9])").test(password);
  const containsSpecialCharacter = new RegExp(
    "[!\"#$%&'()*+,-.\\\\/:;<=>?@[\\]^_`{|}~]"
  ).test(password);

  if (
    password &&
    (password.length < minLength ||
      password.length > maxLength ||
      !containsUppercase ||
      !containsLowercase ||
      !containsDigit ||
      !containsSpecialCharacter)
  ) {
    return false;
  }

  return true;
}

function isEmailLengthValid(email: any) {
  if (!email) return false;
  const parts = email.split("@");
  const local = parts[0];
  return local.length <= 64;
}

export const loginSchema = object().shape({
  username: string()
    .email("This field should be a valid username")
    .max(100, "This field must be at most 100 characters long")
    .required("This field must not be empty")
    .test(
      "is-valid-email-length",
      "The part before @ of the email can be maximum 64 characters ",
      (email) => isEmailLengthValid(email)
    ),
  password: string()
    .required("This field must not be empty")
    .min(6, "Password must be at least 6 character long"),
});
