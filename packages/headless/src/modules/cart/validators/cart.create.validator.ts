import * as Joi from 'joi';
import { Item } from 'src/entity/cart';

export const ItemCreateSchema = Joi.object<Item, true>({
  product: Joi.string().required(),
  quantity: Joi.number().required(),
});
