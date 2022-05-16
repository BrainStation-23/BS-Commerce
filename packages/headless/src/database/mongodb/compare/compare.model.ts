import { randomUUID } from 'crypto';
import { model, Schema } from 'mongoose';
import { Compare } from 'src/entity/compare';

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

    items: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const CompareModel = model<Compare>('compare', CompareSchema);
export { CompareModel };
