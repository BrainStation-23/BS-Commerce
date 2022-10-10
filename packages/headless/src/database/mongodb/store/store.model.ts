import { model, Schema } from 'mongoose';
import { randomUUID } from 'crypto';
import { Store, StoreAddress } from 'src/entity/store';

const AddressSchema = new Schema<StoreAddress>(
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

const StoreSchema = new Schema<Store>(
  {
    id: {
      type: String,
      default: () => randomUUID(),
      index: true,
      unique: true,
    },
    info: {
      shopName: {
        type: String,
        unique: true,
        index: true,
      },
      legalName: {
        type: String,
        unique: true,
      },
      description: String,
    },
    image: {
      logo: String,
      cover: String,
    },
    address: AddressSchema,
    // store adminId
    admin: String,
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const StoreModel = model<Store>('Store', StoreSchema);
export { StoreModel };
