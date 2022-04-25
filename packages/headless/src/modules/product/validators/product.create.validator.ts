import * as Joi from 'joi';
import { Product } from 'src/entity/product';

export const ProductCreateSchema = Joi.object<Product, true>({
  id: Joi.string(),
  name: Joi.string(),
  description: Joi.string(),
  price: Joi.number(),
});
