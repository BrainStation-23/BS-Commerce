import { OrderStatusEnum, ShippingStatusEnum } from 'src/entity/order';
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

  async getOrderById(orderId: string): Promise<any>{
    const orderList = await OrderModel.findOne({ orderId }).lean();
    if (orderList) {
      return orderList;
    }
    return null;
  }

  async getOrderStatistics(): Promise<any>{
    try{
      const today = new Date();
      today.setHours(0,0,0,0);
      const thisWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
      const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      const thisYear = new Date(today.getFullYear(), 0, 1);

      const orderStat = await OrderModel.aggregate(
        [
            {
                $group : {
                    _id : '$orderStatus',
                    todayTotal: { $sum: {$cond: [ { $gte: [ '$orderedDate', today ] }, '$totalCost', 0 ] } },
                    weekTotal: { $sum: {$cond: [ { $gte: [ '$orderedDate', thisWeek ] }, '$totalCost', 0 ] } },
                    monthTotal: { $sum: {$cond: [ { $gte: [ '$orderedDate', thisMonth ] }, '$totalCost', 0 ] } },
                    yearTotal: { $sum: {$cond: [ { $gte: [ '$orderedDate', thisYear ] }, '$totalCost', 0 ] } },
                    allTimeTotal: { $sum: '$totalCost' }
                }
            }
        ]
      ).exec()

      if(orderStat){
        return orderStat[0];
      }
    }catch(err){
      console.log(err)
      return null
    }
  }

  async getIncompleteStatistics(): Promise<any>{

    try { 
      const orderStat = await OrderModel.aggregate(
        [
            {
                $group : {
                    _id : null,
                    orderPendingTotal: { $sum: {$cond: [ { $eq: [ '$orderStatus', OrderStatusEnum.Pending ] }, '$totalCost', 0 ] } },
                    orderPendingCount: { $sum: {$cond: [ { $eq: [ '$orderStatus', OrderStatusEnum.Pending ] }, 1, 0 ] } },
                    paymentPendingTotal: { $sum: {$cond: [ { $eq: [ '$paymentStatus', OrderStatusEnum.Pending ] }, '$totalCost', 0 ] } },
                    paymentPendingCount: { $sum: {$cond: [ { $eq: [ '$paymentStatus', OrderStatusEnum.Pending ] }, 1, 0 ] } },
                    shippingPendingTotal: { $sum: {$cond: [ { $eq: [ '$shippingStatus', ShippingStatusEnum.NotYetShipped ] }, '$totalCost', 0 ] } },
                    shippingPendingCount: { $sum: {$cond: [ { $eq: [ '$shippingStatus', ShippingStatusEnum.NotYetShipped ] }, 1, 0 ] } }
                }
            }
        ]
      ).exec()
      if(orderStat){
        return orderStat[0];
      }
    } catch (error) {
        console.log(error)
        return null
    }
  }
}
