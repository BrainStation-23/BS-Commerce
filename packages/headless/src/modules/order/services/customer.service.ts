import { ProductRepository } from './../../product/repositories/index';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateOrderRequest, CreateProductOrderDetails, ErrorMessageReOrder} from 'models';

import { CartResponse, OrderSortQuery, ReOrderQuery } from './../../../entity/order';
import { OrderEntity, OrderListResponseEntity } from 'src/entity/order';
import { errorResponse, successResponse } from 'src/utils/response';
import { IServiceResponse } from 'src/utils/response/service.response.interface';
import { OrderRepository } from '../repositories';
import { CartRepository } from './../../cart/repositories/index';

@Injectable()
export class OrderCustomerService {
  constructor( private orderRepository: OrderRepository ) {}

  async createOrder(
    userId: string,
    body: CreateOrderRequest,
    products: CreateProductOrderDetails[]
  ): Promise<IServiceResponse<OrderEntity>> {
    const productListWithPhoto = await this.orderRepository.addPhotoDetails(products);
    const newOrder = {...body, products: productListWithPhoto};
    const newBody = this.orderRepository.addCosts(newOrder);

    const createOrder = await this.orderRepository.createOrder(userId, newBody);
    if (createOrder) {
      return successResponse(OrderEntity, createOrder);
    }
    return errorResponse(
      'Error in order creation.',
      null,
      HttpStatus.BAD_REQUEST,
    );
  }

  async reOrder(userId: string, body: ReOrderQuery): Promise<IServiceResponse<CartResponse>>{
    let { ignoreInvalidItems, overWriteCart, orderId } = body; 

    const prevOrder = await this.orderRepository.findOrder({orderId, userId});
    if(!prevOrder) return errorResponse( ErrorMessageReOrder.INVALID_ID,null,HttpStatus.BAD_REQUEST );

    const prevProducts = prevOrder.products;
    const productIds = prevProducts.map( item => item.productId);
    let order = prevProducts.map(product => { return {productId: product.productId, quantity: product.quantity}});

    const availableProductIds = await this.orderRepository.getAvailableProducts(productIds);

    if(availableProductIds.length === 0)return errorResponse( ErrorMessageReOrder.ALL_ITEMS_INVALID,{products: prevProducts.map(item => item.name)},HttpStatus.BAD_REQUEST );//send which products are not available
    else {
          const unavailableProducts = prevProducts.filter(product => !availableProductIds.find(item => item.id === product.productId) && product.name);
       
          if(ignoreInvalidItems === false) return errorResponse( ErrorMessageReOrder.INVALID_ITEMS, {products: unavailableProducts.map(item => item.name)}, HttpStatus.BAD_REQUEST );
          
          order = order.filter(product => availableProductIds.find(item => item.id === product.productId));    
        }

        const cart = await this.orderRepository.getCart(userId);
        if (cart.items.length !== 0){
            if(overWriteCart === true){
                const deleteCart = await this.orderRepository.clearCart(userId);
                if(!deleteCart) return errorResponse( ErrorMessageReOrder.CANNOT_CLEAR_CART, null, HttpStatus.BAD_REQUEST );

            }else return errorResponse( ErrorMessageReOrder.OVERWRITE_CART, null, HttpStatus.BAD_REQUEST );
        }
        const addCart = await this.orderRepository.populateItemsInCart(userId, order); 
        
        if(addCart) return successResponse(CartResponse, addCart);
        else return errorResponse( ErrorMessageReOrder.CANNOT_ADD_ITEMS, null, HttpStatus.BAD_REQUEST );  
  }
   

  async getOrderListByUserId(
    userId: string,
    sortObj: OrderSortQuery
  ): Promise<IServiceResponse<OrderListResponseEntity>> {
    const orderList = await this.orderRepository.getOrderListByUserId(userId,sortObj);

    if (orderList) {
      const orderInfo = orderList.map((e) => {
        delete e.userId;
        return e;
      });
      const response: OrderListResponseEntity = {
        userId,
        orderInfo,
      };
      return successResponse(OrderListResponseEntity, response);
    }
    return errorResponse('No order found', null, HttpStatus.BAD_REQUEST);
  }

  async getOrderByOrderId( orderId: string ): Promise<IServiceResponse<OrderEntity>> {
    const orderInfo = await this.orderRepository.findOrder({orderId});

    if (orderInfo) {
      const response: OrderEntity = orderInfo ;
      return successResponse(OrderEntity, response);
    }
   return errorResponse('No order found', null, HttpStatus.BAD_REQUEST);
  }
}
