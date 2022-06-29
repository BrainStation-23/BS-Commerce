import { NextRouter } from "next/router";
import {
  Product,
  UpdateProductRequest,
  SignInRequest,
  SignInSuccessResponse,
  GetUserResponse,
  GetUserSuccessResponse,
  getCategoryBySlugResponse,
  getCategoryBySlugRequest,
} from "models";
import {
  CreateManufacturerRequest,
  Manufacturer,
  UpdateManufacturerRequest,
} from "models";
import { GetProductParams } from "./../../models/src/product/getProduct";
import { CreateProductRequest } from "./../../models/src/product/createProduct";
import { UpdatedUserRequest } from "./../../models/src/user/updateUser";
import { CategoryInterface } from "../components/category/catergory-model";

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
  getCategories: () => Promise<CategoryInterface[] | undefined>;
  deleteProduct: (productId: string) => Promise<boolean | undefined>;
  signin: (
    data: SignInRequest,
    router: NextRouter
  ) => Promise<SignInSuccessResponse | undefined>;
  createAdmin: (data: User, cb: any) => Promise<User | undefined>;
  getAdmins: () => Promise<User[] | undefined>;
  updateAdmin: (
    data: any
  ) => Promise<UpdatedUserRequest | undefined>;
  changePassword: (
    data: any,
  ) => Promise<UpdatedUserRequest | undefined>;
  createManufacturer: (
    data: CreateManufacturerRequest,
    router: any
  ) => Promise<CreateManufacturerRequest | undefined>;
  getManufacturer: () => Promise<Manufacturer[] | undefined>;
  deleteManufacturer: (
    id: any,
    router: any
  ) => Promise<Manufacturer[] | undefined>;
  getSingleManufacturer: (data: any) => Promise<any | undefined>;
  updateManufacturer: (
    data: UpdateManufacturerRequest,
    router: any
  ) => Promise<UpdateManufacturerRequest | undefined>;
  getUserProfile: () => Promise<GetUserSuccessResponse | undefined>;
  getCategoryBySlug: (
    slug: getCategoryBySlugRequest
  ) => Promise<getCategoryBySlugResponse | undefined>;
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
