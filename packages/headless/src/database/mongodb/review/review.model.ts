import { model, Schema } from 'mongoose';
import { Review } from 'src/entity/review';

const ReviewSchema = new Schema<Review>(
  {
    id: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      ref: 'Product',
      required: true,
      index: true,
    },
    orderId: {
      type: String,
      ref: 'Order',
      required: true,
    },
    comments: [
      {
        id: String,
        commentedBy:{
            type: String,
            enum : ['customer','store_admin','admin','branch_manager']
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
      ref: 'Customer',
      required: false,
    },

  },
  {
    timestamps: true,
  },
);

const ReviewModel = model<Review>('review', ReviewSchema);

export { ReviewModel };
