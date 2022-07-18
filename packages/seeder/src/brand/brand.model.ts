import Mongoose, { model, Schema } from 'mongoose';
import Crypto from 'crypto';

const BrandSchema = new Schema({
    id: {
        type: String,
        // default: Crypto.randomUUID(),
        unique: true
    },
    info: {
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            default: null
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
            default: 0
        },
        pageSizeOptions: [{ type: Number }]
    },
    meta: {
        keywords: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        SEFN: {
            type: String,
            default: ''
        }
    }
}, {
    timestamps: true,
    versionKey: false
});

const BrandModel = model('brand', BrandSchema);

export { BrandModel };