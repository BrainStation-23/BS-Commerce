export abstract class PaymentStrategy {
    abstract charge(): void;
}