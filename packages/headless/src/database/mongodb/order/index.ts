import {
  CartItem,
  Cart,
  ChangeStatusEntity,
  GetAllOrderQueryEntity,
  OrderEntity,
  OrderIncompleteStatEntity,
  OrderSortQuery,
  OrderStatEntity,
  OrderStatusEnum,
  ProductOrder,
  ShippingStatusEnum,
  StatusTypeDto,
  CartResponse,
} from 'src/entity/order';
import { IOrderDatabase } from 'src/modules/order/repositories/order.db.interface';
import { ProductModel } from '../product/product.model';
import { OrderModel } from './order.model';
import {
  CreateOrderRequest,
  CreateProductOrderDetails,
} from '@bs-commerce/models';
import { CartModel } from '../cart/cart.model';
import { ReviewModel } from '../review/review.model';
import { Review } from 'src/entity/review';

export class OrderDatabase implements IOrderDatabase {
  async populateItemsInCart(
    userId: string,
    products: CartItem[],
  ): Promise<CartResponse | null> {
    let addItems;
    try {
      addItems = await CartModel.findOneAndUpdate(
        { userId },
        { $set: { items: products } },
        { new: true },
      ).lean();
    } catch (error) {
      console.log(error);
      return null;
    }

    return addItems;
  }

  async getCart(userId: string): Promise<Cart | null> {
    return await CartModel.findOne({ userId }).select('items -_id').lean();
  }
  async createOrder(
    userId: string,
    body: CreateOrderRequest,
  ): Promise<OrderEntity> {
    return await OrderModel.create({ userId, ...body });
  }

  async getAvailableProducts(productIds: string[]): Promise<any> {
    return await ProductModel.find({
      id: { $in: productIds },
      'info.published': { $eq: true, $exists: true },
    }).select('id -_id');
  }

  async clearCart(userId: string): Promise<CartResponse | null> {
    return CartModel.findOneAndUpdate(
      { userId },
      { $set: { items: [] } },
      { new: true },
    )
      .select('-_id')
      .lean()
      .exec();
  }

  async addPhotoDetails(
    products: CreateProductOrderDetails[],
  ): Promise<ProductOrder[]> {
    let newProductList = [];
    newProductList = await Promise.all(
      products.map(async (product) => {
        const photoDetails = await ProductModel.findOne({
          id: product.productId,
        }).lean();
        return { ...product, photos: photoDetails.photos };
      }),
    );

    return newProductList;
  }

  async getOrderListByUserId(
    userId: string,
    sortObj: OrderSortQuery,
  ): Promise<OrderEntity[]> {
    const { sortField, sortType } = sortObj;
    let sortIndex = -1;
    const sort = {};
    if (sortField && sortType) {
      if (sortType === 'asc') sortIndex = 1;
      sort[sortField] = sortIndex;
    } else {
      sort['orderedDate'] = sortIndex; //by default orders will be sorted by date
    }

    return await OrderModel.find({ userId }).sort(sort);
  }

  async findOrder(query: Record<string, any>): Promise<OrderEntity> {
    return await OrderModel.findOne(query).lean();
  }

  async getOrderStatistics(): Promise<OrderStatEntity> {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const thisWeek = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - today.getDay(),
      );
      const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      const thisYear = new Date(today.getFullYear(), 0, 1);

      const orderStat = await OrderModel.aggregate([
        {
          $group: {
            _id: '$orderStatus',
            todayTotal: {
              $sum: {
                $cond: [{ $gte: ['$orderedDate', today] }, '$totalCost', 0],
              },
            },
            weekTotal: {
              $sum: {
                $cond: [{ $gte: ['$orderedDate', thisWeek] }, '$totalCost', 0],
              },
            },
            monthTotal: {
              $sum: {
                $cond: [{ $gte: ['$orderedDate', thisMonth] }, '$totalCost', 0],
              },
            },
            yearTotal: {
              $sum: {
                $cond: [{ $gte: ['$orderedDate', thisYear] }, '$totalCost', 0],
              },
            },
            allTimeTotal: { $sum: '$totalCost' },
          },
        },
      ]).exec();

      if (orderStat) {
        return orderStat[0] as OrderStatEntity;
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getIncompleteStatistics(): Promise<OrderIncompleteStatEntity> {
    try {
      const orderStat = await OrderModel.aggregate([
        {
          $group: {
            _id: null,
            orderPendingTotal: {
              $sum: {
                $cond: [
                  { $eq: ['$orderStatus', OrderStatusEnum.Pending] },
                  '$totalCost',
                  0,
                ],
              },
            },
            orderPendingCount: {
              $sum: {
                $cond: [
                  { $eq: ['$orderStatus', OrderStatusEnum.Pending] },
                  1,
                  0,
                ],
              },
            },
            paymentPendingTotal: {
              $sum: {
                $cond: [
                  { $eq: ['$paymentStatus', OrderStatusEnum.Pending] },
                  '$totalCost',
                  0,
                ],
              },
            },
            paymentPendingCount: {
              $sum: {
                $cond: [
                  { $eq: ['$paymentStatus', OrderStatusEnum.Pending] },
                  1,
                  0,
                ],
              },
            },
            shippingPendingTotal: {
              $sum: {
                $cond: [
                  {
                    $eq: ['$shippingStatus', ShippingStatusEnum.NotYetShipped],
                  },
                  '$totalCost',
                  0,
                ],
              },
            },
            shippingPendingCount: {
              $sum: {
                $cond: [
                  {
                    $eq: ['$shippingStatus', ShippingStatusEnum.NotYetShipped],
                  },
                  1,
                  0,
                ],
              },
            },
          },
        },
      ]).exec();
      if (orderStat) {
        return orderStat[0] as OrderIncompleteStatEntity;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async changeStatus(body: ChangeStatusEntity): Promise<OrderEntity> {
    try {
      const { orderId, statusType, statusValue } = body;
      let update = {};
      if (statusType === StatusTypeDto.orderStatusEnums) {
        update = { orderStatus: statusValue };
      } else if (statusType === StatusTypeDto.paymentStatusEnums) {
        update = { paymentStatus: statusValue };
      } else if (statusType === StatusTypeDto.shippingStatusEnums) {
        update = { shippingStatus: statusValue };
      }

      return await OrderModel.findOneAndUpdate(
        { orderId },
        { $set: update },
        { new: true },
      ).lean();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getOrderList(
    query?: GetAllOrderQueryEntity,
    skip?: number,
    limit?: number,
  ): Promise<OrderEntity[]> {
    const { shippingStatus, orderStatus, paymentStatus, startDate, endDate } =
      query;
    const sort = {
      orderedDate: -1,
    };
    const queryParams = {
      ...(shippingStatus && { shippingStatus }),
      ...(orderStatus && { orderStatus }),
      ...(paymentStatus && { paymentStatus }),
    };

    if (startDate || endDate) {
      queryParams['orderedDate'] = {
        ...(startDate && { $gte: new Date(startDate) }),
        ...(endDate && { $lte: new Date(endDate) }),
      };
    }
    return await OrderModel.find(queryParams)
      .skip(skip)
      .limit(limit)
      .sort(sort)
      .lean();
  }

  async createReview(review: any): Promise<Review | null> {
    try {
      return await ReviewModel.create(review);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async findReview(query: Record<string, any>): Promise<Review[] | null> {
    try {
      return await ReviewModel.find(query).lean().exec();
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async addProductRating(productId: string, rating: number): Promise<boolean> {
    try {
      const product = await ProductModel.findOne({ id: productId })
        .lean()
        .exec();
      if (!product) return false;

      let ratingObj = product.rating || {};
      if(Object.keys(ratingObj).length === 0) ratingObj[`${rating}`] = 1;
      else{
        for (let i in ratingObj) {
          if (parseInt(i) === rating) ratingObj[i]++;
          else ratingObj[`${rating}`] = 1;
        }
      }

      let noOfRatings = 0, sum = 0;
      for (const key in ratingObj) {
        noOfRatings = noOfRatings + ratingObj[key];
        sum = sum + (parseInt(key) * ratingObj[key]);
      }

      const avgRating = Math.round(sum / noOfRatings);
      const newProduct = { ...product, rating: ratingObj, avgRating };

      const response = await ProductModel.findOneAndUpdate(
        { id: productId },
        newProduct,
        { new: true },
      )
        .select('-_id')
        .lean()
        .exec();

      return response ? true : false;
    }catch (err) {
      console.log(err);
      return false;
    }
  }
}
