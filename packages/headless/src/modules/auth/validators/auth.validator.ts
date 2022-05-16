import * as Joi from 'joi';
import { User } from 'src/entity/user';

export const UserSchema = Joi.object<User, true>({
  id: Joi.string(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  displayName: Joi.string(),
  username: Joi.string(),
  phone: Joi.string(),
  email: Joi.string().lowercase().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "in", "co"], }, }).required(),
  password: Joi.string().min(6).required(),
  provider: Joi.string(),
  providerData: Joi.object(),
  additionalProviderData: Joi.object(),
  resetPasswordToken: Joi.string(),
  resetPasswordExpires: Joi.number(),
  gender: Joi.string(),
  addresses: Joi.array(),
  status: Joi.string(),
  active: Joi.boolean()
});

export const SigninSchema = Joi.object({
  username: Joi.string().required().messages({
    'string.base': 'Invalid Credentials.',
    'any.required': 'Username is Required.'
  }),
  password: Joi.string().required().messages({
    'string.base': 'Invalid Credentials.',
    'any.required': 'Password is Required.'
  }),
});