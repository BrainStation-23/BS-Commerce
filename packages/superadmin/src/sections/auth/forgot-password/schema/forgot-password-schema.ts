import * as Yup from 'yup';

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email must be a valid email address'),
});

// Default values function
export const getForgotPasswordDefaultValues = () => ({
  email: '',
});

// Form field types
export type ForgotPasswordFormValues = ReturnType<typeof getForgotPasswordDefaultValues>;
