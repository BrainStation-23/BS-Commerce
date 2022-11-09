import { model, Schema } from 'mongoose';
import { randomUUID } from 'crypto';
import { StoreAdmin } from 'src/entity/store-admin';

const StoreAdminSchema = new Schema<StoreAdmin>(
  {
    id: {
      type: String,
      default: () => randomUUID(),
      unique: true,
    },
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    role: {
      name: {
        type: String,
        trim: true,
        required: true,
      },
      roleId: {
        type: String,
        trim: true,
        required: true,
      },
      roleType: {
        type: String,
        trim: true,
        required: true,
      },
    },
    storeId: {
      type: String,
      trim: true,
      index: true,
      required: true,
    },
    branchId: {
      type: [String],
      required: true,
    },
    email: {
      type: String,
      index: true,
      required: true,
    },
    phone: {
      type: String,
      index: true,
      default: '',
    },
    password: {
      type: String,
      index: true,
      required: true,
    },
    isMfaEnabled: {
      type: Boolean,
      default: false,
    },
    mfaType: {
      type: String,
      enum: ['EMAIL', 'PHONE'],
      default: 'EMAIL',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

StoreAdminSchema.index({ role: 1 });
const StoreAdminModel = model<StoreAdmin>('store-admin', StoreAdminSchema);
export { StoreAdminModel };
