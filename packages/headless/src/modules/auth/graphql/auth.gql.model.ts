import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

interface IUserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@InputType()
export class UserInput implements IUserInput {
  @Field(() => String)
  firstName: string;
  @Field(() => String)
  lastName: string;
  @Field(() => String)
  email: string;
  @Field(() => String)
  password: string;
}

@InputType()
export class SignInInput {
  @Field(() => String)
  username: string;
  @Field(() => String)
  password: string;
}

@ObjectType()
export class User {
  @Field(() => String)
  id: string;
  @Field(() => String)
  firstName: string;
  @Field(() => String)
  lastName: string;
  @Field(() => String)
  displayName?: string;
  @Field(() => String)
  username?: string;
  @Field(() => String)
  email: string;
  @Field(() => String)
  provider?: string;
}

@ObjectType()
export class AuthResponse {
  @Field({ nullable: true })
  error?: string;
  @Field(() => Int)
  code: number;
  @Field({ nullable: true })
  data?: User;
}

@ObjectType()
export class Token {
  @Field(() => String)
  token: string;
}

@ObjectType()
export class SignInResponse {
  @Field({ nullable: true })
  error?: string;
  @Field(() => Int)
  code: number;
  @Field({ nullable: true })
  data?: Token;
}
