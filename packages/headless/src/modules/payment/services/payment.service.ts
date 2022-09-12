import { Injectable } from '@nestjs/common';
import pluginManager from 'src/includes/plugins/payment/manager';
import { PluggableEntities } from 'src/plugin-system/pluggable';
import { PluginModel } from 'src/database/mongodb/plugin/plugin.model';
import { PaymentContext } from 'src/plugins/payment/payment-context';

@Injectable()
export class PaymentService {
    async createPayment(data: any): Promise<any> {
        // check whether orderId exists in the database

        // check whether orderId of the user and requested user same

        // check whether order status is not cancelled
        const paymentOptions = pluginManager.getPluginList();
        const context = paymentOptions.find(paymentOption => paymentOption.name === data.paymentMethod);

        console.log(context.charge())

        const paymentContext = new PaymentContext(context);
        paymentContext.executePayment();

        return 'Demo plugin is working perfectly.';
    }

    async getPaymentMethods() {
        return await PluginModel.find({ extensibleFor: PluggableEntities.PAYMENT });
    }
}
