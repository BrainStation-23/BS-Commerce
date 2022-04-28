import { Injectable } from '@nestjs/common';
import { Product } from '../../../entity/product';

@Injectable()
export abstract class IProductDatabase {
    abstract findProduct: (productId: string) => Promise<Product | null>;
    abstract findAllProducts: (skip?: number, limit?: number) => Promise<Product[] | []>;
    abstract createProduct: (product: Product) => Promise<Product | null>;
}