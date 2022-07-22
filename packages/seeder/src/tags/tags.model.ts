import { model, Schema } from 'mongoose';
import { Tags } from 'models';

const TagsSchema = new Schema<Tags>({
  id: {
    type: String,
    unique: true,
  },
  name: String,
}, {
  timestamps: true,
  versionKey: false
});

const TagsModel = model<Tags>('tags', TagsSchema);
export { TagsModel };
