export type IPNStatus = 'success' | 'failed';

export abstract class PaymentMethod<PaymentInfo> {
    abstract initiatePayment(orderId: string, customerInfo: Record<string, any>, amount: number, currency: 'BDT'): Promise<{ gatewayPageUrl: string; paymentInfo: PaymentInfo }>;
    abstract ipnHandler(orderId: string, customerId: string, paymentInfo: PaymentInfo): Promise<IPNStatus>;
}