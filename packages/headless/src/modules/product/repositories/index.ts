import { Product, UpdateProduct } from 'src/entity/product';
import { IProductDatabase } from './product.database.interface';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class ProductRepository {
    constructor(private readonly db: IProductDatabase) { }

    async findProduct(query: Record<string, any>): Promise<Product | null> {
        return await this.db.findProduct(query);
    }

    async findAllProducts(query: Record<string, any>, skip?: number, limit?: number): Promise<Product[]> {
        return await this.db.findAllProducts(query, skip, limit);
    }

    async getAllConditionalProducts(slug: string, orderBy: string, skip?: number, limit?: number): Promise<Product[]> {
        return await this.db.getAllConditionalProducts(slug, orderBy, skip, limit);
    }

    async createProduct(product: Product): Promise<Product | null> {
        product.id = randomUUID();
        return await this.db.createProduct(product);
    }

    async getProductCount(query: Record<string, any>): Promise<number> {
        return await this.db.getProductCount(query);
    }

    async deleteProduct(productId: string): Promise<Product | null> {
        return await this.db.deleteProduct(productId);
    }

    async updateProduct(product: UpdateProduct, productId: string): Promise<Product | null> {
        return await this.db.updateProduct(product, productId);
    }

    async updateProductsForBrand(productIds: string[], brandId: string): Promise<Product[] | null> {
        return await this.db.updateProductsForBrand(productIds, brandId);
    }

    async getProductsList(skip: number, limit: number, query?: Record<string, any>, sortCondition?: string): Promise<Product[] | []> {
        return await this.db.getProductsList(skip, limit, query, sortCondition);
    }
}
