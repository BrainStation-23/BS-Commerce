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
    comments: [
      {
        id: {
          type: String,
          default: () => randomUUID(),
          unique: true
        },
        commentedBy:{
            type: String,
            enum : ['CUSTOMER','STORE_ADMIN','BRANCH_MANAGER']
        },
        image: [
          {
            url: String,
            _id: false,
          },
        ],
        text: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    userId: {
      type: String,
      required: false,
    },

  },
  {
    timestamps: true,
  },
);

const ReviewModel = model<Review>('review', ReviewSchema);

export { ReviewModel };
