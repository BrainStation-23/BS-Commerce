import { model, Schema } from 'mongoose';
import { Brand } from 'src/entity/brand';

const BrandSchema = new Schema<Brand>({
    id: {
        type: String
    },
    info:{
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            default: null
        },
        allowToSelectPageSize:{
            type: Boolean,
            default: false
        },
        published:{
            type: Boolean,
            default: false
        },
        displayOrder:{
            type: Number,
            default: 0
        },
        pageSizeOptions: [ {type: Number} ]
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
});

const BrandModel = model<Brand>('brand', BrandSchema);

export {BrandModel};