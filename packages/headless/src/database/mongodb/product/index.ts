import { Injectable } from '@nestjs/common';
import { Product, UpdateProduct } from 'src/entity/product';
import { IProductDatabase } from 'src/modules/product/repositories/product.database.interface';
import { ProductModel } from './product.model';

@Injectable()
export class ProductDatabase implements IProductDatabase {

  async findProduct(query: Record<string, any>): Promise<Product | null> {
    return await ProductModel.findOne(query).lean();
  }

  async createProduct(product: Product): Promise<Product | null> {
    return await ProductModel.create(product);
  }

  async findAllProducts(query: Record<string, any>, skip?: number, limit?: number): Promise<Product[] | []> {
    return await ProductModel.find(query).skip(skip).limit(limit).lean();
  }

  async getProductCount(query: Record<string, any>): Promise<number> {
    return await ProductModel.find(query).lean().count();
  }

  async deleteProduct(productId: string): Promise<Product | null> {
    return await ProductModel.findOneAndRemove({ id: productId }).lean();
  }

  async updateProduct(product: UpdateProduct, productId: string): Promise<Product | null> {
    return await ProductModel.findOneAndUpdate({ id: productId }, { $set: product }, { new: true }).lean().exec();
  }

  async updateProductsForBrand(productIds: string[], brandId: string): Promise<Product[] | []> {
    await ProductModel.updateMany(
      { id: { '$in': productIds } },
      { $addToSet: { brands: brandId } },
      { multi: true }
    ).exec();
    return await ProductModel.find({ id: { '$in': productIds } }).lean();
  }

  async findProductsByCondition(query: Record<string, any>, skip?: number, limit?: number): Promise<Product[] | []> {
    return await ProductModel.find(query, 'info brands photos').skip(skip).limit(limit).lean();
  }

  async getProductsList(skip: number, limit: number, query?: Record<string, any>, sortCondition?: string): Promise<Product[] | []> {
    return await ProductModel.find(query).sort(sortCondition).skip(skip).limit(limit).lean();
  }
}
