import { OrderHookPluginConfig } from "src/plugin-system/types/order_hook/config.type";

export const config: OrderHookPluginConfig = {
    name: 'order_hook_2',
    path: 'order_hook/order_hook_2',
    description: 'Test hook 2',
    author: 'Anjar',
    extensibleFor: 'ORDER_HOOK',
    env: {},
    version: '1.0.0'
}