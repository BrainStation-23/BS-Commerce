import axios from "axios"
import { CreateUserRequest, CreateUserResponse, ForgotPasswordRequest, ForgotPasswordResponse, SignInRequest, SignInResponse } from "models";
import { apiEndPoints } from "utils/apiEndPoints";
import { User } from "utils/types";

export async function getUserRest():Promise<User[] | undefined> {
    try {
      const response = await axios.get<User[]>(`${apiEndPoints.getUser}`);
      return response.data as User[];
    } catch (error) {
      console.error(error);
    }
  }

export async function signinRest(data: SignInRequest): Promise<SignInResponse | undefined> {
    try {
      const res = await axios.post('http://localhost:3000/api/auth/signin', data);
      return res.data;
    } catch(error: any) {
      return error.response.data;
    }
}

export async function signUpRest(data: CreateUserRequest): Promise<CreateUserResponse | undefined> {
  try {
    const res = await axios.post('http://localhost:3000/api/auth/signup', data);
    return res.data;
  } catch(error: any) {
    return error.response.data;
  }
}

export async function forgotPasswordRest(data: ForgotPasswordRequest): Promise<ForgotPasswordResponse | undefined> {
  try {
    const res = await axios.post('http://localhost:3000/api/auth/forgot', data);
    return res.data;
  } catch(error: any) {
    return error.response.data;
  }
}