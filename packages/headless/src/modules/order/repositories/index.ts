import {
  CreateOrderRequest,
  CreateProductOrderDetails,
} from '@bs-commerce/models';
import { Injectable } from '@nestjs/common';
import { randomInt, randomUUID } from 'crypto';

import {
  GetAllOrderQueryEntity,
  OrderEntity,
  OrderIncompleteStatEntity,
  OrderStatEntity,
  ChangeStatusEntity,
  OrderSortQuery,
  ProductOrder,
  CartItem,
  CartResponse,
  Cart,
} from 'src/entity/order';
import { IOrderDatabase } from './order.db.interface';

@Injectable()
export class OrderRepository {
  constructor(private db: IOrderDatabase) {}

  async createOrder(
    userId: string,
    body: CreateOrderRequest,
  ): Promise<OrderEntity> {
    const orderId = await this.generateUniqueId();

    const newBody = { ...body, orderId };
    return await this.db.createOrder(userId, newBody);
  }

  async getAvailableProducts(productIds: string[]): Promise<any> {
    return await this.db.getAvailableProducts(productIds);
  }

  async getCart(userId: string): Promise<Cart | null> {
    return await this.db.getCart(userId);
  }

  async populateItemsInCart(
    userId: string,
    items: CartItem[],
  ): Promise<CartResponse | null> {
    return await this.db.populateItemsInCart(userId, items);
  }

  async clearCart(userId: string): Promise<CartResponse | null> {
    return await this.db.clearCart(userId);
  }

  async addPhotoDetails(
    products: CreateProductOrderDetails[],
  ): Promise<ProductOrder[]> {
    return await this.db.addPhotoDetails(products);
  }

  addCosts(newOrder: any): OrderEntity {
    let newProductList = [];
    let totalProductsCost = 0;
    newProductList = newOrder.products.map((product) => {
      const productCost = product.price * product.quantity; //individual product quantity * price
      totalProductsCost = totalProductsCost + productCost; // total cost of all the products
      return { ...product, totalPrice: productCost };
    });

    return {
      ...newOrder,
      products: newProductList,
      productCost: totalProductsCost,
      totalCost: newOrder.shippingCost + totalProductsCost,
    };
  }

  async generateUniqueId() {
    let orderId = randomInt(281474976710655).toString(); //generate id
    const len = orderId.length;
    if (len < 15) orderId = orderId.padStart(15, '0'); //check if the id is of 15 digits
    const idExists = await this.db.findOrder({ orderId }); //unique validation

    if (!idExists) return orderId;
    else return this.generateUniqueId();
  }

  async getOrderListByUserId(
    userId: string,
    sortObj: OrderSortQuery,
  ): Promise<OrderEntity[]> {
    return await this.db.getOrderListByUserId(userId, sortObj);
  }

  async findOrder(query: Record<string, any>): Promise<OrderEntity> {
    return await this.db.findOrder(query);
  }

  async getOrderStatistics(): Promise<OrderStatEntity> {
    return await this.db.getOrderStatistics();
  }
  async getIncompleteStatistics(): Promise<OrderIncompleteStatEntity> {
    return await this.db.getIncompleteStatistics();
  }
  async changeStatus(body: ChangeStatusEntity): Promise<OrderEntity> {
    return await this.db.changeStatus(body);
  }

  async getOrderList(
    query?: GetAllOrderQueryEntity,
    skip?: number,
    limit?: number,
  ): Promise<OrderEntity[]> {
    return await this.db.getOrderList(query, skip, limit);
  }

  async createReview(review: any):Promise<any>{
    return await this.db.createReview(review);
  }

  async findReview(query: Record<string,any>): Promise<any>{
    return await this.db.findReview(query);
  }
}
