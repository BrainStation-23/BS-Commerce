import { useMutation } from '@tanstack/react-query';
import {
  resetPassword,
  sendForgotPasswordEmail,
  setNewPassword,
} from 'src/query/api/services/auth/forgot-password';
import {
  ForgotPasswordPayload,
  NewPasswordPayload,
  ResetPasswordPayload,
} from 'src/types/forgot-password';

/**
 * Hook to send forgot password email
 *
 * @returns Mutation result for sending forgot password email
 */
export const useSendForgotPasswordEmail = () =>
  useMutation({
    mutationFn: (data: ForgotPasswordPayload) => sendForgotPasswordEmail(data),
  });

/**
 * Hook to reset password with token
 *
 * @returns Mutation result for resetting password
 */
export const useResetPassword = () =>
  useMutation({
    mutationFn: (data: ResetPasswordPayload) => resetPassword(data),
  });

/**
 * Hook to set new password with token
 *
 * @returns Mutation result for setting new password
 */
export const useSetNewPassword = () =>
  useMutation({
    mutationFn: (data: NewPasswordPayload) => setNewPassword(data),
  });
