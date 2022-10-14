import { model, Schema } from 'mongoose';
import { randomUUID } from 'crypto';
import { StoreBranch } from 'src/entity/store-branch';
import { BranchAddressSchema } from '../branch/branch.model';

const TmpStoreBranchSchema = new Schema<StoreBranch>(
  {
    id: {
      type: String,
      default: () => randomUUID(),
      unique: true,
    },
    // storeId
    store: {
      type: String,
      index: true,
    },
    url: {
      type: String,
      unique: true,
    },
    info: {
      shopName: {
        type: String,
        unique: true,
      },
      legalName: String,
    },
    image: String,
    address: BranchAddressSchema,
    status: String,
    description: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const TmpStoreBranchModel = model<StoreBranch>(
  'TmpStoreBranch',
  TmpStoreBranchSchema,
);
export { TmpStoreBranchModel };
