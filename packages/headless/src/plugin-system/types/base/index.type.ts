import { OrderHookPluginConfig } from '../order_hook/config.type';
import { PaymentPluginConfig } from '../payment/config.type';

export type PluginConfig = PaymentPluginConfig | OrderHookPluginConfig;