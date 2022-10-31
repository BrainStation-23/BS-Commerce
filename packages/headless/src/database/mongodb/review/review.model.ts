import { model, Schema } from 'mongoose';
import { Review } from 'src/entity/review';
import { randomUUID } from 'crypto';

const ReviewSchema = new Schema<Review>(
  {
    id: {
      type: String,
      default: () => randomUUID(),
      unique: true
    },
    productId: {
      type: String,
      index: true
    },
    orderId: {
      type: String,
      required: true,
    },
    text: String,
    image: [
      {
        url: String,
        _id: false
      }
    ],
    reply:{
        id: String,
        text: String,
        image: {
          type: [String],
          default: undefined,
        },
        createdAt: Date
    },
    userId: {
      type: String,
      required: false,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    }
  },
  {
    timestamps: true,
  },
);

const ReviewModel = model<Review>('review', ReviewSchema);

export { ReviewModel };
