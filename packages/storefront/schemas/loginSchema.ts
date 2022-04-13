import { string, object, ref, number } from "yup";
import XRegExp from "xregexp";
import * as Yup from "yup";

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

function hasValidCharacters(password: any) {
  var validCharacterPattern = new RegExp(
    "^[a-zA-Z0-9!\"#$%&'()*+,-.\\\\/:;<=>?@[\\]^_`{|}~]*$"
  );
  const containsValidCharacter = validCharacterPattern.test(password);
  return containsValidCharacter;
}

function isEmailLengthValid(email: any) {
  if (!email) return false;
  const parts = email.split("@");
  const local = parts[0];
  return local.length <= 64;
}

export const loginSchema = object().shape({
  phone: string().matches(/^[0-9\+]*$/, "This field only contains digits"),
  password: string().required("This field must not be empty"),
});

const userSchema = {
  firstname: string()
    .matches(
      XRegExp("^[\\pL.]+(?:\\s[\\pL]+)*$"),
      "This field should contain letters only"
    )
    .min(2, "This field must be at least 2 characters long")
    .max(50, "This field must be at most 50 characters long")
    .required("This field must not be empty"),
  lastname: string()
    .matches(
      XRegExp("^[\\pL.]+(?:\\s[\\pL]+)*$"),
      "This field should contain letters only"
    )
    .min(2, "This field must be at least 2 characters long")
    .max(50, "This field must be at most 50 characters long")
    .required("This field must not be empty"),
  email: string()
    .email("This field should be a valid email address")
    .max(100, "This field must be at most 100 characters long")
    .required("This field must not be empty")
    .test(
      "is-valid-email-length",
      "The part before @ of the email can be maximum 64 characters ",
      (email) => isEmailLengthValid(email)
    ),
};

export const registerSchema = object().shape({
  firstname: userSchema.firstname,
  lastname: userSchema.lastname,
  phone: string().matches(/^[0-9\+]*$/, "This field only contains digits"),
  password: string()
    .min(3, "This field must be at least 8 characters long")
    .max(50, "This field must be at most 50 characters long")
    .required("This field must not be empty")
    .test(
      "is-valid-password",
      "Password must contain at least an uppercase, a lowercase, a digit and a special character i.e. !”#$%&’()*+,-./:;<=>?@[]^_{|}~",
      (password) => validatePassword(password)
    )
    .test(
      "is-valid-characters",
      "Password has one or more invalid character. Click info icon for hints",
      (password) => hasValidCharacters(password)
    ),
  confirm_password: string()
    .required("This field must not be empty")
    .oneOf([ref("password"), null], "Passwords must match"),
});

export const changePasswordSchema = object().shape({
  currentPassword: string()
    .min(8, "This field must be at least 8 characters long")
    .max(50, "This field must be at most 50 characters long")
    .required("This field must not be empty"),
  newPassword: string()
    .min(8, "This field must be at least 8 characters long")
    .max(50, "This field must be at most 50 characters long")
    .required("This field must not be empty")
    .test(
      "is-valid-password",
      "Password must contain at least an uppercase, a lowercase, a digit and a special character i.e. !”#$%&’()*+,-./:;<=>?@[]^_{|}~",
      (password) => validatePassword(password)
    )
    .test(
      "is-valid-characters",
      "Password has one or more invalid character",
      (password) => hasValidCharacters(password)
    ),
  confirmPassword: string()
    .required("This field must not be empty")
    .oneOf([ref("newPassword"), null], "Passwords must match"),
});

export const resetPasswordSchema = object().shape({
  newPassword: string()
    .min(8, "This field must be at least 8 characters long")
    .max(50, "This field must be at most 50 characters long")
    .required("This field must not be empty")
    .test(
      "is-valid-password",
      "Password must contain at least an uppercase, a lowercase, a digit and a special character i.e. !”#$%&’()*+,-./:;<=>?@[]^_{|}~",
      (password) => validatePassword(password)
    )
    .test(
      "is-valid-characters",
      "Password has one or more invalid character. Click info icon for hints",
      (password) => hasValidCharacters(password)
    ),
  confirmPassword: string()
    .required("This field must not be empty")
    .oneOf([ref("newPassword"), null], "Passwords must match"),
});
