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
        oldPrice: {
            type: Number,
            default: 0
        },
        cost: {
            type: Number,
            default: 0
        },
        showOnHomePage: {
            type: Boolean,
            default: false
        },
        includeInTopMenu: {
            type: Boolean,
            default: false
        },
        allowToSelectPageSize: {
            type: Boolean,
            default: false
        },
        published: {
            type: Boolean,
            default: false
        },
        displayOrder: {
            type: Number,
            default: 1
        },
        isFeatured: {
            type: Boolean,
            default: false
        },
        publishDate: {
            type: Date,
            default: new Date()
        }
    },
    meta: {
        keywords: {
            type: [String],
            default: []
        },
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        friendlyPageName: {
            type: String,
            required: true,
            unique: true
        }
    },
    tags: [String],
    photos: [{
        id: String,
        title: {
            type: String,
            default: ''
        },
        alt: {
            type: String,
            default: ''
        },
        displayOrder: {
            type: Number,
            default: 1
        },
        _id: false
    }],
    brands: [String],
    categories: [{
        categoryId: {
            type: String,
            required: true
        },
        isFeatured: {
            type: Boolean,
            default: false
        },
        displayOrder: {
            type: Number,
            default: 0
        },
        _id: false
    }]
}, {
    timestamps: true,
    versionKey: false
});

ProductSchema.index({
    'info.name': 'text',
    'info.fullDescription': 'text'
}, { name: 'search' });

const ProductModel = model<Product>('product', ProductSchema);

export { ProductModel };