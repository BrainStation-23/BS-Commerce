import { randomUUID } from 'crypto';
import { IPNStatus, PaymentMethod } from "src/plugin-system/types/payment/index.type";
import * as FormData from 'form-data';
import fetch from 'node-fetch';

type PaymentInfo = {
    initiator: 'BS_COMMERCE_SSLCOMMERZ_PLUGIN';
    initiatedAt: Date;
    customerInfo: Record<string, any>
    orderId: string;
    //randomId: number;
    amount: number;
    currency: 'BDT'
};
class SSLEcommerzPayment extends PaymentMethod<PaymentInfo>{
    constructor(
        private readonly config: {
            store_id: string,
            store_passwd: string,
            is_live: boolean,
            success_url: string,
            fail_url: string,
            cancel_url: string,
            ipn_url: string,
        }
    ) {
        super();
        // if (this.config.is_direct_charge === undefined) {
        //     this.config.is_direct_charge = true;
        // }
        //console.log(this.config);
    }
    async initiatePayment(orderId: string, customerInfo: Record<string, any>, amount: number, currency: 'BDT'):Promise<{ gatewayPageUrl: string; paymentInfo: PaymentInfo }>{
        const tran_id = randomUUID();
        const post_body = {
            ...this.config,
            ...customerInfo,
            tran_id,
            total_amount: amount,
            currency
        }
        const fdata = new FormData();
        for (const a in post_body) {
            fdata.append(a, post_body[a] ? post_body[a] : '');
        }

        const result = await fetch('https://sandbox.sslcommerz.com/gwprocess/v4/api.php', {
          method: 'POST',
          body: fdata,
        });

        const paymentInfo: PaymentInfo = {
            initiator: 'BS_COMMERCE_SSLCOMMERZ_PLUGIN',
            initiatedAt: new Date(),
            customerInfo,
            orderId,
            //randomId: Math.random(),
            amount,
            currency
        };
        // if(!result) return {};
        const resJson = await result.json();
        return ({
            gatewayPageUrl: resJson.GatewayPageURL,
            paymentInfo
        });
        //return resJson.GatewayPageURL;  // //    return a.subscribe(val => val.data)
    }

    async ipnHandler(orderId: string, customerId: string, paymentInfo: PaymentInfo): Promise<IPNStatus> {
        // validate payment by calling gateway page
        console.log('Validating ssl payment info');
        return 'success';
    }
}

module.exports = SSLEcommerzPayment;