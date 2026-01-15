import * as Yup from 'yup';

// Schema for change password form validation
export const ChangePasswordSchema = Yup.object().shape({
  old_password: Yup.string().required('Current password is required'),
  new_password: Yup.string()
    .min(8, 'Password must have at least 8 characters')
    .required('New password is required')
    .matches(
      /^(?=.*[a-z])(?=.*\d).{8,}$/,
      'Password must contain at least one lowercase letter and one numeric digit.'
    ),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('new_password')], 'Passwords must match'),
});

// Type for change password form values
export type ChangePasswordFormValues = {
  old_password: string;
  new_password: string;
  confirmPassword: string;
};

// Default values for change password form
export const getChangePasswordDefaultValues = (): ChangePasswordFormValues => ({
  old_password: '',
  new_password: '',
  confirmPassword: '',
});
