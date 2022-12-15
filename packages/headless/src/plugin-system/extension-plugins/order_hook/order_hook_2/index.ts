import { OrderEvent, OrderHook } from "src/plugin-system/types/order_hook/index.type";

module.exports = class OrderHook2 implements OrderHook {
    async handler(orderId: string, event: OrderEvent) {
        console.log(`Invoked order hook 2 with orderId: ${orderId}, event: ${event}`);
    }
}
