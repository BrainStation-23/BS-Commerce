import { PaymentStrategy } from "./payment-strategy";

export class PaymentContext {
    constructor(private readonly paymentStrategy: PaymentStrategy) { }

    executePayment(): void {
        this.paymentStrategy.charge();
    }
}