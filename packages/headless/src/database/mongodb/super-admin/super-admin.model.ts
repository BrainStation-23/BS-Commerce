import { SuperAdmin } from 'src/entity/super-admin';
import { Schema, model } from 'mongoose';
import { randomUUID } from 'crypto';

const SuperAdminSchema = new Schema<SuperAdmin>(
  {
    id: {
      type: String,
      default: () => randomUUID(),
      unique: true,
    },
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      index: true,
      unique: true,
    },
    countryCode: {
      type: String,
    },
    phone: {
      type: String,
      index: true,
      unique: true
    },
    password: {
      type: String,
    },
    isMfa: Boolean,
    mfaType: {
      type: [String],
    },
    accountType: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const SuperAdminModel = model<SuperAdmin>('super-admin', SuperAdminSchema)
export {SuperAdminModel}