import axios from 'axios';
import {
  addToCartRequest,
  addToCartSuccessResponse,
  deleteCartItemSuccessResponse,
  getCartSuccessResponse,
  CustomerSignInRequest,
  CustomerSignInResponse,
  getCategoryListSuccessResponse,
  GetCustomerAllProductsSuccessResponse,
  GetCustomerProductByURLResponse,
  GetCustomerProductByURLSuccessResponse,
  GetCustomerProductResponse,
  GetCustomerProductSuccessResponse,
  deleteAllCartItemsSuccessResponse,
  addToWishlistRequest,
  AddToWishlistResponse,
  deleteAllWishlistItemsResponse,
  deleteWishlistItemResponse,
  SendOtpResponse,
  SendOtpSuccessResponse,
  SendOtpErrorResponse,
  GetCustomerInformationSuccessResponse,
  CreateOrderRequest,
  OrderResponseData,
  OrderByUserIdResponse,
  UpdateCustomerRequestBody,
  UpdateCustomerSuccessResponse,
  CustomerAddress,
  AddCustomerNewAddressResponse,
  DeleteCustomerAddressResponse,
  DeleteCustomerAddressSuccessResponse,
  UpdateCustomerAddressResponse,
  UpdateCustomerAddressSuccessResponse,
  CompareResponse,
  updateCartItemRequest,
  updateCartItemSuccessResponse,
  CompareSuccessResponse,
  GetCustomerQuery,
  GetCustomerErrorResponse,
  CreateCustomerRequest,
  CreateCustomerResponse,
  VerifyOtpRequest,
  VerifyOtpSuccessResponse,
  CustomerForgotPasswordRequest,
  CustomerForgotPasswordSuccessResponse,
  getCategoryResponse,
  getCategorySuccessResponse,
  getCategoryBySlugResponse,
  getCategoryBySlugSuccessResponse,
  IProductSearchResponse,
  IReOrderQuery,
  ReOrderResponse,
} from '@bs-commerce/models';
import { NextRouter } from 'next/router';
import { toast } from 'react-toastify';
import { apiEndPoints } from 'APIs/utils/apiEndPoints';
import { GetAllBrandsResponse } from 'models';

export async function getPublicProductsStatic(): Promise<
  GetCustomerAllProductsSuccessResponse | undefined
> {
  try {
    const res = await axios.get(`${apiEndPoints.getPublicProducts}`);
    return res.data as GetCustomerAllProductsSuccessResponse;
  } catch (error: any) {
    return error;
  }
}

export async function getFeaturedProductsStatic(): Promise<
  GetCustomerAllProductsSuccessResponse | undefined
> {
  try {
    const res = await axios.get(`${apiEndPoints.getPublicProducts}`);
    return res.data as GetCustomerAllProductsSuccessResponse;
  } catch (error: any) {
    return error;
  }
}
export async function getCategoryListStatic(): Promise<
  getCategoryListSuccessResponse | undefined
> {
  try {
    const res = await axios.get(`${apiEndPoints.getCatagoryList}`);
    return res.data as getCategoryListSuccessResponse;
  } catch (error: any) {
    return error;
  }
}

export async function getPublicProductByUniqueNameStatic(
  productUniqueName: string
): Promise<GetCustomerProductByURLResponse | undefined> {
  try {
    const res = await axios.get(
      `${apiEndPoints.getPublicProductByUniqueName}/${productUniqueName}`
    );
    return res.data.data as GetCustomerProductByURLSuccessResponse;
  } catch (error: any) {
    return error;
  }
}

export async function getPublicProductByCategoryIDStatic(
  categoryId: string,
  orderBy: string,
  minPrice: number,
  maxPrice: number,
  brands: string
): Promise<GetCustomerAllProductsSuccessResponse | undefined> {
  try {
    const res = await axios.get(
      `${apiEndPoints.getPublicProducts}?categoryId=${categoryId}${
        orderBy ? `&orderBy=${orderBy}` : ''
      }${brands ? `&brand=${brands}` : ''}${
        minPrice ? `&minPrice=${minPrice}` : ''
      }${maxPrice ? `&maxPrice=${maxPrice}` : ''}`
    );
    return res.data as GetCustomerAllProductsSuccessResponse;
  } catch (error: any) {
    return error;
  }
}

export async function addToCartStatic(
  data: addToCartRequest
): Promise<addToCartSuccessResponse | undefined> {
  try {
    const res = await axios.post(`${apiEndPoints.addToCart}`, data);

    return res.data as addToCartSuccessResponse;
  } catch (error: any) {
    return error;
  }
}
export async function getCartStatic(
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
export async function signInStatic(
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
export async function deleteSingleCartItemStatic(
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
export async function deleteAllCartItemStatic(): Promise<
  deleteAllCartItemsSuccessResponse | undefined
> {
  try {
    const res = await axios.delete(`${apiEndPoints.deleteAllCartItem}`);
    return res.data as deleteAllCartItemsSuccessResponse;
  } catch (error: any) {
    return error;
  }
}
export async function sendOTPStatic(
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

export async function getCustomerStatic(
  token: string
): Promise<GetCustomerInformationSuccessResponse | undefined> {
  try {
    const res = await axios.get(`${apiEndPoints.customer}`, {
      headers: { token: `${token}` },
    });
    return res.data;
  } catch (error: any) {
    return error;
  }
}

export async function addToWishlistStatic(
  data: addToWishlistRequest
): Promise<AddToWishlistResponse | undefined> {
  try {
    const res = await axios.post(`${apiEndPoints.addToWishList}`, data);
    return res.data.data;
  } catch (error: any) {
    return error;
  }
}

export async function deleteWishlistItemStatic(
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

export async function deleteFullWishlistStatic(): Promise<
  deleteAllWishlistItemsResponse | undefined
> {
  try {
    const res = await axios.delete(`${apiEndPoints.deleteFullWishlist}`);
    return res.data.message;
  } catch (error: any) {
    return error;
  }
}

export async function getCustomerProfileStatic(
  token: string
): Promise<GetCustomerInformationSuccessResponse | undefined> {
  try {
    const res = await axios.get(`${apiEndPoints.getCustomerProfile}`, {
      headers: { token: `${token}` },
    });
    return res.data;
  } catch (error) {
    return {} as any;
  }
}

export async function checkoutStatic(
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

export async function updateCustomerStatic(
  data: UpdateCustomerRequestBody
): Promise<UpdateCustomerSuccessResponse | undefined> {
  try {
    const response = await axios.patch(`${apiEndPoints.customer}`, data);
    return response.data;
  } catch (error: any) {
    return error;
  }
}

export async function addCustomerNewAddressStatic(
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

export async function deleteCustomerAddressStatic(
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

export async function updateCustomerAddressStatic(
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

export async function addToCompareStatic(
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

export async function deleteFromCompareStatic(
  productId: string
): Promise<CompareResponse | undefined> {
  try {
    const res = await axios.delete(
      `${apiEndPoints.deleteFromCompare}?productId=${productId}`
    );
    return res.data as CompareSuccessResponse;
  } catch (error: any) {
    return error;
  }
}

export async function getOrderProductsStatic(
  token: string
): Promise<OrderByUserIdResponse | undefined> {
  try {
    const res = await axios.get(`${apiEndPoints.order}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res?.data?.data[0] as OrderByUserIdResponse;
  } catch (error: any) {
    return [] as any;
  }
}
export async function getOrderProductStatic(
  token: string,
  OrderId: string
): Promise<OrderResponseData | undefined> {
  try {
    const res = await axios.get(`${apiEndPoints.order}/${OrderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res?.data);

    return res?.data.data[0];
  } catch (error: any) {
    return [] as any;
  }
}

export async function updateCartItemStatic(
  cartItem: updateCartItemRequest
): Promise<updateCartItemSuccessResponse | undefined> {
  try {
    const res = await axios.patch(`${apiEndPoints.updateCartItem}`, cartItem);
    return res.data as updateCartItemSuccessResponse;
  } catch (error: any) {
    return error;
  }
}

export async function getCompareStatic(): Promise<CompareResponse | undefined> {
  try {
    const res = await axios.get(`${apiEndPoints.addToCompare}`);
    return res.data as CompareSuccessResponse;
  } catch (error: any) {
    return error;
  }
}

export async function getSignedInUserStatic(
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

export async function signUpStatic(
  data: CreateCustomerRequest
): Promise<CreateCustomerResponse | undefined> {
  try {
    const res = await axios.post(`${apiEndPoints.register}`, data);
    return res.data;
  } catch (error: any) {
    return error;
  }
}

export async function getPublicProductByIdStatic(
  productId: string
): Promise<GetCustomerProductResponse | undefined> {
  try {
    const res = await axios.get(
      `${apiEndPoints.getPublicProducts}/${productId}`
    );
    return res.data as GetCustomerProductSuccessResponse;
  } catch (error: any) {
    return error;
  }
}

export async function forgetPasswordSendOtpStatic(
  data: string
): Promise<SendOtpSuccessResponse | undefined> {
  return undefined;
}

export async function forgetPasswordVerifyOtpStatic(
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

export async function resetPasswordStatic(
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

export async function getBrandsStatic(): Promise<
  GetAllBrandsResponse | undefined
> {
  try {
    const res = await axios.get(`${apiEndPoints.brands}`);
    return res?.data;
  } catch (error: any) {
    toast.error('Faild to get brands list', {
      containerId: 'bottom-right',
    });
    return error;
  }
}

export async function getCategoryDetailsByIdStatic(
  categoryId: string
): Promise<getCategoryResponse | undefined> {
  try {
    const res = await axios.get(
      `${apiEndPoints.getCategoryDetails}/${categoryId}`
    );
    return res.data as getCategorySuccessResponse;
  } catch (error: any) {
    return error;
  }
}

export async function getCategoryDetailsBySlugStatic(
  categorySlug: string
): Promise<getCategoryBySlugResponse | undefined> {
  try {
    const res = await axios.get(
      `${apiEndPoints.getCategoryBySlug}/${categorySlug}`
    );
    return res.data as getCategoryBySlugSuccessResponse;
  } catch (error: any) {
    return error;
  }
}

export async function searchProductsStatic(
  searchText: string,
  pageNumber: number,
  limit: number
): Promise<IProductSearchResponse> {
  try {
    const res = await axios.get(
      `${apiEndPoints.search}/?q=${searchText}${
        pageNumber ? `&pageNumber=${pageNumber}` : ''
      }${limit ? `&limit=${limit}` : ''}`
    );
    return res.data.data as IProductSearchResponse;
  } catch (error: any) {
    return error;
  }
}

export async function reorderStatic(
  data: IReOrderQuery
): Promise<ReOrderResponse | undefined> {
  try {
    const res = await axios.post(`${apiEndPoints.order}/reorder`, data);
    return res.data as ReOrderResponse;
  } catch (error: any) {
    toast.error('Something Went wrong on re-order', {
      containerId: 'bottom-right',
    });
    return error;
  }
}
