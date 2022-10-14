import { model, Schema } from 'mongoose';
import { randomUUID } from 'crypto';
import { Branch, BranchAddress } from 'src/entity/branch';

export const BranchAddressSchema = new Schema<BranchAddress>(
    {
        id: {
            type: String,
            default: () => randomUUID(),
            index: true,
        },
        addressLine1: String,
        addressLine2: String,
        postCode: String,
        city: String,
        country: String,
    },
    {
        _id: false,
        timestamps: false,
        versionKey: false,
    },
);

const BranchSchema = new Schema<Branch>(
    {
        id: {
            type: String,
            unique: true,
            default: () => randomUUID(),
        },
        // storeId
        store: {
            type: String,
            index: true
        },
        url: {
            type: String,
            unique: true
        },
        address: BranchAddressSchema,
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

const BranchModel = model<Branch>('Branch', BranchSchema);
export { BranchModel };
