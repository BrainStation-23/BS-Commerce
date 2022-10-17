import { string, object } from 'yup';

export const loginSchema = object().shape({
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
  password: string().required('This field must not be empty'),
});
