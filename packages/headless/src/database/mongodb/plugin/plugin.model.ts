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
  extensibleFor: {
    type: String,
    required: true
  },
  isLoadable: {
    type: Boolean,
    default: true
  },
  displayData: {
    type: Object,
    default: null
  },
  loadable: Boolean,
  //type: String,
  version: String,
  description: String,
  author: String,
  path: String,
  env: Object,
}, {
  timestamps: true,
  versionKey: false
});

const PluginModel = model<Plugin>('plugins', PluginSchema);
export { PluginModel };
