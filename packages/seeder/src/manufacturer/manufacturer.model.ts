import { model, Schema } from 'mongoose';
import { Manufacturer } from 'models';

interface ManufacturerWithID extends Manufacturer {
    id: {
        type: String
    }
}

const ManufacturerSchema = new Schema<ManufacturerWithID>(
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

export default ManufacturerModel;