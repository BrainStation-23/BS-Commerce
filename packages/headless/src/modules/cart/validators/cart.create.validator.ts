import * as Joi from 'joi';
import { Item } from 'src/entity/cart';

export const ItemCreateSchema = Joi.object<Item, true>({
  productId: Joi.string().required(),
  quantity: Joi.number().required(),
  product: Joi.object(),
});
