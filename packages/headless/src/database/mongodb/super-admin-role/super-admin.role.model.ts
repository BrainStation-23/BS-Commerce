import { Role } from 'src/entity/role';
import { Schema, model } from 'mongoose';
import { randomUUID } from 'crypto';

const SuperAdminRoleSchema = new Schema<Role>(
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
      unique: true,
      index: true,
      required: true,
    },
    roleType: {
      type: String,
      index: true,
      default: 'super-admin-type'
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

const SuperAdminRoleModel = model<Role>('super-admin-role', SuperAdminRoleSchema);
export { SuperAdminRoleModel };
