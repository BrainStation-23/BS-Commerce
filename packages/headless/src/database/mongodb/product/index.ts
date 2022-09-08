import { Injectable } from '@nestjs/common';
import { Product, SearchCondition, UpdateProduct } from 'src/entity/product';
import { Tag } from 'src/entity/tags';
import { IProductDatabase } from 'src/modules/product/repositories/product.database.interface';
import { CategoryModel } from '../category/category.model';
import { OrderModel } from '../order/order.model';
import { TagsModel } from '../tags/tags.model';
import { ProductModel } from './product.model';

@Injectable()
export class ProductDatabase implements IProductDatabase {

  async findProduct(query: Record<string, any>): Promise<Product | null> {
    return await ProductModel.findOne(query, '-_id').lean();
  }

  async createProduct(product: Product): Promise<Product | null> {
    return await ProductModel.create(product);
  }

  async findAllProducts(query: Record<string, any>, skip?: number, limit?: number, price?: Partial<SearchCondition>, orderBy?: string,): Promise<Product[] | []> {
    const sort: any = { 'info.price': orderBy, createdAt: -1 };
    return await ProductModel.find({
      ...query,
      'info.price': { $gte: price?.minPrice || 0, $lte: price?.maxPrice || Number.MAX_SAFE_INTEGER }
    }, '-_id').sort(sort).skip(skip).limit(limit).lean();
  }

  async getAllConditionalProducts(query: Record<string, any>, price: Partial<SearchCondition>, slug: string, orderBy: 'asc' | 'desc', skip?: number, limit?: number): Promise<Product[] | []> {
    const categories = await CategoryModel.find({ '$or': [{ 'slug': slug }, { 'ancestors.slug': slug }] }).lean();
    const categoryIdList = categories && categories.length && categories.map(category => { return category.id });
    const { maxPrice, minPrice } = price;
    const sort: any = { 'info.price': orderBy };
    return await ProductModel.find({
      ...query,
      'categories.id': { '$in': categoryIdList },
      'info.price': { $gte: minPrice || 0, $lte: maxPrice || Number.MAX_SAFE_INTEGER }
    }, '-_id').sort(sort).skip(skip).limit(limit).lean();
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

  async getTag(query: Record<string, any>): Promise<Tag[]> {
    return await TagsModel.findOne(query).select('-_id').lean();
  }

  async getTopSellingProducts(skip: number, limit: number): Promise<Product[] | []> {
    const orderArray = await OrderModel.aggregate([
      { $unwind: "$products" },
      {
        '$match': {
          'orderedDate': {
            '$gte': new Date(Date.now() - 7 * 60 * 60 * 24 * 1000)
          }
        }
      },
      {
        $group:
        {
          _id: "$products.id",
          totalOrderQuantity:
          {
            $sum: "$products.info.quantity"
          }
        }
      },
      {
        '$match': {
          totalOrderQuantity: {
            '$gte': 5
          }
        }
      },
      { $sort: { totalOrderQuantity: -1 } }
    ]);

    let productsIds = orderArray.map(function (item) {
      return item._id
    });

    return await ProductModel.find({ id: { $in: productsIds } }).skip(skip).limit(limit).lean();
  }

  async getNewArrivalProducts(skip: number, limit: number): Promise<Product[] | []> {
    return await ProductModel.find({ createdAt: { '$gte': new Date(Date.now() - 3 * 60 * 60 * 24 * 1000) } }).skip(skip).limit(limit).lean();
  }
}
