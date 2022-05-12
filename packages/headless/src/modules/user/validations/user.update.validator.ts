import * as Joi from 'joi';
import { Address, UpdatedUser } from 'src/entity/user';

export const AddressSchema = Joi.object<Address, true>({
  addressLine1: Joi.string().required(),
  addressLine2: Joi.string(),
  city: Joi.string().required(),
  country: Joi.string().required(),
  postCode: Joi.string().required(),
});

export const UserUpdateSchema = Joi.object<UpdatedUser, true>({
  firstName: Joi.string(),
  lastName: Joi.string(),
  provider: Joi.string(),
  providerData: Joi.object(),
  additionalProviderData: Joi.object(),
  phone: Joi.string().regex(/^(?:\+88|88)?(01[3-9]\d{8})$/).messages({
    "string.pattern.base": `Please Enter the Valid BD Phone number!`,
  }),
  addresses: Joi.array().items(AddressSchema),
  gender: Joi.string(),
  active: Joi.boolean(),
  status: Joi.string()
});

