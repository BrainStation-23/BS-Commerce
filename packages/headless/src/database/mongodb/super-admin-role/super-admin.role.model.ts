import { Role } from 'src/entity/role';
import { Schema, model } from 'mongoose';
import { randomUUID } from 'crypto';
import { RoleTypeEnum } from 'models';

const SuperAdminRoleSchema = new Schema<Role>(
  {
    id: {
      type: String,
      default: () => randomUUID(),
      unique: true,
    },
    name: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    roleType: {
      type: String,
      index: true,
      default: RoleTypeEnum.SUPER_ADMIN,
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

const SuperAdminRoleModel = model<Role>(
  'super-admin-role',
  SuperAdminRoleSchema,
);
export { SuperAdminRoleModel };
