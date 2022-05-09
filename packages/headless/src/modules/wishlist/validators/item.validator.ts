import * as Joi from 'joi';
import { Item } from 'src/entity/wishList';

export const ItemSchema = Joi.object<Item, true>({
  productId: Joi.string().required().messages({
    "string.base": `Product ID should be a type of String.`,
    'any.required': 'Product ID is Required.'
  }),
  quantity: Joi.number().required().messages({
    "number.base": `Quantity should be a type of Number.`,
    'any.required': 'Quantity is Required.'
  }),
  product: Joi.object()
});
