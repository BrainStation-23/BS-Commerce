import { CreateOrderRequest, CreateProductOrderDetails } from '@bs-commerce/models';
import { GetAllOrderQueryEntity, OrderEntity, OrderIncompleteStatEntity, OrderStatEntity, ChangeStatusEntity, OrderSortQuery, ProductOrder, CartItem, CartResponse, Cart } from '../../../entity/order';
import { IOrderDatabase } from './order.db.interface';
export declare class OrderRepository {
    private db;
    constructor(db: IOrderDatabase);
    createOrder(userId: string, body: CreateOrderRequest): Promise<OrderEntity>;
    getAvailableProducts(productIds: string[]): Promise<any>;
    getCart(userId: string): Promise<Cart | null>;
    populateItemsInCart(userId: string, items: CartItem[]): Promise<CartResponse | null>;
    clearCart(userId: string): Promise<CartResponse | null>;
    addPhotoDetails(products: CreateProductOrderDetails[]): Promise<ProductOrder[]>;
    addCosts(newOrder: any): OrderEntity;
    generateUniqueId(): any;
    getOrderListByUserId(userId: string, sortObj: OrderSortQuery): Promise<OrderEntity[]>;
    findOrder(query: Record<string, any>): Promise<OrderEntity>;
    getOrderStatistics(): Promise<OrderStatEntity>;
    getIncompleteStatistics(): Promise<OrderIncompleteStatEntity>;
    changeStatus(body: ChangeStatusEntity): Promise<OrderEntity>;
    getOrderList(query?: GetAllOrderQueryEntity, skip?: number, limit?: number): Promise<OrderEntity[]>;
}
