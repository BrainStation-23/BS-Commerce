import { IPNStatus, PaymentMethod } from "src/plugin-system/types/payment/index.type";

type PaymentInfo = {
    initiator: 'BS_COMMERCE_NAGAD_PLUGIN';
    initiatedAt: Date;
    customerInfo: Record<string, any>;
    orderId: string;
    randomId: number;
    amount: number;
    currency: 'BDT'
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

    async initiatePayment(orderId: string, customerInfo: Record<string, any>, amount: number, currency: 'BDT'): Promise<{ gatewayPageUrl: string; paymentInfo: PaymentInfo }> {
        // call api to initiate payment.

        console.log('Nagad payment initiating');

        const paymentInfo: PaymentInfo = {
            initiator: 'BS_COMMERCE_NAGAD_PLUGIN',
            initiatedAt: new Date(),
            customerInfo,
            orderId,
            randomId: Math.random(),
            amount,
            currency
        };

        return ({
            gatewayPageUrl: `https://nagad.payment.init/${orderId}/${customerInfo}`,//change the customer info
            paymentInfo
        });
    }

    async ipnHandler(orderId: string, customerId: string, paymentInfo: PaymentInfo): Promise<IPNStatus> {
        // validate payment by calling gateway page
        console.log('Validating nagad payment info');
        return 'success';
    }
}

module.exports = BkashPayment;