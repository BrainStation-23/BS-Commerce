import { Role } from 'src/entity/role';
import { Schema, model } from 'mongoose';
import { randomUUID } from 'crypto';
import { RoleTypeEnum } from 'models';

const StoreAdminRoleSchema = new Schema<Role>(
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
      default: RoleTypeEnum.STORE_ADMIN
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

const StoreAdminRoleModel = model<Role>('store-admin-role', StoreAdminRoleSchema);
export { StoreAdminRoleModel };
