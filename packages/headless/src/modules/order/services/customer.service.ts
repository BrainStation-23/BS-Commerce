import { ProductRepository } from './../../product/repositories/index';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateOrderRequest, CreateProductOrderDetails} from 'models';

import { CartResponse, OrderSortQuery, ReOrderQuery } from './../../../entity/order';
import { OrderEntity, OrderListResponseEntity } from 'src/entity/order';
import { errorResponse, successResponse } from 'src/utils/response';
import { IServiceResponse } from 'src/utils/response/service.response.interface';
import { OrderRepository } from '../repositories';
import { CartRepository } from './../../cart/repositories/index';

@Injectable()
export class OrderCustomerService {
  constructor(
      private cartRepository: CartRepository,
      private orderRepository: OrderRepository,
      private productRepo: ProductRepository
    ) {}

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

  async reOrder(userId: string, body: ReOrderQuery): Promise<any>{
    let { ignoreInvalidItems, overWriteCart, orderId } = body; 

    const order = await this.orderRepository.getOrderById(orderId);
    const products = order.products;
    
    const unavailableProducts = await this.orderRepository.getAvailableProducts(products);
    if(unavailableProducts.length === products.length)return errorResponse( 'Products are not available right now',null,HttpStatus.BAD_REQUEST );
    else {
        let availableAddToCart;
        const allAddToCart = products.map(product => { return {productId: product.productId, quantity: product.quantity}});

        if(unavailableProducts.length > 0){
            if(ignoreInvalidItems === false) return errorResponse( 'All of the products are not available. Do you wish to continue?', null, HttpStatus.BAD_REQUEST );
            
            const res = products.filter(product => !unavailableProducts.find(item => item.productId === product.productId ));
            availableAddToCart = res.map(product => { return { productId: product.productId, quantity: product.quantity }});
        }

        const cart = await this.orderRepository.getCart(userId);
        if (cart){
            if(overWriteCart === true){
                const deleteCart = await this.orderRepository.deleteCartItems(userId);
                if(!deleteCart) return errorResponse( 'Could not clear your cart', null, HttpStatus.BAD_REQUEST );

            }else return errorResponse( 'Your cart items will be replaced. Do you wish to continue?', null, HttpStatus.BAD_REQUEST );
        }
        const addCart = unavailableProducts.length > 0 ? await this.orderRepository.addToCart(userId, availableAddToCart) : await this.orderRepository.addToCart(userId, allAddToCart); 
        
        if(addCart) return successResponse(CartResponse, addCart);
        else return errorResponse( 'Could not add items to the cart', null, HttpStatus.BAD_REQUEST );  
    }
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
    const orderInfo = await this.orderRepository.getOrderById(orderId);

    if (orderInfo) {
      const response: OrderEntity = orderInfo ;
      return successResponse(OrderEntity, response);
    }
   return errorResponse('No order found', null, HttpStatus.BAD_REQUEST);
  }
}
