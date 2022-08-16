import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import {
  CreateTagRequestBody,
  Tag
} from 'models';

@ObjectType()
export class TagType implements Tag {
  @Field()
  id: string;

  @Field()
  name: string;
}

@InputType()
export class CreateTagInput implements CreateTagRequestBody {
  @Field()
  name: string;
}

@ObjectType()
export class CreateTagResponse {
  @Field(() => Int)
  code: number;

  @Field(() => TagType, { nullable: true })
  data?: TagType
}

@ObjectType()
export class TagResponse {
  @Field(() => Int)
  code: number;

  @Field(() => [TagType], { nullable: true })
  data?: TagType[]
}
