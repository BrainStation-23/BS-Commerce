import { OrderHookPluginConfig } from "src/plugin-system/types/order_hook/config.type";

export const config: OrderHookPluginConfig = {
    name: 'my_order_hook',
    path: 'order_hook/my_order_hook',
    description: 'Test hook',
    author: 'Anjar',
    extensibleFor: 'ORDER_HOOK',
    env: {},
    version: '1.0.0'
}