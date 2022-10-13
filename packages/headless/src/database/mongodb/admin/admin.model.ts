import { model, Schema } from 'mongoose';
import { randomUUID } from 'crypto';
import { StoreAdmin } from 'src/entity/admin';

const StoreAdminSchema = new Schema<StoreAdmin>(
  {
    id: {
      type: String,
      default: () => randomUUID(),
      unique: true,
    },
    info: {
      name: String,
      email: {
        type: String,
        unique: true,
      },
      phone: String,
    },
    password: String,
    role: {
      name: String,
      roleId: String,
      roleType: {
        type: String,
        enum: ['OWNER', 'BRANCH_MANAGER'],
      },
    },
    // branchId
    branch: {
      type: String,
      index: true,
    },
    isActive: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

StoreAdminSchema.index({ role: 1 });
const AdminModel = model<StoreAdmin>('StoreAdmin', StoreAdminSchema);
export { AdminModel };
