import { Injectable } from '@nestjs/common';
import { Product } from 'src/entity/product';

@Injectable()
export abstract class IProductDatabase {
    abstract findProduct: (productId: string) => Promise<Product | null>;
    abstract findAllProducts: (skip?: number, limit?: number) => Promise<Product[] | []>;
    abstract createProduct: (product: Product) => Promise<Product | null>;
    abstract getProductCount: (query: any) => Promise<number | null>;
    abstract findProductBySKU: (sku: string) => Promise<Product | null>;
    abstract deleteProduct: (productId: string) => Promise<Product | null>;
    abstract updateProduct: (product: Product, productId: string) => Promise<Product | null>;
    abstract updateProductsForBands: (productIds: string[]) => Promise<Product[] | []>;
    abstract findProductsByCondition: (query: any, skip?: number, limit?: number) => Promise<Product[] | []>;
    abstract getProductsList: (skip: number, limit: number, query?: any, sortCondition?: string) => Promise<Product[] | []>;
}