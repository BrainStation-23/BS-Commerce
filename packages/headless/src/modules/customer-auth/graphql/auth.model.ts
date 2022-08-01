import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsOptional, MinLength } from 'class-validator';
import {
  Customer,
  CreateCustomerRequest,
  CustomerSignInRequest,
  GetCustomerQuery,
} from 'models';

@ObjectType()
export class AuthCustomer implements Customer {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;
}

@InputType()
export class CreateCustomerInput implements CreateCustomerRequest {
  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field()
  otp: string;

  @Field()
  @MinLength(6, {
    message: 'Password is too short. Minimal length is $constraint1 characters',
  })
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
  @MinLength(6, {
    message: 'Password is too short. Minimal length is $constraint1 characters',
  })
  password: string;
}

@ObjectType()
export class CustomerSignUpResponseMessage {
  @Field()
  message: string
}

@ObjectType()
export class RegistrationAuthResponse {
  @Field({ nullable: true })
  error?: string;

  @Field(type => Int)
  code: number

  @Field(type => CustomerSignUpResponseMessage, { nullable: true })
  data?: CustomerSignUpResponseMessage
}

@ObjectType()
export class CustomerSignInResponseToken {
  @Field()
  token: string
}

@ObjectType()
export class SignInAuthResponse {
  @Field({ nullable: true })
  error?: string;

  @Field(type => Int)
  code: number

  @Field(type => CustomerSignInResponseToken, { nullable: true })
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
  @Field({ nullable: true })
  error?: string;

  @Field(type => Int)
  code: number

  @Field(type => AuthCustomer, { nullable: true })
  data?: AuthCustomer
}