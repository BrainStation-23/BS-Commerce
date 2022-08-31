import axios from "axios";
import {
  addToCartRequest,
  AddToCartResponse,
  addToCartSuccessResponse,
  Cart,
  deleteCartItemRequest,
  deleteCartItemResponse,
  GetCustomerAllProductsResponse,
  updateCartItemRequest,
  updateCartItemResponse,
} from "models";
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
var cookie = require("cookie");

function getToken() {
  console.log("Token ====>");
  console.log(localStorage.getItem("persist:root"));
  console.log("Hey In GetToken ====>");
}

export async function getUserRest(): Promise<User[] | undefined> {
  try {
    getToken();
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
    const res = await axios.post("http://localhost:3000/api/auth/forgot", data);
    return res.data;
  } catch (error: any) {
    return error;
  }
}

export async function getPublicProductsRest(
  token: any
): Promise<GetCustomerAllProductsResponse | undefined> {
  try {
    console.log("***********************", token);
    const res = await axios.get(`${apiEndPoints.getPublicProducts}`);
    return res.data.data;
  } catch (error: any) {
    return error;
  }
}

export async function getFeaturedProductsRest(
  token: any
): Promise<GetCustomerAllProductsResponse | undefined> {
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

export async function getCartRest(token: string): Promise<Cart[] | undefined> {
  try {
    console.log("token ======>", token);
    const { data } = await axios?.get(`${apiEndPoints?.getCart}`, {
      headers: {
          Authorization: `Bearer ${token}`,
      }
  });
    return data?.data as Cart[];
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}

export async function addToCartRest(
  cartData: addToCartRequest
): Promise<AddToCartResponse | undefined> {
  try {

    const res = await axios?.post<AddToCartResponse>(
      `${apiEndPoints?.getCart}`,
      cartData
    );

    return res.data as addToCartSuccessResponse;
  } catch (error: any) {
    console.log("cart data from ==================", error);
    toast.error(error?.response?.data?.message);
  }
}

export async function deleteFromCartRest(
  data: deleteCartItemRequest
): Promise<deleteCartItemResponse | undefined> {
  try {
    const res = await axios?.delete(
      `${apiEndPoints?.deleteCartItem}?productId=${data.productId}`);
    return res?.data as deleteCartItemResponse;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}

export async function deleteAllFromCartRest(): Promise<
  deleteCartItemResponse | undefined
> {
  try {
    const { data } = await axios?.delete(`${apiEndPoints?.deleteAllCartItem}`);
    return data?.data as deleteCartItemResponse;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}

export async function updateCartRest(
  item: updateCartItemRequest
): Promise<updateCartItemResponse | undefined> {
  try {
    const { data } = await axios?.patch(
      `${apiEndPoints?.updateCartItem}`,
      item
    );
    return data?.data as updateCartItemResponse;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}
