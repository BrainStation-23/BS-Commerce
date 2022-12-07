import { IPNStatus, PaymentMethod } from "src/plugin-system/types/payment/index.type";

type PaymentInfo = {
    initiator: 'BS_COMMERCE_BKASH_PLUGIN';
    initiatedAt: Date;
    customerId: string;
    orderId: string;
    randomId: number;
    amount: number;
    currency: 'BD'
};

class BkashPayment extends PaymentMethod<PaymentInfo> {

    constructor(
        private readonly config: {
            access_id: string,
            access_password: string,
            merchant_url: string,
            is_direct_charge?: boolean
        }
    ) {
        super();
        if (this.config.is_direct_charge === undefined) {
            this.config.is_direct_charge = true;
        }
        console.log(this.config);
    }

    async initiatePayment(orderId: string, customerId: string, amount: number, currency: 'BD'): Promise<{ gatewayPageUrl: string; paymentInfo: PaymentInfo }> {
        // call api to initiate payment.

        console.log('Bkash payment initiating');

        const paymentInfo: PaymentInfo = {
            initiator: 'BS_COMMERCE_BKASH_PLUGIN',
            initiatedAt: new Date(),
            customerId,
            orderId,
            randomId: Math.random(),
            amount,
            currency
        };

        return ({
            gatewayPageUrl: `https://bkash.payment.init/${orderId}/${customerId}`,
            paymentInfo
        });
    }

    async ipnHandler(orderId: string, customerId: string, paymentInfo: PaymentInfo): Promise<IPNStatus> {
        // validate payment by calling gateway page
        console.log('Validating bkash payment info');
        return 'success';
    }
}

module.exports = BkashPayment;