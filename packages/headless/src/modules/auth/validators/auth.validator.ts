import * as Joi from 'joi';
import { SignInData } from 'src/entity/auth';
import { User } from 'src/entity/user';

export const UserSchema = Joi.object<User, false>({
  firstName: Joi.string().required().messages({
    'string.base': 'First Name should be type of String',
    'any.required': 'First Name is Required'
  }),
  lastName: Joi.string().required().messages({
    'string.base': 'Last Name should be type of String',
    'any.required': 'Last Name is Required'
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "in", "co"], }, }).required()
    .messages({
      "string.base": `Email should be a type of String`,
      "string.empty": `Email cannot be an empty field`,
      "string.email": `Please enter Correct Email ["com", "net", "in", "co"]`,
      'any.required': 'Email is Required'
    }),
  password: Joi.string().min(6).required().messages({
    'string.base': 'Password should be type of String',
    'string.min': 'Password must be minimum 6 Characters',
    'any.required': 'Password is Required'
  }),
});

export const SigninSchema = Joi.object<SignInData, false>({
  username: Joi.string().required()
    .messages({
      'string.base': 'Invalid Credentials',
      'any.required': 'Username is Required'
    }),
  password: Joi.string().required().messages({
    'string.base': 'Invalid Credentials',
    'any.required': 'Password is Required'
  }),
});