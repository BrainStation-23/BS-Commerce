import { model, Schema } from 'mongoose';
import { randomUUID } from 'crypto';
import { Product } from 'src/entity/product';

const ProductSchema = new Schema<Product>({
    id: {
        type: String,
        unique: true,
        default: () => randomUUID()
    },
    info: {
        name: {
            type: String,
            required: true
        },
        shortDescription: String,
        fullDescription: String,
        sku: {
            type: String,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            default: 0
        },
    },
    photos:[{
        id: {
            type: Schema.Types.ObjectId,
            ref: 'fs.files'
        },
        title: {
            type: String,
            default: ''
        },
        _id: false
    }],
});

const ProductModel = model<Product>('product', ProductSchema);

export { ProductModel };