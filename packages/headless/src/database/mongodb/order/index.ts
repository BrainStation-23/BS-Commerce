import { IOrderDatabase } from 'src/modules/order/repositories/order.db.interface';
import { OrderModel } from './order.model';

export class OrderDatabase implements IOrderDatabase {
  async createOrder(userId: string, body: any): Promise<any> {
    return await OrderModel.create({ userId, ...body });
  }

  async getOrderListByUserId(userId: string): Promise<any> {
    const orderList = await OrderModel.find({ userId }).lean();
    if (orderList.length > 0) {
      return orderList;
    }
    return null;
  }
}
