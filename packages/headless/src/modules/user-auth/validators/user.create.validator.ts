import * as Joi from 'joi';
import { UserEntity } from 'src/entity/user';

export const UserCreateSchema = Joi.object<UserEntity, true>({
  _id: Joi.string(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  phone: Joi.string(),
  password: Joi.string(),
});
