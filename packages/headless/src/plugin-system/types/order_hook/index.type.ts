export type OrderEvent = 'ORDER_PLACED' | 'ORDER_CANCELLED' | 'ORDER_COMPLETED';
export abstract class OrderHook {
    handler: (orderId: string, event: OrderEvent) => Promise<void>;
}