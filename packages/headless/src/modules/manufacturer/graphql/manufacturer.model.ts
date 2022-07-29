import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';
import { Manufacturer } from 'models';

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

@ObjectType({ description: 'Manufacturer data type following Manufacturer model' })
export class ManufacturerSchemaGql implements Manufacturer {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  picture: string;

  @Field((type) => Boolean)
  isPublished: boolean;

  @Field((type) => Int)
  displayOrder: number;

  @Field((type) => ManufacturerSEO)
  seo: ManufacturerSEO;
}

@InputType()
export class ManufacturersQuery {
  @Field(type => Int, { nullable: true })
  skip?: number;

  @Field(type => Int, { nullable: true })
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

  @Field(type => Boolean, { nullable: true })
  isPublished?: boolean;

  @Field(type => Int, { nullable: true })
  displayOrder?: number;

  @Field((type) => ManufacturerSEOInput, { nullable: true })
  seo?: ManufacturerSEOInput;
}

@ObjectType()
class ManufacturerWithMessage {
  @Field((type) => ManufacturerSchemaGql)
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

  @Field((type) => ManufacturerWithMessage, { nullable: true })
  data?: ManufacturerWithMessage;
}

@ObjectType()
class ManufacturerArrayResponse {
  @Field(type => [ManufacturerSchemaGql], { nullable: 'items' })
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

  @Field(type => Int)
  code: number;

  @Field(type => ManufacturerArrayResponse, { nullable: true })
  data?: ManufacturerArrayResponse;
}

// type Query {
  // getAllManufacturers(skip: Int, limit: Int): !AllManufacturersResponse;
  // getManufacturer(manufacturerId: !String): !ManufacturerResponse;
// }

// type Mutation {
//   addManufacturer(manufacturer: !ManufacturerInput): !ManufacturerResponse;
//   updateManufacturer(
//     manufacturerId: !String,
//     manufacturer: !ManufacturerInput,
//   ): !ManufacturerResponse;
//   deleteManufacturer(manufacturerId: !String): !ManufacturerResponse;
// }
