import { Role } from 'src/entity/role';
import { Schema, model } from 'mongoose';
import { randomUUID } from 'crypto';

const UserAdminRoleSchema = new Schema<Role>(
  {
    id: {
      type: String,
      default: () => randomUUID(),
      unique: true,
      indexe: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    roleType:{
      type: String,
      index: true,
      default: 'user-admin-type'
    },
    storeId:{
      type: String,
      default: '',
    },
    permissions: {
      type: [String],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const UserAdminRoleModel = model<Role>('user-admin-role', UserAdminRoleSchema);
export { UserAdminRoleModel };
