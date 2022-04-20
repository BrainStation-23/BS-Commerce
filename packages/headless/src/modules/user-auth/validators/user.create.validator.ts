import * as Joi from 'joi';
import { UserEntity } from 'src/entity/user';

export const UserCreateSchema = Joi.object<UserEntity, true>({
  _id: Joi.string(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  displayName: Joi.string(),
  username: Joi.string(),
  email: Joi.string(),
  phone: Joi.string().required(),
  password: Joi.string().required(),
  provider: Joi.string(),
  providerData: Joi.object(),
  additionalProviderData: Joi.object(),
});
