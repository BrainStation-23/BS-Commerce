import { model, Schema } from 'mongoose';
import { Tag } from 'models';

const TagsSchema = new Schema<Tag>({
  id: {
    type: String,
    unique: true,
  },
  name: String,
}, {
  timestamps: true,
  versionKey: false
});

const TagsModel = model<Tag>('tags', TagsSchema);
export { TagsModel };
export default TagsModel;
