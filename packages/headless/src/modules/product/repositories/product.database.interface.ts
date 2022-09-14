import { Injectable } from '@nestjs/common';
import { Product, SearchCondition, UpdateProduct } from 'src/entity/product';
import { Tag } from 'src/entity/tags';

@Injectable()
export abstract class IProductDatabase {
  abstract findProduct: (query: Record<string, any>) => Promise<Product | null>;
  abstract findAllProducts: (
    query: Record<string, any>,
    skip?: number,
    limit?: number,
    price?: Partial<SearchCondition>,
    orderBy?: string,
  ) => Promise<Product[] | []>;
  abstract getAllConditionalProducts: (
    query: Record<string, any>,
    price: Partial<SearchCondition>,
    slug: string,
    orderBy: string,
    skip?: number,
    limit?: number,
  ) => Promise<Product[] | []>;
  abstract createProduct: (product: Product) => Promise<Product | null>;
  abstract getProductCount: (
    query: Record<string, any>,
  ) => Promise<number | null>;
  abstract deleteProduct: (productId: string) => Promise<Product | null>;
  abstract updateProduct: (
    product: UpdateProduct,
    productId: string,
  ) => Promise<Product | null>;
  abstract updateProductsForBrand: (
    productIds: string[],
    brandId: string,
  ) => Promise<Product[] | null>;
  abstract getProductsList: (
    skip: number,
    limit: number,
    query?: Record<string, any>,
    sortCondition?: string,
  ) => Promise<Product[] | []>;
  abstract getTopSellingProducts: (
    skip: number,
    limit: number,
  ) => Promise<Product[] | []>;
  abstract getNewArrivalProducts: (
    skip: number,
    limit: number,
  ) => Promise<Product[] | []>;
  abstract getTag: (query: Record<string, any>) => Promise<Tag[] | []>;
}
