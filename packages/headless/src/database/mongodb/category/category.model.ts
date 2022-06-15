import { randomUUID } from 'crypto';
import { model, Schema } from 'mongoose';
import { Category } from 'src/entity/category';

const CategorySchema = new Schema<Category>({
  id: {
    type: String,
    unique: true,
    default: () => randomUUID(),
  },
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
  imageId: {
    type: String,
    default: null,
  },
  showOnHomePage: {
    type: Boolean,
    default: false,
  },
  includeInTopMenu: {
    type: Boolean,
    default: false,
  },
  allowToSelectPageSize: {
    type: Boolean,
    default: true,
  },
  published: {
    type: Boolean,
    default: true,
  },
  displayOrder: {
    type: Number,
    default: 0,
  },
  rootPath:{
    type:String,
    default: '',
  },
  ancestors: [
    {
      name: {
        type: String,
        required: true,
      },
      slug: {
        type: String,
        required: true,
      },
      level:{
        type:Number,
        required:true,
        default:0,

      },
      _id:false
    },
  ],
  meta: {
    keywords: {
      type: [String],
      default: [],
    },
    description: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    SEFN: {
      type: String,
      default: '',
    },
  },
},
{
  versionKey: false,
},
);

const CategoryModel = model<Category>('Category', CategorySchema);
export { CategoryModel };