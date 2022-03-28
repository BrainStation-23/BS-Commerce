import { Injectable } from '@nestjs/common';
import { Product } from '../../../entity/product';

@Injectable()
export abstract class IProductDatabase {
    abstract findById: (productId: string) => Promise<Product | null>;
    abstract findAll: (skip?: number, limit?: number) => Promise<Product[]>;
    abstract save: (product: Product) => Promise<Product | null>;
}