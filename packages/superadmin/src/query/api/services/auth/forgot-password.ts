import axios from 'src/query/api/axios';
import { endpoints } from 'src/query/api/endpoints';
import {
  ForgotPasswordPayload,
  ForgotPasswordResponse,
  NewPasswordPayload,
  NewPasswordResponse,
  ResetPasswordPayload,
  ResetPasswordResponse,
} from 'src/types/forgot-password';

export const sendForgotPasswordEmail = async (
  userData: ForgotPasswordPayload
): Promise<ForgotPasswordResponse> => {
  try {
    const response = await axios({
      method: 'POST',
      url: endpoints.auth.sendEmail,
      data: userData,
    });

    return response.data;
  } catch (error: any) {
    console.error('Error in sendForgotPasswordEmail:', error);
    throw error;
  }
};

export const resetPassword = async (
  resetData: ResetPasswordPayload
): Promise<ResetPasswordResponse> => {
  try {
    const response = await axios({
      method: 'POST',
      url: endpoints.auth.resetPassword,
      data: resetData,
    });

    return response.data;
  } catch (error: any) {
    console.error('Error in resetPassword:', error);
    throw error;
  }
};

export const setNewPassword = async (
  newPasswordData: NewPasswordPayload
): Promise<NewPasswordResponse> => {
  try {
    const response = await axios({
      method: 'POST',
      url: endpoints.auth.resetPassword,
      data: newPasswordData,
    });

    return response.data;
  } catch (error: any) {
    console.error('Error in setNewPassword:', error);
    throw error;
  }
};
