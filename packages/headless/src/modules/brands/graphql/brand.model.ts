import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import {
  Brand,
  BrandInfo,
  BrandMeta,
  CreateBrandRequest,
} from '@bs-commerce/models';

@ObjectType({ description: 'The Brand Info model' })
export class BrandInfoModel implements BrandInfo {
  @Field({ nullable: false })
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  allowToSelectPageSize?: boolean;

  @Field({ nullable: true })
  published?: boolean;

  @Field(() => Int, { nullable: true })
  displayOrder?: number;

  @Field(() => [Int], { nullable: true })
  pageSizeOptions?: number[];
}

@ObjectType({ description: 'The Brand Meta model' })
export class BrandMetaModel implements BrandMeta {
  @Field({ nullable: true })
  keywords?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  SEFN?: string;
}

@InputType({ description: 'Input for Brand Info' })
export class BrandInfoInput implements BrandInfo {
  @Field({ nullable: false })
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  allowToSelectPageSize?: boolean;

  @Field({ nullable: true })
  published?: boolean;

  @Field(() => Int, { nullable: true })
  displayOrder?: number;

  @Field(() => [Int], { nullable: true })
  pageSizeOptions?: number[];
}

@InputType({ description: 'Input for Brand Meta' })
export class BrandMetaInput implements BrandMeta {
  @Field({ nullable: true })
  keywords?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  SEFN?: string;
}

@ObjectType({ description: 'Brand Model' })
export class BrandModel implements Brand {
  @Field()
  id: string;

  @Field(() => BrandInfoModel, { nullable: false })
  info: BrandInfoModel;

  @Field(() => BrandMetaModel, { nullable: false })
  meta: BrandMetaModel;
}

@InputType({ description: 'Input for Brand' })
export class BrandInput implements CreateBrandRequest {
  @Field(() => BrandInfoInput, { nullable: false })
  info: BrandInfoInput;

  @Field(() => BrandMetaInput, { nullable: true })
  meta?: BrandMetaInput;
}

@ObjectType()
export class SingleBrandResponse {
  @Field()
  error?: string;

  @Field(() => Int, { nullable: false })
  code: number;

  @Field(() => BrandModel, { nullable: false })
  data: Brand;
}

@ObjectType()
export class BrandResponse {
  @Field()
  error?: string;

  @Field(() => Int, { nullable: false })
  code: number;

  @Field(() => [BrandModel], { nullable: false })
  data: Brand[];
}
