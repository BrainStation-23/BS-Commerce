import { Injectable } from '@nestjs/common';
import { Product } from '../../../entity/product';
import { IProductDatabase } from '../../../modules/product/repositories/product.database.interface';
import { ProductModel } from './product.model';

@Injectable()
export class ProductDatabase implements IProductDatabase {
  async findById(productId: string) {
    return await ProductModel.findOne({ id: productId }).lean();
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
