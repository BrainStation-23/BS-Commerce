import { CreateManufacturerRequest, Manufacturer, UpdateManufacturerRequest, Product, UpdateProductRequest } from "models";
import { GetProductParams } from "./../../models/src/product/getProduct";
import { CreateProductRequest } from "./../../models/src/product/createProduct";

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
    router: any
  ) => Promise<UpdateProductRequest | undefined>;
  createProduct: (
    data: any,
    router: any
  ) => Promise<CreateProductRequest | undefined>;
  getProduct: (data: GetProductParams) => Promise<GetProductParams | undefined>;
  getProducts: (pageSize: number) => Promise<Product[] | undefined>;
  searchProduct: (data: string) => Promise<Product | undefined>;
  createManufacturer: (
    data: CreateManufacturerRequest,
    router: any
) => Promise<CreateManufacturerRequest | undefined>;
  getManufacturer: () => Promise<Manufacturer[] | undefined>;
  deleteManufacturer: (id: any, router: any) => Promise<Manufacturer[] | undefined>
  getSingleManufacturer: (
      data: any
  ) => Promise<any | undefined>;
  updateManufacturer: (
      data: UpdateManufacturerRequest,
      router: any
  ) => Promise<UpdateManufacturerRequest | undefined>;
}
