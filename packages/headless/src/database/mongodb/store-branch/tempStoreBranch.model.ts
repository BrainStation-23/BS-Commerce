import { model, Schema } from 'mongoose';
import { randomUUID } from 'crypto';
import { StoreBranch } from 'src/entity/tmp-store-branch';
import { BranchAddressSchema } from '../branch/branch.model';

const TmpStoreBranchSchema = new Schema<StoreBranch>(
  {
    id: {
      type: String,
      unique: true,
      default: () => randomUUID(),
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
    status: {
      type: String,
      enum: ['PENDING', 'APPROVED', 'REJECTED'],
    },
    address: BranchAddressSchema,
    isActive: {
      type: Boolean,
      default: true,
    },
    image: {
      cover: String,
      logo: String,
    },
    inActiveReason: {
      type: String,
      enum: ['BLOCKED_BY_ADMIN', 'UNDER_MAINTENANCE', null],
      default: null,
    },
    description: {
      type: String,
    },
    name: {
      type: String,
      unique: true,
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
