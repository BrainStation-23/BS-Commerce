import { model, Schema } from 'mongoose';
import { randomUUID } from 'crypto';
import { Store, StoreAddress } from 'src/entity/store';

const AddressSchema = new Schema<StoreAddress>(
  {
    id: {
      type: String,
      default: () => randomUUID(),
      unique: true,
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
      unique: true,
    },
    info: {
      shopName: {
        type: String,
        unique: true,
      },
      legalName: String,
      description: String,
    },
    image: {
      logo: String,
      cover: String,
    },
    address: AddressSchema,
    url: {
      type: String,
      unique: true,
    },
    // store adminId
    admin: String,
    isActive: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const StoreModel = model<Store>('Store', StoreSchema);
export { StoreModel };
