import { model, Schema } from 'mongoose';
import { randomUUID } from 'crypto';
import { ActionType, BranchHistory } from 'src/entity/branch-history';

const ActionSchema = new Schema<ActionType>({
  user: {
    id: String,
    email: String,
    type: {
      type: String,
      enum: ['ADMIN', 'MERCHANT'],
    },
  },
  status: {
    type: String,
    enum: ['PENDING', 'APPROVED', 'REJECTED'],
  },
  // can be used as reason purpose
  comment: String,
  updatedTime: Date,
});

const branchHistorySchema = new Schema<BranchHistory>(
  {
    id: {
      type: String,
      unique: true,
      default: () => randomUUID(),
    },
    branchName: String,
    actions: [ActionSchema],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const BranchHistoryModel = model<BranchHistory>(
  'BranchHistory',
  branchHistorySchema,
);
export { BranchHistoryModel };
