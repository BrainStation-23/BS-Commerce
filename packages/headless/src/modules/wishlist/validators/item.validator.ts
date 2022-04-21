import * as Joi from 'joi';
import { Item } from 'src/entity/wishList';

export const ItemSchema = Joi.object<Item, true>({
  product: Joi.string().required(),
  quantity: Joi.number().required(),
});
