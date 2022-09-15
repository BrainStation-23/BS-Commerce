import { model, Schema } from 'mongoose';
import { Tag } from 'src/entity/tags';

const TagsSchema = new Schema<Tag>(
  {
    id: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      unique: true,
    },
    isHomePageProductsTag: {
      type: Boolean,
      default: false,
      select: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const TagsModel = model<Tag>('tags', TagsSchema);
export { TagsModel };
