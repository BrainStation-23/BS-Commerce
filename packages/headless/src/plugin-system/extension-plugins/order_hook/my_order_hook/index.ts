import { OrderEvent, OrderHook } from "src/plugin-system/types/order_hook/index.type";

module.exports = class MyOrderHook implements OrderHook {
    async handler(orderId: string, event: OrderEvent) {
        console.log(`Invoked my order hook with orderId: ${orderId}, event: ${event}`);
    }
}
