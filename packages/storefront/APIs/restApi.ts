import axios from "axios";
import { addToCartRequest, Cart, GetCustomerAllProductsResponse } from "models";
import { GetCustomerProductResponse } from "models";
import { CustomerSignInRequest } from "models";
import { CreateCustomerResponse } from "models";
import { CreateCustomerRequest } from "models";
import { CustomerSignInResponse } from "models";
import { GetCustomerProductParams } from "models";
import {
    CreateUserRequest,
    CreateUserResponse,
    ForgotPasswordRequest,
    ForgotPasswordResponse,
    SignInRequest,
    SignInResponse,
} from "models";
import { apiEndPoints } from "utils/apiEndPoints";
import { User } from "utils/types";
import { toast } from "react-toastify";

export async function getUserRest(): Promise<User[] | undefined> {
    try {
        const response = await axios.get<User[]>(`${apiEndPoints.getUser}`);
        return response.data as User[];
    } catch (error: any) {
        return error;
    }
}

export async function signinRest(
    data: CustomerSignInRequest
): Promise<CustomerSignInResponse | undefined> {
    try {
        const res = await axios.post(`${apiEndPoints.login}`, data);
        return res.data;
    } catch (error: any) {
        return error;
    }
}

export async function signUpRest(
    data: CreateCustomerRequest
): Promise<CreateCustomerResponse | undefined> {
    try {
        const res = await axios.post(`${apiEndPoints.register}`, data);
        return res.data;
    } catch (error: any) {
        return error;
    }
}

export async function forgotPasswordRest(
    data: ForgotPasswordRequest
): Promise<ForgotPasswordResponse | undefined> {
    try {
        const res = await axios.post(
            "http://localhost:3000/api/auth/forgot",
            data
        );
        return res.data;
    } catch (error: any) {
        return error;
    }
}

export async function getPublicProductsRest(): Promise<
    GetCustomerAllProductsResponse | undefined
> {
    try {
        const res = await axios.get(`${apiEndPoints.getPublicProducts}`);
        return res.data.data;
    } catch (error: any) {
        return error;
    }
}

export async function getFeaturedProductsRest(): Promise<
    GetCustomerAllProductsResponse | undefined
> {
    try {
        const res = await axios.get(
            `${apiEndPoints.getPublicProducts}?isFeatured=true`
        );
        return res.data.data;
    } catch (error: any) {
        return error;
    }
}

export async function getPublicProductByIdRest(
    productId: GetCustomerProductParams
): Promise<GetCustomerProductResponse | undefined> {
    try {
        const res = await axios.get(
            `${apiEndPoints.getPublicProducts}/${productId}`
        );
        return res.data.data;
    } catch (error: any) {
        return error;
    }
}

export async function getCartRest(): Promise<Cart[] | undefined> {
    try {
        const { data } = await axios?.get(`${apiEndPoints?.getCart}`, {
            headers: {
                Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIyMGQ5NGMzLWUwOGQtNDlkZS04ZDE4LTAwYmZiNzMwYTFiOCIsInVzZXJuYW1lIjoiYWFiYkBnbWFpbC5jb20iLCJsb2dJblRpbWUiOjE2NTU5NjUwNzM1MzQsImlhdCI6MTY1NTk2NTA3MywiZXhwIjoxNjU2MDUxNDczfQ.qU6tm04pOVLVAfJFbrpDwf9AlLh_WYDc0wXwg7t6cgQ"}`,
            },
        });
        return data?.data as Cart[];
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
}

export async function addToCartRest(
    cartData: addToCartRequest
): Promise<addToCartRequest[] | undefined> {
    try {
        const { data } = await axios?.post(
            `${apiEndPoints?.getCart}`, cartData,
            {
                headers: {
                    Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM5ODZhNThiLWQ2ZjctNGE2Zi04YzczLTQ2YTI4ZDM2OTNhYiIsInVzZXJuYW1lIjoiYmJiYkBnbWFpbC5jb20iLCJsb2dJblRpbWUiOjE2NTU5NzUzNjgxMzEsImlhdCI6MTY1NTk3NTM2OCwiZXhwIjoxNjU2MDYxNzY4fQ.80yx8OG8hJd6VrJmMeEtFlw2CtnY6mHOuCUadAClXPM"}`,
                },
            }
        );
        console.log("**************125*******************", data);
        return data?.data as addToCartRequest[];
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
}
