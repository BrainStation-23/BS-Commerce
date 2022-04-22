import * as Joi from 'joi';
import { UserEntity } from 'src/entity/user';

export const UserCreateSchema = Joi.object<UserEntity, true>({
  id: Joi.string(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  displayName: Joi.string(),
  username: Joi.string(),
  email: Joi.string(),
  phone: Joi.string()
    .regex(/^(?:\+88|88)?(01[3-9]\d{8})$/)
    .required()
    .messages({
      'string.pattern.base': 'Phone number must be valid.',
    }),
  password: Joi.string().min(8).required(),
  provider: Joi.string(),
  providerData: Joi.object(),
  additionalProviderData: Joi.object(),
});

export const LoginSchema = Joi.object({
  phone: Joi.string().required(),
  password: Joi.string().required(),
});
