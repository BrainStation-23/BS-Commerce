import * as Yup from 'yup';

// Schema for new password form validation
export const NewPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must have at least 8 characters')
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*\d).{8,}$/,
      'Password must contain at least one lowercase letter and one numeric digit.'
    ),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});

// Type for new password form values
export type NewPasswordFormValues = {
  password: string;
  confirmPassword: string;
};

// Default values for new password form
export const getNewPasswordDefaultValues = (): NewPasswordFormValues => ({
  password: '',
  confirmPassword: '',
});
