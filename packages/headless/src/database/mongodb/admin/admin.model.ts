import { model, Schema } from 'mongoose';
import { randomUUID } from 'crypto';
import { Admin } from 'src/entity/admin';

const AdminSchema = new Schema<Admin>(
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
        enum: ['store', 'outlet'],
        default: 'store',
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

AdminSchema.index({ role: 1 });
const AdminModel = model<Admin>('Admin', AdminSchema);
export { AdminModel };
