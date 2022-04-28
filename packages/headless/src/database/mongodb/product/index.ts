import { Injectable } from '@nestjs/common';
import { Product } from '../../../entity/product';
import { IProductDatabase } from '../../../modules/product/repositories/product.database.interface';
import { ProductModel } from './product.model';

@Injectable()
export class ProductDatabase implements IProductDatabase {

  async findProduct(productId: string) {
    return await ProductModel.findOne({ id: productId }).lean();
  }

  async createProduct(product: Product) {
    return await ProductModel.create(product);
  }

  async findAllProducts(skip?: number, limit?: number) {
    return await ProductModel.find({}).skip(skip).limit(limit).lean();
  }
}
