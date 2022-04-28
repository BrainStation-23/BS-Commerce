import { Product } from '../../../entity/product';
import { IProductDatabase } from './product.database.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
    constructor(private readonly db: IProductDatabase) { }

    async findProduct(productId: string): Promise<Product | null> {
        return await this.db.findProduct(productId);
    }

    async findAllProducts(skip?: number, limit?: number): Promise<Product[]> {
        return await this.db.findAllProducts(skip, limit);
    }

    async createProduct(product: Product): Promise<Product | null> {
        return await this.db.createProduct(product);
    }
}
