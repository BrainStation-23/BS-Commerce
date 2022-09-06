import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';
import {
  CreateUserRequest,
  SignInRequest,
  Token,
  SignInErrorMessages,
} from 'bs-commerce-models';

@InputType()
export class AdminSignUpInput implements CreateUserRequest {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(6, {
    message: 'Password is too short. Minimal length is $constraint1 characters',
  })
  password: string;
}

@InputType()
export class AdminSignInInput implements SignInRequest {
  @Field()
  username: string;

  @Field()
  @MinLength(6, {
    message: SignInErrorMessages.INVALID_CREDENTIALS,
  })
  password: string;
}

@ObjectType()
export class AdminSignInResponseToken implements Token {
  @Field()
  token: string;
}

@ObjectType()
export class AdminSignUpResponseMessage {
  @Field()
  message: string;
}

@ObjectType()
export class AdminSignUpResponse {
  @Field(type => Int)
  code: number

  @Field({ nullable: true })
  data?: AdminSignUpResponseMessage
}

@ObjectType()
export class AdminSignInResponse {
  @Field(type => Int)
  code: number

  @Field({ nullable: true })
  data?: AdminSignInResponseToken
}