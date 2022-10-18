import { string, object } from 'yup';

function hasValidCharacters(password: string) {
  var validCharacterPattern = new RegExp(
    '^[a-zA-Z0-9!"#$%&\'()*+,-.\\\\/:;<=>?@[\\]^_`{|}~]*$'
  );
  const containsValidCharacter = validCharacterPattern.test(password);
  return containsValidCharacter;
}

export const registerSchema = object().shape({
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
  otp: string()
    .matches(/^[0-9\+]*$/, 'This field only contains digits')
    .required('This field must not be empty'),
  name: string()
    .max(100, 'This field must be at most 100 characters long')
    .required('This field must not be empty'),
  password: string()
    .min(3, 'This field must be at least 3 characters long')
    .max(50, 'This field must be at most 50 characters long')
    .required('This field must not be empty')
    .test(
      'is-valid-characters',
      'Password has one or more invalid character. Click info icon for hints',
      (password) => hasValidCharacters(password!)
    ),
});


