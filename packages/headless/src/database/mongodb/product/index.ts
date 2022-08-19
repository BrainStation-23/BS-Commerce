import { Injectable } from '@nestjs/common';
import { Product, SearchCondition, UpdateProduct } from 'src/entity/product';
import { IProductDatabase } from 'src/modules/product/repositories/product.database.interface';
import { CategoryModel } from '../category/category.model';
import { ProductModel } from './product.model';

@Injectable()
export class ProductDatabase implements IProductDatabase {

  async findProduct(query: Record<string, any>): Promise<Product | null> {
    return await ProductModel.findOne(query, '-_id').lean();
  }

  async createProduct(product: Product): Promise<Product | null> {
    return await ProductModel.create(product);
  }

  async findAllProducts(query: Record<string, any>, skip?: number, limit?: number): Promise<Product[] | []> {
    return await ProductModel.find(query, '-_id').sort({ createdAt: -1 }).skip(skip).limit(limit).lean();
  }

  async getAllConditionalProducts(query: Record<string, any>, price: Partial<SearchCondition>, slug: string, orderBy: number, skip?: number, limit?: number): Promise<Product[] | []> {
    const categories = await CategoryModel.find({ '$or': [{ 'slug': slug }, { 'ancestors.slug': slug }] }).lean();
    const categoryIdList = categories && categories.length && categories.map(category => { return category.id });
    const { maxPrice, minPrice } = price;
    const products = await ProductModel.find({
      ...query,
      'categories.id': { '$in': categoryIdList },
      'info.price': { $gte: minPrice || 0, $lte: maxPrice || Number.MAX_SAFE_INTEGER }
    }, '-_id').sort({
      'info.price': orderBy
    }).skip(skip).limit(limit).lean();
    return products;
  }

  async getProductCount(query: Record<string, any>): Promise<number> {
    return await ProductModel.find(query, '-_id').lean().count();
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

  async getProductsList(skip: number, limit: number, query?: Record<string, any>, sortCondition?: string): Promise<Product[] | []> {
    return await ProductModel.find(query, '-_id').sort(sortCondition).skip(skip).limit(limit).lean();
  }
}
