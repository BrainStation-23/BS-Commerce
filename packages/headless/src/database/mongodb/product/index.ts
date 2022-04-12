import { Product } from '../../../entity/product';
import { IProductDatabase } from '../../../modules/product/repositories/product.database.interface';
import { ProductModel } from './product.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductDatabase implements IProductDatabase {
    constructor() { }

    async findById(productId: string) {
        const product = await ProductModel.findOne({ id: productId });
        return Promise.resolve(product);
    }
    async save(product: Product) {
        await ProductModel.create(product);
        return Promise.resolve(product);
    }

    async findAll(skip?: number, limit?: number) {
        const products = await ProductModel.find({}).skip(skip).limit(limit);
        return Promise.resolve(products);
    }
}
