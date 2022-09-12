import { model, Schema } from 'mongoose';
import { randomUUID } from 'crypto';
import { Plugin } from 'src/entity/plugin';

const PluginSchema = new Schema<Plugin>({
  id: {
    type: String,
    unique: true,
    default: () => randomUUID()
  },
  name: {
    type: String,
    unique: true,
    required: true
  },
  path: {
    type: String,
    unique: true,
    required: true
  },
  extensibleFor: {
    type: String,
    required: true
  },
  version: {
    type: String
  },
  description: {
    type: String
  },
  author: {
    type: String
  },
  isLoadable: { 
    type: Boolean, 
    default: true 
  }
}, {
  timestamps: true,
  versionKey: false
});

const PluginModel = model<Plugin>('plugins', PluginSchema);
export { PluginModel };
