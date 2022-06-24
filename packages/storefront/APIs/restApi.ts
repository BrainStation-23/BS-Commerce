import axios from "axios";
import { addToCartRequest, AddToCartResponse, Cart, GetCustomerAllProductsResponse } from "models";
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
                Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJmNmQyYTkwLWM5ZjAtNDA4YS04MjliLWEyYWM3NWNiYWRmZSIsImVtYWlsIjoic2Jzd2FybmFAZ21haWwuY29tIiwicGhvbmUiOiIwMTcyNjk0Mzk0OCIsImxvZ0luVGltZSI6MTY1NjA0NzIzMjAwOSwiaWF0IjoxNjU2MDQ3MjMyLCJleHAiOjE2NTY5MTEyMzJ9.7Ab_5MtqbLXHkt6V2NAogNKMX0tk2i2lBbUYMcfmklQ"}`,
            },
        });
        return data?.data as Cart[];
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
}

export async function addToCartRest(
    cartData: addToCartRequest
): Promise<AddToCartResponse[] | undefined> {
    try {
        const { data } = await axios?.post(
            `${apiEndPoints?.getCart}`, cartData,
            {
                headers: {
                    Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJmNmQyYTkwLWM5ZjAtNDA4YS04MjliLWEyYWM3NWNiYWRmZSIsImVtYWlsIjoic2Jzd2FybmFAZ21haWwuY29tIiwicGhvbmUiOiIwMTcyNjk0Mzk0OCIsImxvZ0luVGltZSI6MTY1NjA0NzIzMjAwOSwiaWF0IjoxNjU2MDQ3MjMyLCJleHAiOjE2NTY5MTEyMzJ9.7Ab_5MtqbLXHkt6V2NAogNKMX0tk2i2lBbUYMcfmklQ"}`,
                },
            }
        );
        console.log("**************125*******************", data);
        return data?.data as AddToCartResponse[];
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
}
