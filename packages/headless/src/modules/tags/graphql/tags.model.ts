import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import {
  CreateTagRequestBody,
  Tag,
  UpdateTagRequest,
} from '@bs-commerce/models';
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

  @Field(() => Boolean, { nullable: true })
  isHomePageProductsTag?: boolean;
}

@InputType()
export class UpdateTagInput implements UpdateTagRequest {
  @Field({ nullable: true })
  name?: string;

  @Field(() => Boolean, { nullable: true })
  isHomePageProductsTag?: boolean;
}
@ObjectType()
export class TagResponse {
  @Field(() => Int)
  code: number;

  @Field(() => TagType, { nullable: true })
  data?: TagType;
}
@ObjectType()
export class TagsResponse {
  @Field(() => Int)
  code: number;

  @Field(() => [TagType], { nullable: true })
  data?: TagType[];
}
