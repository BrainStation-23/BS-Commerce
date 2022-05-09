import { model, Schema } from 'mongoose';
import { Compare } from 'src/entity/compare';

const CompareSchema = new Schema<Compare>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
      unique: true,
    },

    items: [
      {
        type: Schema.Types.ObjectId,
        ref: 'product',
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
