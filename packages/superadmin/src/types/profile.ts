// Change Password Types
export interface ChangePasswordPayload {
  old_password: string;
  new_password: string;
}

export interface ChangePasswordResponse {
  message: string;
  data: {
    success: boolean;
  };
}
