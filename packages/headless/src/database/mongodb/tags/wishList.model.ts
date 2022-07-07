import { model, Schema } from 'mongoose';
import { randomUUID } from 'crypto';
import { Tags } from 'src/entity/tags';

const TagsSchema = new Schema<Tags>({
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

const TagsModel = model<Tags>('tags', TagsSchema);
export { TagsModel };
