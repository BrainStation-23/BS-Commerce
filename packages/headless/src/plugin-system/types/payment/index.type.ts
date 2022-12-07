export type IPNStatus = 'success' | 'failed';

export abstract class PaymentMethod<PaymentInfo> {
    abstract initiatePayment(orderId: string, customerId: string, amount: number, currency: 'BD'): Promise<{ gatewayPageUrl: string; paymentInfo: PaymentInfo }>;
    abstract ipnHandler(orderId: string, customerId: string, paymentInfo: PaymentInfo): Promise<IPNStatus>;
}