import { model, Schema } from 'mongoose';
import { Tag } from '@bs-commerce/models';

const TagsSchema = new Schema<Tag>({
  id: {
    type: String,
    unique: true,
  },
  name: String,
  isHomePageProductsTag: {
    type: Boolean,
    default: false,
    select: false
  }
}, {
  timestamps: true,
  versionKey: false
});

const TagsModel = model<Tag>('tags', TagsSchema);
export { TagsModel };
export default TagsModel;