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
        const customerInfo = {
            cus_name: "tahsin",
            cus_email: "safasadaf3@gmail.com",
            cus_phone: "01742593730",
            cus_add1: "Dhaka",
            cus_city: "Dhaka",
            cus_country: "bangladesh",
            shipping_method: "NO",
            product_name: "none",
            product_category: "none",
            product_profile: "general",
        }
        const initResult = await paymentMethod.initiatePayment('1', customerInfo, 100, 'BDT');
    
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
