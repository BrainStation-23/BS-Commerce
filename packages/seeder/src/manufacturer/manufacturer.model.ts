// import { Manufacturer } from 'models';
import { model, Schema } from 'mongoose';
import { Manufacturer } from '../../../headless/src/entity/manufacturer';

const ManufacturerSchema = new Schema<Manufacturer>(
    {
        id: {
            type: String,
            unique: true,
        },
        name: {
            type: String,
            unique: true,
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
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const ManufacturerModel = model<Manufacturer>('manufacturer', ManufacturerSchema);

export { ManufacturerModel };