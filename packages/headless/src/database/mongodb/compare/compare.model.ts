import { randomUUID } from 'crypto';
import { model, Schema } from 'mongoose';
import { Compare } from '../../../entity/compare';

const CompareItems = new Schema(
  {
    productId: {
      type: String,
    },
  },
  {
    _id: false,
    timestamps: false,
    versionKey: false,
  },
);

const CompareSchema = new Schema<Compare>(
  {
    id: {
      type: String,
      default: () => randomUUID(),
      unique: true,
    },
    userId: {
      type: String,
      required: true,
      unique: true,
    },

    items: [CompareItems],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const CompareModel = model<Compare>('compare', CompareSchema);
export { CompareModel };
