import { model, Schema } from 'mongoose';

import { ProductShipment, Shipment } from 'src/entity/shipment';

const ProductShipmentSchema = new Schema<ProductShipment>({
    productId: {
        type: String,
        // ref: 'Product',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    quantityShipped: {
        type: Number,
        default: 0
    },
    sku: {
        type: String,
        default: ''
    }
    
});

const ShipmentSchema = new Schema<Shipment>({
    shipmentId: {
        type: String,
        unique: true
    },
    //order required ID
    orderId: String,
    trackingNumber: {
        type: String,
        default: ''
    },
    adminComment: {
        type: String,
        default: ''
    },
    shippedDate: {
        type: Date,
        default: null
    },
    deliveredDate: {
        type: Date,
        default: null
    },
    products: {
        type: [ProductShipmentSchema],
        required: true
    }
});

const ShipmentModel = model<Shipment>('shipment', ShipmentSchema);

export { ShipmentModel };
