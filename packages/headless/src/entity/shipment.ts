import { Product } from "./product";
export class ProductShipment{
    productId: string;//product dependency
    name: string;
    quantityShipped?: number;
    sku?: string
}

export class Shipment {
    shipmentId?: string;
    orderId: string;//order dependency
    trackingNumber?: string;
    adminComment?: string;
    shippedDate?: Date;
    deliveredDate?: Date;
    products: ProductShipment[];
}