import { Injectable } from '@nestjs/common';
import { IProductDatabase } from 'src/modules/product/repositories/product.database.interface';
import { Product } from 'src/entity/product';
import { ProductModel } from './product.model';

@Injectable()
export class ProductDatabase implements IProductDatabase {

  async findProduct(query: Record<string, string>) {
    return await ProductModel.findOne(query).lean();
  }

  async createProduct(product: Product) {
    return await ProductModel.create(product);
  }

  async findAllProducts(skip?: number, limit?: number) {
    return await ProductModel.find({}).skip(skip).limit(limit).lean();
  }

  async getProductCount(query: any): Promise<number> {
    return await ProductModel.find(query).lean().count();
  }

  async deleteProduct(productId: string) {
    return await ProductModel.findOneAndRemove({ id: productId }).lean();
  }

  async updateProduct(product: Product, productId: string) {
    return await ProductModel.findOneAndUpdate({ id: productId }, { $set: product }, { new: true }).lean().exec();
  }
  
  async updateProductsForBrand(productIds: string[], brandId: string) {
    await ProductModel.updateMany(
      { id: { '$in': productIds } },
      { $addToSet: { brands: brandId } },
      { multi: true }
    ).exec();
    return await ProductModel.find({ id: { '$in': productIds } }).lean();
  }

  async findProductsByCondition(query: any, skip?: number, limit?: number) {
    return await ProductModel.find(query, 'info brands photos').skip(skip).limit(limit).lean();
  }

  async getProductsList(skip: number, limit: number, query?: any, sortCondition?: string) {
    return await ProductModel.find(query).sort(sortCondition).skip(skip).limit(limit).lean();
  }
}
