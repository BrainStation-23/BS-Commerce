export interface ForgotPasswordFormData {
  email: string;
}

export interface ForgotPasswordState {
  errorMsg: string;
  successMsg: string;
  showForm: boolean;
  isLoading: boolean;
}

export interface ForgotPasswordApiResponse {
  message: string;
  success: boolean;
}

export interface ForgotPasswordApiError {
  message: string;
  code?: string;
}

// API Types for forgot password functionality
export interface ForgotPasswordPayload {
  email: string;
}

export interface ForgotPasswordResponse {
  message: string;
  success: boolean;
}

export interface ResetPasswordPayload {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface ResetPasswordResponse {
  message: string;
  success: boolean;
}

export interface NewPasswordPayload {
  password: string;
  token: string;
}

export interface NewPasswordResponse {
  message: string;
  success: boolean;
}
