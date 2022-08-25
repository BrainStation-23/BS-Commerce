import axios from 'axios';
import { toast } from 'react-toastify';
import {
  GetCustomerAllProductsResponse,
  GetCustomerQuery,
  GetCustomerResponse,
  GetCustomerAllProductsSuccessResponse,
  updateCartItemRequest,
  updateCartItemResponse,
  GetCustomerProductResponse,
  CustomerSignInRequest,
  CreateCustomerResponse,
  CreateCustomerRequest,
  CustomerSignInResponse,
  GetCustomerProductParams,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  getCategoryListSuccessResponse,
  GetProductsByConditionQuery,
  GetProductsByConditionSuccessResponse,
  addToWishlistRequest,
  AddToWishlistResponse,
  getUserWishlistResponse,
  DeleteWishlistItemParams,
  deleteWishlistItemResponse,
  deleteAllWishlistItemsResponse,
  CompareResponse,
  GetCustomerErrorResponse,
  CustomerAddress,
  AddCustomerNewAddressResponse,
  GetCustomerInformationResponse,
  GetCustomerInformationSuccessResponse,
  DeleteCustomerAddressResponse,
  DeleteCustomerAddressSuccessResponse,
  UpdateCustomerAddressSuccessResponse,
  UpdateCustomerAddressResponse,
  UpdateCustomerSuccessResponse,
  UpdateCustomerRequestBody,
  Wishlist,
  Customer,
  getCartResponse,
  getCartSuccessResponse,
  addToCartRequest,
  addToCartSuccessResponse,
  AddToCartResponse,
  deleteCartItemSuccessResponse,
  deleteAllCartItemsSuccessResponse,
  updateCartItemSuccessResponse,
  SendOtpSuccessResponse,
  VerifyOtpSuccessResponse,
  VerifyOtpRequest,
  CustomerForgotPasswordRequest,
  CustomerForgotPasswordSuccessResponse,
  OrderByUserIdResponse,
  CreateOrderRequest,
  SendOtpErrorResponse,
} from 'models';

import { apiEndPoints } from 'utils/apiEndPoints';
// import { User } from 'utils/types';
import { NextRouter } from 'next/router';
import { OrderResponseData } from 'models';
import { SendOtpResponse } from 'models';

// export async function getUserRest(): Promise<User[] | undefined> {
//   try {
//     const response = await axios.get<User[]>(`${apiEndPoints.getUser}`);
//     return response.data as User[];
//   } catch (error: any) {
//     return error;
//   }
// }

export async function getSignedInUserRest(
  isEmail: boolean,
  data: GetCustomerQuery
): Promise<GetCustomerErrorResponse | undefined> {
  try {
    const res = await axios.get(
      `${apiEndPoints.getSignedInUser}${
        isEmail ? `?email=${data.email}` : `?phone=${data.phone}`
      }`
    );
    return res.data;
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
    toast.error('Some error happend. Try again.', {
      containerId: 'bottom-right',
    });
    return error;
  }
}

export async function sendOTPRest(
  data: string
): Promise<SendOtpResponse | undefined> {
  let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  const isEmail = regex.test(data);
  const reqData = isEmail ? { email: data } : { phone: data };
  try {
    const res = await axios.post(`${apiEndPoints.sendOTP}`, reqData);
    const toastMessage = isEmail
      ? 'An OTP has been sent to your email'
      : 'An OTP has been sent to your mobile number';
    toast.success(toastMessage, {
      containerId: 'bottom-right',
    });
    return res.data as SendOtpSuccessResponse;
  } catch (error: any) {    
    return error.response.data as SendOtpErrorResponse;
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

export async function getPublicProductsRest(): Promise<
  GetCustomerAllProductsSuccessResponse | undefined
> {
  try {
    const res = await axios.get(`${apiEndPoints.getPublicProducts}`);
    return res.data as GetCustomerAllProductsSuccessResponse;
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
  productId: string
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

export async function getCategoryListRest(): Promise<
  getCategoryListSuccessResponse | undefined
> {
  try {
    const res = await axios.get(`${apiEndPoints.getCatagoryList}`);
    return res.data as getCategoryListSuccessResponse;
  } catch (error: any) {
    return error;
  }
}
export async function checkoutRest(
  data: CreateOrderRequest,
  router: NextRouter
): Promise<OrderResponseData | undefined> {
  try {
    const res = await axios.post(`${apiEndPoints.order}`, data);
    toast.success('Order created successfully!', {
      containerId: 'bottom-right',
    });
    router.push('/submit');
    return res.data;
  } catch (error: any) {
    toast.error('Order creation failed!', {
      containerId: 'bottom-right',
    });
    return error;
  }
}

export async function getPublicProductByCategoryIDRest(
  categoryId: string
): Promise<GetCustomerAllProductsResponse | undefined> {
  try {
    const res = await axios.get(
      `${apiEndPoints.getPublicProducts}?categoryId=${categoryId}`
    );
    return res.data.data as GetCustomerAllProductsResponse;
  } catch (error: any) {
    return [] as any;
  }
}
export async function addToWishlistRest(
  data: addToWishlistRequest
): Promise<AddToWishlistResponse | undefined> {
  try {
    const res = await axios.post(`${apiEndPoints.addToWishList}`, data);
    return res.data.data;
  } catch (error: any) {
    return error;
  }
}

export async function getOrderProductsRest(
  token: string
): Promise<OrderByUserIdResponse  | undefined> {
  try {
    const res = await axios.get(`${apiEndPoints.order}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res?.data?.data;
  } catch (error: any) {
    return [] as any;
  }
}

export async function getOrderProductRest(
  token: string,
  OrderId: string
): Promise<OrderResponseData | undefined> {
  try {
    const res = await axios.get(`${apiEndPoints.order}/${OrderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res?.data?.data;
  } catch (error: any) {
    return [] as any;
  }
}

export async function addToCompareRest(
  productId: string
): Promise<CompareResponse | undefined> {
  try {
    const res = await axios.post(
      `${apiEndPoints.addToCompare}`,
      { productId },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return res.data.data;
  } catch (error: any) {
    return error;
  }
}

export async function getCustomerWishlistRest(
  token: string
): Promise<Wishlist | undefined> {
  try {
    const res = await axios.get(`${apiEndPoints.getCustomerWishlist}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res?.data?.data as Wishlist;
  } catch (error: any) {
    const errorData = {
      userId: '',
      id: '',
      items: [],
    };
    return errorData as any;
  }
}

export async function deleteWishlistItemRest(
  data: string
): Promise<deleteWishlistItemResponse | undefined> {
  try {
    const res = await axios.delete(
      `${apiEndPoints.deleteWishlistItem}/${data}`
    );

    return res.data.data;
  } catch (error: any) {
    return error;
  }
}

export async function deleteFullWishlistRest(): Promise<
  deleteAllWishlistItemsResponse | undefined
> {
  try {
    const res = await axios.delete(`${apiEndPoints.deleteFullWishlist}`);
    return res.data.message;
  } catch (error: any) {
    return error;
  }
}

export async function deleteFromCompareRest(productId: string) {
  await axios.delete(
    `${apiEndPoints.deleteFromCompare}?productId=${productId}`
  );
}

export async function getCustomerProfileRest(
  token: string
): Promise<GetCustomerInformationSuccessResponse | undefined> {
  try {
    const res = await axios.get(`${apiEndPoints.getCustomerProfile}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return {} as any;
  }
}

export async function addCustomerNewAddressRest(
  customerAddress: CustomerAddress
): Promise<AddCustomerNewAddressResponse | undefined> {
  try {
    const res = await axios.put(
      `${apiEndPoints.addCustomerAddress}`,
      customerAddress
    );
    toast.success('New Address added', {
      containerId: 'bottom-right',
    });
    return res.data.data;
  } catch (error: any) {
    toast.error('Failed to add New Address', {
      containerId: 'bottom-right',
    });
    return error;
  }
}

export async function deleteCustomerAddressRest(
  addressId: string
): Promise<DeleteCustomerAddressResponse | undefined> {
  try {
    const res = await axios.delete(
      `${apiEndPoints.deleteCustomerAddress}/${addressId}`
    );
    toast.success('Address deleted successfully', {
      containerId: 'bottom-right',
    });
    return res.data as DeleteCustomerAddressSuccessResponse;
  } catch (error: any) {
    return error;
  }
}

export async function updateCustomerAddressRest(
  addressId: string,
  data: CustomerAddress
): Promise<UpdateCustomerAddressResponse | undefined> {
  try {
    const res = await axios.patch(
      `${apiEndPoints.updateCustomerAddress}/${addressId}`,
      data
    );
    toast.success('Address updated successfully', {
      containerId: 'bottom-right',
    });
    return res.data as UpdateCustomerAddressSuccessResponse;
  } catch (error: any) {
    toast.error('Address update failed', {
      containerId: 'bottom-right',
    });
    return error;
  }
}

export async function getCustomerRest(
  token: string
): Promise<GetCustomerInformationSuccessResponse | undefined> {
  try {
    const res = await axios.get(`${apiEndPoints.customer}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error: any) {
    return error;
  }
}

export async function updateCustomerRest(
  data: UpdateCustomerRequestBody
): Promise<UpdateCustomerSuccessResponse | undefined> {
  try {
    const response = await axios.patch(`${apiEndPoints.customer}`, data);
    return response.data;
  } catch (error: any) {
    return error;
  }
}

export async function getCartRest(
  token: string
): Promise<getCartSuccessResponse | undefined> {
  try {
    const res = await axios.get(`${apiEndPoints.getCart}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data as getCartSuccessResponse;
  } catch (error: any) {
    const data = {
      userId: '',
      id: '',
      items: [],
    };
    const errorData = {
      data,
    };
    return errorData as any;
  }
}

export async function addToCartRest(
  data: addToCartRequest
): Promise<addToCartSuccessResponse | undefined> {
  try {
    const res = await axios.post(`${apiEndPoints.addToCart}`, data);
    return res.data as addToCartSuccessResponse;
  } catch (error: any) {
    return error;
  }
}

export async function deleteAllCartItemRest(): Promise<
  deleteAllCartItemsSuccessResponse | undefined
> {
  try {
    const res = await axios.delete(`${apiEndPoints.deleteAllCartItem}`);
    return res.data as deleteAllCartItemsSuccessResponse;
  } catch (error: any) {
    return error;
  }
}

export async function deleteSingleCartItemRest(
  productId: string
): Promise<deleteCartItemSuccessResponse | undefined> {
  try {
    const res = await axios.delete(
      `${apiEndPoints.deleteSingleCartItem}?productId=${productId}`
    );
    return res.data as deleteCartItemSuccessResponse;
  } catch (error: any) {
    return error;
  }
}

export async function updateCartItemRest(
  cartItem: updateCartItemRequest
): Promise<updateCartItemSuccessResponse | undefined> {
  try {
    const res = await axios.patch(`${apiEndPoints.updateCartItem}`, cartItem);
    return res.data as updateCartItemSuccessResponse;
  } catch (error: any) {
    return error;
  }
}

export async function forgetPasswordSendOtpRest(
  data: string
): Promise<SendOtpSuccessResponse | undefined> {
  let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  const isEmail = regex.test(data);
  try {
    const res = await axios.post(
      `${apiEndPoints.forgetPasswordSendOtp}`,
      isEmail ? { email: data } : { phone: data }
    );
    toast.success('An OTP has been sent to your email/phone.', {
      containerId: 'bottom-right',
    });
    return res?.data;
  } catch (error: any) {
    if (error.response.data.error === 'CAN_NOT_GET_CUSTOMER') {
      toast.error("User doesn't exists.", {
        containerId: 'bottom-right',
      });
    } else {
      toast.error('Failed to send OTP. Try again.', {
        containerId: 'bottom-right',
      });
    }
    return error;
  }
}

export async function forgetPasswordVerifyOtpRest(
  data: VerifyOtpRequest
): Promise<VerifyOtpSuccessResponse | undefined> {
  try {
    const res = await axios.post(
      `${apiEndPoints.forgetPasswordVerifyOtp}`,
      data
    );
    return res?.data;
  } catch (error: any) {
    toast.error('OTP expired or invalid OTP. Try again', {
      containerId: 'bottom-right',
    });
    return error;
  }
}

export async function resetPasswordRest(
  data: CustomerForgotPasswordRequest
): Promise<CustomerForgotPasswordSuccessResponse | undefined> {
  try {
    const res = await axios.post(`${apiEndPoints.resetPassword}`, data);
    toast.success(
      'Password updated successfully. Please login with new password',
      {
        containerId: 'bottom-right',
      }
    );
    return res?.data;
  } catch (error: any) {
    toast.error('Password updatation failed. Try again', {
      containerId: 'bottom-right',
    });
    return error;
  }
}
