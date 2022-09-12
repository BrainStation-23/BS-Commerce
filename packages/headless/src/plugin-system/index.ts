import { PaymentModule } from 'src/modules/payment/payment.rest.module';
import { pluginManager } from './plugin-manager';
import { DemoModule } from './plugins/demo/demo.module';

pluginManager.register({ module: DemoModule, isLoadable: false });
pluginManager.register({ module: PaymentModule, isLoadable: true });

export { pluginManager };
export const PluginModules = pluginManager.getPluginModuleList();

