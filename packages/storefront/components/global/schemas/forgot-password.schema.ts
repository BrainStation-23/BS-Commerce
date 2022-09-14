import { string, object, ref, number } from 'yup';

function validatePassword(password: string) {
  const minLength = 8;
  const maxLength = 50;
  const containsUppercase = new RegExp('^(?=.*[A-Z])').test(password);
  const containsLowercase = new RegExp('^(?=.*[a-z])').test(password);
  const containsDigit = new RegExp('^(?=.*[0-9])').test(password);
  const containsSpecialCharacter = new RegExp(
    '[!"#$%&\'()*+,-.\\\\/:;<=>?@[\\]^_`{|}~]'
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

function hasValidCharacters(password: string) {
  var validCharacterPattern = new RegExp(
    '^[a-zA-Z0-9!"#$%&\'()*+,-.\\\\/:;<=>?@[\\]^_`{|}~]*$'
  );
  const containsValidCharacter = validCharacterPattern.test(password);
  return containsValidCharacter;
}

export const usernameSchema = object().shape({
  username: string()
    .required('Email/phone number is required')
    .test('test-name', 'Enter a valid phone/email', function (value) {
      const emailRegex =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      const phoneRegex = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
      let isValidEmail = emailRegex.test(value!);
      let isValidPhone = phoneRegex.test(value!);
      if (!isValidEmail && !isValidPhone) {
        return false;
      }
      return true;
    }),
});

export const otpSchema = object().shape({
  otp: string()
    .required('This field must not be empty')
    .test('test-name', 'This field only accepts number', function (value) {
      const numberRegex =
        /^([0-9])+$/;

     
      let isValidNumber = numberRegex.test(value!);
      if (!isValidNumber) {
        return false;
      }
      return true;
    }),
});

export const passwordSchema = object().shape({
  newPassword: string()
    .min(6, 'This field must be at least 6 characters long')
    .max(50, 'This field must be at most 50 characters long')
    .required('This field must not be empty'),
  confirmPassword: string()
    .required('This field must not be empty')
    .oneOf([ref('newPassword'), null], 'Passwords must match'),
});
