import { Injectable } from '@nestjs/common';
import { Product } from 'src/entity/product';
import { ProductModel } from '../product/product.model';

@Injectable()
export class ProductSearchDatabase {
  async findProductById(id: string): Promise<Product> {
    return await ProductModel.findOne({ id }).exec();
  }
}
