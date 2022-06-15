import { Injectable } from '@nestjs/common';
import { Product, UpdateProduct } from 'src/entity/product';

@Injectable()
export abstract class IProductDatabase {
    abstract findProduct: (query: Record<string, any>) => Promise<Product | null>;
    abstract findAllProducts: (query: Record<string, any>, skip?: number, limit?: number) => Promise<Product[] | []>;
    abstract createProduct: (product: Product) => Promise<Product | null>;
    abstract getProductCount: (query: Record<string, any>) => Promise<number | null>;
    abstract deleteProduct: (productId: string) => Promise<Product | null>;
    abstract updateProduct: (product: UpdateProduct, productId: string) => Promise<Product | null>;
    abstract updateProductsForBrand: (productIds: string[], brandId: string) => Promise<Product[] | null>;
    abstract findProductsByCondition: (query: Record<string, any>, skip?: number, limit?: number) => Promise<Product[] | []>;
    abstract getProductsList: (skip: number, limit: number, query?: Record<string, any>, sortCondition?: string) => Promise<Product[] | []>;
}