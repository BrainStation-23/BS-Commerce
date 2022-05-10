import { Product } from 'src/entity/product';
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

    async getProductCount(query: any): Promise<number> {
        return await this.db.getProductCount(query);
    }

    async findProductBySKU(sku: string): Promise<Product | null> {
        return await this.db.findProductBySKU(sku);
    }

    async deleteProduct(productId: string): Promise<Product | null> {
        return await this.db.deleteProduct(productId);
    }

    async updateProduct(product: Product, productId: string): Promise<Product | null> {
        return await this.db.updateProduct(product, productId);
    }

    async updateProductsForBands(productIds: string[], brandId: string): Promise<Product[] | null> {
        return await this.db.updateProductsForBands(productIds, brandId);
    }

    async findProductsByCondition(query: any, skip?: number, limit?: number): Promise<Product[] | []> {
        return await this.db.findProductsByCondition(query, skip, limit);
    }

    async getProductsList(skip: number, limit: number, query?: any, sortCondition?: string): Promise<Product[] | []> {
        return await this.db.getProductsList(skip, limit, query, sortCondition);
    }
}
