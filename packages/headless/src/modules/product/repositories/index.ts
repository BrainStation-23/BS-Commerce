import { Product } from '../../../entity/product';
import { IProductDatabase } from './product.database.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
    constructor(private readonly db: IProductDatabase) { }

    async findProduct(productId: string): Promise<Product | null> {
        const product = await this.db.findById(productId);
        return product;
    }

    async findAllProduct(skip?: number, limit?: number): Promise<Product[]> {
        const product = await this.db.findAll(skip, limit);
        return product;
    }

    async createProduct(product: Product): Promise<Product | null> {
        const savedProduct = await this.db.save(product);
        return savedProduct;
    }
}
