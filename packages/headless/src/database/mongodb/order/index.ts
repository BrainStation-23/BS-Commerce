import { 
  ChangeStatusEntity, 
  GetAllOrderQueryEntity, 
  OrderEntity, 
  OrderIncompleteStatEntity, 
  OrderSortQuery, 
  OrderStatEntity, 
  OrderStatusEnum, 
  ShippingStatusEnum, 
  StatusTypeDto 
} from 'src/entity/order';
import { IOrderDatabase } from 'src/modules/order/repositories/order.db.interface';
import { ProductModel } from '../product/product.model';
import { OrderModel } from './order.model';
import { IOrderCreateData, IProductOrderData } from 'models';

export class OrderDatabase implements IOrderDatabase {
  async createOrder(userId: string, body: IOrderCreateData): Promise<OrderEntity> {
    return await OrderModel.create({ userId, ...body });
  }

  async addPhotoDetails(products: IProductOrderData[]): Promise<IProductOrderData[]>{
    let newProductList = [];
    newProductList = await Promise.all(products.map( async (product) => {
        const photoDetails =  await ProductModel.findOne({ id: product.productId}).lean();
        return {...product, photos: photoDetails.photos};
      })
    );
      return newProductList;
  }

  async getOrderListByUserId(userId: string, sortObj: OrderSortQuery): Promise<OrderEntity[]> {
    const { sortField, sortType} = sortObj;
    const orderList = await OrderModel.find({ userId });
    if(sortType === 'ascending'){
      return orderList.sort((a,b) => a[sortField] - b[sortField]);
    }else{
      return orderList.sort((a,b) => b[sortField] - a[sortField]);
    }
    
    if (orderList.length > 0) {
      return orderList;
    }
    return null;
  }

  async getOrderById(orderId: string): Promise<OrderEntity>{
    return await OrderModel.findOne({ orderId }).lean();
  }
  
  async getOrderStatistics(): Promise<OrderStatEntity>{
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
        return orderStat[0] as OrderStatEntity;
      }
    }catch(err){
      console.log(err)
      return null
    }
  }

  async getIncompleteStatistics(): Promise<OrderIncompleteStatEntity>{

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
        return orderStat[0] as OrderIncompleteStatEntity;
      }
    } catch (error) {
        console.log(error)
        return null
    }
  }

  async changeStatus(body: ChangeStatusEntity):Promise<OrderEntity>{
    try {
      const {orderId, statusType, statusValue} = body
      let update = {}
      if(statusType === StatusTypeDto.orderStatusEnums){
        update = {orderStatus: statusValue}
      }else if(statusType === StatusTypeDto.paymentStatusEnums){
        update = {paymentStatus: statusValue}
      }else if(statusType === StatusTypeDto.shippingStatusEnums){
        update = {shippingStatus: statusValue}
      }

      return await OrderModel.findOneAndUpdate({orderId},{$set: update},{new: true}).lean()
       
    } catch (error) {
      console.log(error)
      return null
    }
    
    
  }

  async getOrderList(query?: GetAllOrderQueryEntity, skip?: number, limit?: number): Promise<OrderEntity[]>{
    let { shippingStatus, orderStatus, paymentStatus, startDate, endDate} = query;

    let queryParams = {
      ...(shippingStatus && { shippingStatus }),
      ...(orderStatus && { orderStatus }),
      ...(paymentStatus && { paymentStatus }),
    }
    
    if(startDate || endDate) {
        queryParams['orderedDate'] = {
            ...(startDate && {$gte: new Date(startDate)}),
            ...(endDate && {$lte: new Date(endDate)})
        }
    }
      return await OrderModel.find(queryParams).skip(skip).limit(limit).lean();
  }

}


