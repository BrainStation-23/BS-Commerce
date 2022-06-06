import { randomUUID } from 'crypto';
import { model, Schema } from 'mongoose';
import { Compare } from 'src/entity/compare';
import { modelOptionsFactory } from '../common';

const CompareItems = new Schema(
  {
    productId: {
      type: String,
      unique: true,
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
      default: randomUUID(),
      unique: true,
    },
    userId: {
      type: String,
      required: true,
      unique: true,
    },

    items: [CompareItems],
  },
  modelOptionsFactory(),
);

const CompareModel = model<Compare>('compare', CompareSchema);
export { CompareModel };
