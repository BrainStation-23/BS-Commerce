import { Injectable } from '@nestjs/common';
import { pluginManager } from 'src/plugin-system/manager';
import { PaymentMethod } from 'src/plugin-system/types/payment/index.type';

@Injectable()
export class PaymentService {
    async createPayment(data: any): Promise<string> {
        // check whether orderId exists in the database

        // check whether orderId of the user and requested user same

        // check whether order status is not cancelled
        const paymentMethod = pluginManager.getPluginInstance('PAYMENT', data.paymentMethod) as PaymentMethod<object>;
        if (!paymentMethod) {
            return 'Payment method not found';
        }
        const initResult = await paymentMethod.initiatePayment('1', 'abc', 100, 'BD');
        console.log('Payment init response', JSON.stringify(initResult, null, 2));
        //save to db initResult.paymentInfo;
        return initResult.gatewayPageUrl;
    }

    async getPaymentMethods() {
        return pluginManager.getPaymentPluginList();
    }

    async handleIpn(pluginName: string, orderId: string, customerId: string) {
        const paymentMethod = pluginManager.getPluginInstance('PAYMENT', 'bkash') as PaymentMethod<object>;

        return await paymentMethod.ipnHandler(orderId, customerId, {});
    }
}
