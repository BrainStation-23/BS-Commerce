import { CartItem, Cart, ChangeStatusEntity, GetAllOrderQueryEntity, OrderEntity, OrderIncompleteStatEntity, OrderSortQuery, OrderStatEntity, ProductOrder, CartResponse } from '../../../entity/order';
import { IOrderDatabase } from '../../../modules/order/repositories/order.db.interface';
import { CreateOrderRequest, CreateProductOrderDetails } from '@bs-commerce/models';
export declare class OrderDatabase implements IOrderDatabase {
    populateItemsInCart(userId: string, products: CartItem[]): Promise<CartResponse | null>;
    getCart(userId: string): Promise<Cart | null>;
    createOrder(userId: string, body: CreateOrderRequest): Promise<OrderEntity>;
    getAvailableProducts(productIds: string[]): Promise<any>;
    clearCart(userId: string): Promise<CartResponse | null>;
    addPhotoDetails(products: CreateProductOrderDetails[]): Promise<ProductOrder[]>;
    getOrderListByUserId(userId: string, sortObj: OrderSortQuery): Promise<OrderEntity[]>;
    findOrder(query: Record<string, any>): Promise<OrderEntity>;
    getOrderStatistics(): Promise<OrderStatEntity>;
    getIncompleteStatistics(): Promise<OrderIncompleteStatEntity>;
    changeStatus(body: ChangeStatusEntity): Promise<OrderEntity>;
    getOrderList(query?: GetAllOrderQueryEntity, skip?: number, limit?: number): Promise<OrderEntity[]>;
}
