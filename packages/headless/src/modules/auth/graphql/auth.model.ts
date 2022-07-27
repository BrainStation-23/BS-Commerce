import { Directive, Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import {
  CreateUserRequest,
  SignInRequest,
  Token,
} from 'models';

@InputType()
@ObjectType()
export class AdminSignUpInput implements CreateUserRequest {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  @Directive('@email')
  email: string;

  @Field()
  password: string;
}

@InputType()
export class AdminSignInInput implements SignInRequest {
  @Field()
  username: string;

  @Field()
  password: string;
}

@ObjectType()
export class AdminSignInResponseToken implements Token {
  @Field()
  @Directive('@email')
  token: string;
}

@ObjectType()
export class AdminSignUpResponseMessage {
  @Field()
  message: string;
}

@ObjectType()
export class AdminSignUpResponse {
  @Field({ nullable: true })
  error?: string;

  @Field(type => Int)
  code: number

  @Field({ nullable: true })
  data?: AdminSignUpResponseMessage
}

@ObjectType()
export class AdminSignInResponse {
  @Field({ nullable: true })
  error?: string;

  @Field(type => Int)
  code: number

  @Field({ nullable: true })
  data?: AdminSignInResponseToken
}