import { model, Schema } from 'mongoose';
import { Manufacturer } from 'src/entity/manufacturer';

const ManufacturerSchema = new Schema<Manufacturer>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    picture: {
        type: String
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    displayOrder: {
        type: Number
    },
    seo: {
        metaKeyword: {
            type: String,
            default: ''
        },
        metaDescription: {
            type: String,
            default: ''
        },
        metaTitle: {
            type: String,
            default: ''
        },
        SEFN: {
            type: String,
            default: ''
        }
    }
});

const ManufacturerModel = model<Manufacturer>('manufacturer', ManufacturerSchema);

export { ManufacturerModel };