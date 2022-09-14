import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';
import { Manufacturer } from '@bs-commerce/models';

@ObjectType({ description: 'Manufacturer SEO data type' })
class ManufacturerSEO {
  @Field()
  metaKeyword: string;

  @Field()
  metaDescription: string;

  @Field()
  metaTitle: string;

  @Field()
  SEFN: string;
}

@ObjectType({
  description: 'Manufacturer data type following Manufacturer model',
})
export class ManufacturerSchemaGql implements Manufacturer {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  picture: string;

  @Field(() => Boolean)
  isPublished: boolean;

  @Field(() => Int)
  displayOrder: number;

  @Field(() => ManufacturerSEO)
  seo: ManufacturerSEO;
}

@InputType()
export class ManufacturersQuery {
  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  limit?: number;
}

@InputType()
class ManufacturerSEOInput {
  @Field({ nullable: true })
  metaKeyword?: string;

  @Field({ nullable: true })
  metaDescription?: string;

  @Field({ nullable: true })
  metaTitle?: string;

  @Field({ nullable: true })
  SEFN?: string;
}

@InputType()
export class ManufacturerInput {
  @Field()
  @MinLength(3)
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  picture?: string;

  @Field(() => Boolean, { nullable: true })
  isPublished?: boolean;

  @Field(() => Int, { nullable: true })
  displayOrder?: number;

  @Field(() => ManufacturerSEOInput, { nullable: true })
  seo?: ManufacturerSEOInput;
}

@ObjectType()
class ManufacturerWithMessage {
  @Field(() => ManufacturerSchemaGql)
  manufacturer: ManufacturerSchemaGql;

  @Field()
  message: string;
}

@ObjectType({ description: 'Single manufacturer response with message' })
export class ManufacturerResponse {
  @Field({ nullable: true })
  error?: string;

  @Field(() => Int)
  code: number;

  @Field(() => ManufacturerWithMessage, { nullable: true })
  data?: ManufacturerWithMessage;
}

@ObjectType()
class ManufacturerArrayResponse {
  @Field(() => [ManufacturerSchemaGql], { nullable: 'items' })
  manufacturers: [ManufacturerSchemaGql];

  @Field(() => Int)
  total: number;

  @Field()
  message: string;
}

@ObjectType({ description: 'Get all manufacturers response' })
export class AllManufacturersResponse {
  @Field({ nullable: true })
  error?: string;

  @Field(() => Int)
  code: number;

  @Field(() => ManufacturerArrayResponse, { nullable: true })
  data?: ManufacturerArrayResponse;
}
