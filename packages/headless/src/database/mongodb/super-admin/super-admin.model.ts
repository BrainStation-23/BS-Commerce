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
      required: true
    },
    lastName: {
      type: String,
      trim: true,
      required: true
    },
    role: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      index: true,
      unique: true,
      required: true
    },
    countryCode: {
      type: String,
    },
    phone: {
      type: String,
      index: true,
      default: ''
    },
    password: {
      type: String,
      required: true
    },
    isMfaEnabled: {
      type: Boolean,
      default: false
    },
    mfaType: {
      type: String,
      enum: ['EMAIL', 'PHONE'],
      default: 'EMAIL'
    }
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const SuperAdminModel = model<SuperAdmin>('super-admin', SuperAdminSchema)
export {SuperAdminModel}