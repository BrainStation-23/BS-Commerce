import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import {
  Ancestor,
  Category,
  CategoryMeta,
  createCategoryRequest,
  getCategoryBySlugRequest,
  getCategoryRequest,
  NestedCategoryList,
  Photo,
} from '@bs-commerce/models';
import { ObjectScalarType } from 'src/internal/graphql/scalar/categoryList.scalar';

@InputType()
export class PhotoRequestSchema implements Photo {
  @Field()
  url: string;

  @Field()
  alt: string;
}

@ObjectType()
export class PhotoSchema implements Photo {
  @Field({ nullable: true })
  url: string;

  @Field()
  alt: string;
}

@ObjectType()
export class AncestorSchema implements Ancestor {
  @Field()
  name: string;

  @Field()
  slug: string;

  @Field()
  level: number;
}

@ObjectType()
export class CategoryMetaSchema implements CategoryMeta {
  @Field((type) => [String])
  keywords: string[];

  @Field()
  description: string;

  @Field()
  title: string;

  @Field()
  SEFN: string;
}

@InputType()
export class CategoryMetaRequestSchema implements CategoryMeta {
  @Field((type) => [String], { nullable: true })
  keywords?: string[];

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  SEFN?: string;
}

@ObjectType()
export class CategorySchema implements Category {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  slug: string;

  @Field()
  description: string;

  @Field((type) => PhotoSchema)
  photo: PhotoSchema;

  @Field()
  showOnHomePage: boolean;

  @Field()
  includeInTopMenu: boolean;

  @Field()
  allowToSelectPageSize: boolean;

  @Field()
  published: boolean;

  @Field()
  displayOrder: number;

  @Field()
  rootPath: string;

  @Field((type) => [AncestorSchema])
  ancestors: AncestorSchema[];

  @Field((type) => CategoryMetaSchema)
  meta: CategoryMetaSchema;
}

@InputType()
export class createCategoryRequestSchema implements createCategoryRequest {
  @Field()
  name: string;

  @Field({ nullable: true })
  parentSlug?: string;

  @Field((type) => PhotoRequestSchema, { nullable: true })
  photo?: PhotoRequestSchema;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  showOnHomePage?: boolean;

  @Field({ nullable: true })
  includeInTopMenu?: boolean;

  @Field({ nullable: true })
  allowToSelectPageSize?: boolean;

  @Field({ nullable: true })
  published?: boolean;

  @Field({ nullable: true })
  displayOrder?: number;

  @Field((type) => CategoryMetaRequestSchema, { nullable: true })
  meta?: CategoryMetaRequestSchema;
}

@InputType()
export class getCategoryRequestSchema implements getCategoryRequest {
  @Field()
  categoryId: string;
}

@InputType()
export class getCategoryBySlugRequestSchema
  implements getCategoryBySlugRequest
{
  @Field()
  slug: string;
}

@ObjectType()
export class CategoryResponse {
  @Field((type) => Int)
  code: number;

  @Field((type) => CategorySchema, { nullable: true })
  data: CategorySchema;
}

@ObjectType()
export class subCategoryListSchema {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field((type) => PhotoSchema)
  photo: PhotoSchema;

  @Field()
  published: boolean;

  @Field()
  displayOrder: number;

  @Field()
  slug: string;

  @Field((type) => [AncestorSchema])
  ancestors: AncestorSchema[];

  @Field((type) => ObjectScalarType, { nullable: true })
  subCategories?: any[];
}

@ObjectType()
export class NestedCategoryListSchema implements NestedCategoryList {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field((type) => PhotoSchema)
  photo: PhotoSchema;

  @Field()
  published: boolean;

  @Field()
  displayOrder: number;

  @Field()
  slug: string;

  @Field((type) => [AncestorSchema])
  ancestors: AncestorSchema[];

  @Field((type) => [subCategoryListSchema], { nullable: true })
  subCategories?: subCategoryListSchema[];
}

@ObjectType()
export class CategoryListSchema {
  @Field((type) => [NestedCategoryListSchema])
  categories: NestedCategoryListSchema[];
}

@ObjectType()
export class CategoryListResponse {
  @Field((type) => Int)
  code: number;

  @Field((type) => CategoryListSchema, { nullable: true })
  data: CategoryListSchema;
}
