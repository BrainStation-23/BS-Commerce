import { model, Schema } from 'mongoose';
import { randomUUID } from 'crypto';
import { Tag } from 'src/entity/tags';

const TagsSchema = new Schema<Tag>({
  id: {
    type: String,
    unique: true,
    default: () => randomUUID()
  },
  name: String,
}, {
  timestamps: true,
  versionKey: false
});

const TagsModel = model<Tag>('tags', TagsSchema);
export { TagsModel };
