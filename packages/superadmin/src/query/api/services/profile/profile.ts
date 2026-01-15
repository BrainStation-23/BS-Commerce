import axios from 'src/query/api/axios';
import { endpoints } from 'src/query/api/endpoints';
import { ChangePasswordPayload, ChangePasswordResponse } from 'src/types/profile';

export const changePassword = async (
  passwordData: ChangePasswordPayload
): Promise<ChangePasswordResponse> => {
  try {
    const response = await axios({
      method: 'POST',
      url: endpoints.profile.changePassword,
      data: passwordData,
    });

    return response.data;
  } catch (error: any) {
    console.error('Error in changePassword:', error);
    throw error;
  }
};
