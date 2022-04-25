import { model, Schema } from 'mongoose';
import { Product } from 'src/entity/product';

const ProductSchema = new Schema<Product>({
  id: String,
  name: String,
  description: String,
  price: Number,
});

const ProductModel = model<Product>('product', ProductSchema);

export { ProductModel };
