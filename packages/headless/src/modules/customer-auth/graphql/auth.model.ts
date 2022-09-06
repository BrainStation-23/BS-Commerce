import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsOptional, MinLength } from 'class-validator';
import {
  Customer,
  CreateCustomerRequest,
  CustomerSignInRequest,
  GetCustomerQuery,
  SendOtpRequest,
  VerifyOtpRequest,
  CustomerForgotPasswordRequest,
} from 'bs-commerce-models';

@ObjectType()
export class AuthCustomer implements Customer {
  @Field({ nullable: true })
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;
}

@InputType()
export class SendOtpInput implements SendOtpRequest {
  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;
}

@InputType()
export class VerifyOtpInput implements VerifyOtpRequest {
  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field(() => Int)
  otp: number;
}

@InputType()
export class CreateCustomerInput implements CreateCustomerRequest {
  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field(() => Int)
  otp: number;

  @Field()
  name: string;

  @Field()
  @MinLength(6, { message: 'Password is too short. Minimal length is $constraint1 characters', })
  password: string;
}

@InputType()
export class CustomerSignInDataInput implements CustomerSignInRequest {
  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field()
  @MinLength(6, { message: 'Password is too short. Minimal length is $constraint1 characters', })
  password: string;
}

@InputType()
export class CustomerForgotPasswordDataInput implements CustomerForgotPasswordRequest {
  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field()
  @MinLength(6, { message: 'Password is too short. Minimal length is $constraint1 characters', })
  password: string;
}

@ObjectType()
export class CustomerAuthResponseMessage {
  @Field()
  message: string
}

@ObjectType()
export class RegistrationAuthResponse {
  @Field(() => Int)
  code: number

  @Field(() => CustomerAuthResponseMessage, { nullable: true })
  data?: CustomerAuthResponseMessage
}

@ObjectType()
export class ForgotPasswordResponse {
  @Field(() => Int)
  code: number

  @Field(() => CustomerAuthResponseMessage, { nullable: true })
  data?: CustomerAuthResponseMessage
}

@ObjectType()
export class SendOtpAuthResponse {
  @Field(() => Int)
  code: number

  @Field(() => CustomerAuthResponseMessage, { nullable: true })
  data?: CustomerAuthResponseMessage
}

@ObjectType()
export class VerifyOtpAuthResponse {
  @Field(() => Int)
  code: number

  @Field(() => CustomerAuthResponseMessage, { nullable: true })
  data?: CustomerAuthResponseMessage
}

@ObjectType()
export class CustomerSignInResponseToken {
  @Field()
  token: string
}

@ObjectType()
export class SignInAuthResponse {
  @Field(() => Int)
  code: number

  @Field(() => CustomerSignInResponseToken, { nullable: true })
  data?: CustomerSignInResponseToken
}

@InputType()
export class GetAuthCustomerQuery implements GetCustomerQuery {
  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;
}

@ObjectType()
export class GetCustomerAuthResponse {
  @Field(() => Int)
  code: number

  @Field(() => AuthCustomer, { nullable: true })
  data?: AuthCustomer
}