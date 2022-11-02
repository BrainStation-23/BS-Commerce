import { Role } from 'src/entity/role';
import { Schema, model } from 'mongoose';
import { randomUUID } from 'crypto';
import { PERMISSIONS } from 'models';

const RoleSchema = new Schema<Role>(
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

const RoleModel = model<Role>('role', RoleSchema);
export { RoleModel };
