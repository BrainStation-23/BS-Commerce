import { NextRouter } from 'next/router';
import {
  Product,
  UpdateProductRequest,
  SignInRequest,
  SignInSuccessResponse,
  GetUserSuccessResponse,
  getCategoryListSuccessResponse,
  getCategoryRequest,
  getCategorySuccessResponse,
  CreateManufacturerRequest,
  Manufacturer,
  UpdateManufacturerRequest,
  GetProductParams,
  CreateProductRequest,
  createCategoryRequest,
  createCategorySuccessResponse,
  UploadFileSuccessResponse,
  GetTagsResponse,
  Tags,
  UpdatedUserRequest,
  CreateBrandRequest,
} from 'models';

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  phone?: string;
  username: string;
  email: string;
  password?: string;
  provider?: string;
  providerData?: object;
  additionalProviderData?: object;
  resetPasswordToken?: string;
  resetPasswordExpires?: number;
  gender?: string;
  addresses?: Address[];
  status: string;
}

export interface Address {
  id?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  country: string;
  postCode: string;
}

export interface apiFunction {
  getOrderEnum: () => Promise<any | undefined>;
  getAllOrderList: (
    orderStatus: string,
    paymentStatus: string,
    shippingStatus: string,
    startDate: string,
    endDate: string
  ) => Promise<any | undefined>;
  getSingleOrderById: (id: string) => Promise<any | undefined>;
  updateOrderStatus: (data: any) => Promise<any | undefined>;
  updatePaymentStatus: (data: any) => Promise<any | undefined>;
  updateShippingStatus: (data: any) => Promise<any | undefined>;
  getAllManufacturers();
  updateProduct: (
    data: any,
    id: any,
    router: any
  ) => Promise<UpdateProductRequest | undefined>;
  createProduct: (
    data: any,
    router: any
  ) => Promise<CreateProductRequest | undefined>;
  getProduct: (data: GetProductParams) => Promise<GetProductParams | undefined>;
  getProducts: (pageSize: number) => Promise<Product[] | undefined>;
  searchProduct: (data: string) => Promise<Product | undefined>;
  getCategoryList: () => Promise<getCategoryListSuccessResponse | undefined>;
  createCategory: (
    data: createCategoryRequest,
    router: NextRouter
  ) => Promise<createCategorySuccessResponse | undefined>;
  getCategory: (
    id: getCategoryRequest
  ) => Promise<getCategorySuccessResponse | undefined>;
  deleteProduct: (productId: string) => Promise<boolean | undefined>;
  signin: (
    data: SignInRequest,
    router: NextRouter
  ) => Promise<SignInSuccessResponse | undefined>;
  createAdmin: (data: User, cb: any) => Promise<User | undefined>;
  getAdmins: () => Promise<User[] | undefined>;
  updateAdmin: (data: any) => Promise<UpdatedUserRequest | undefined>;
  changePassword: (data: any) => Promise<UpdatedUserRequest | undefined>;
  createManufacturer: (
    data: CreateManufacturerRequest,
    router: NextRouter
  ) => Promise<CreateManufacturerRequest | undefined>;
  getManufacturer: (data: any) => Promise<Manufacturer[] | undefined>;
  deleteManufacturer: (
    id: any,
    router: NextRouter
  ) => Promise<Manufacturer[] | undefined>;
  getSingleManufacturer: (data: any) => Promise<any | undefined>;
  updateManufacturer: (
    data: UpdateManufacturerRequest,
    router: NextRouter
  ) => Promise<UpdateManufacturerRequest | undefined>;
  getUserProfile: (
    router: NextRouter
  ) => Promise<GetUserSuccessResponse | undefined>;
  getBrands: () => Promise<any>;
  getBrand(brandId: any): Promise<any>;
  mediaUpload: (
    data: FormData
  ) => Promise<UploadFileSuccessResponse | undefined>;
  getTags: () => Promise<GetTagsResponse | undefined>;
  createBrand(data: CreateBrandRequest, router: NextRouter): Promise<any>;
  deleteBrand(productId: string): Promise<boolean | undefined>;
}

export interface adminCreate {
  id?: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  phone?: string;
  username?: string;
  email: string;
  provider?: string;
  providerData?: object;
  additionalProviderData?: object;
  resetPasswordToken?: string;
  resetPasswordExpires?: number;
  gender?: string;
  addresses?: Address[];
  status?: string;
  password?: string;
}
