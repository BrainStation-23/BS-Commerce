import {
  Field,
  GraphQLISODateTime,
  InputType,
  Int,
  ObjectType,
} from '@nestjs/graphql';
import { IsArray, IsIn } from 'class-validator';
import {
  ProductInfo,
  ProductMeta,
  UpdateProductMeta,
  ProductPhoto,
  ProductCategory,
  ProductManufacturer,
  UpdateProductManufacturer,
  UpdateProductRequest,
  Product,
  UpdateProductInfo,
  UpdateProductCategory,
  GetProductsByConditionQuery,
  GetAllProductsQuery,
  UpdateProductsForBrandRequest,
  GetCustomerAllProductsQuery,
  GetCustomerAllProductsResponseType,
} from 'models';

@ObjectType('ProductInfo')
@InputType('ProductInfoInput')
export class GraphqlProductInfo implements ProductInfo {
  @Field()
  name: string;

  @Field({ nullable: true })
  shortDescription?: string;

  @Field({ nullable: true })
  fullDescription?: string;

  @Field()
  sku: string;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  oldPrice: number;

  @Field(() => Int)
  quantity: number;

  @Field(() => Boolean, { nullable: true })
  showOnHomePage?: boolean;

  @Field(() => Boolean, { nullable: true })
  includeInTopMenu?: boolean;

  @Field(() => Boolean, { nullable: true })
  allowToSelectPageSize?: boolean;

  @Field(() => Boolean, { nullable: true })
  published?: boolean;

  @Field(() => Int, { nullable: true })
  displayOrder?: number;

  @Field(() => Boolean, { nullable: true })
  isFeatured?: boolean;

  @Field(() => GraphQLISODateTime, { nullable: true })
  publishDate?: Date;
}

@InputType()
export class UpdateProductInfoInput implements UpdateProductInfo {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  shortDescription?: string;

  @Field({ nullable: true })
  fullDescription?: string;

  @Field({ nullable: true })
  sku?: string;

  @Field(() => Int, { nullable: true })
  price?: number;

  @Field(() => Int, { nullable: true })
  oldPrice?: number;

  @Field(() => Int, { nullable: true })
  cost?: number;

  @Field(() => Boolean, { nullable: true })
  showOnHomePage?: boolean;

  @Field(() => Boolean, { nullable: true })
  includeInTopMenu?: boolean;

  @Field(() => Boolean, { nullable: true })
  allowToSelectPageSize?: boolean;

  @Field(() => Boolean, { nullable: true })
  published?: boolean;

  @Field(() => Int, { nullable: true })
  displayOrder?: number;

  @Field(() => Boolean, { nullable: true })
  isFeatured?: boolean;
}

@InputType('ProductMetaInput')
export class GraphqlProductMetaInput implements ProductMeta {
  @Field(() => [String], { nullable: true })
  @IsArray()
  keywords?: string[];

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;
}

@ObjectType('ProductMeta')
export class GraphqlProductMeta implements ProductMeta {
  @Field(() => [String], { nullable: true })
  @IsArray()
  keywords?: string[];

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  friendlyPageName?: string;
}

@InputType()
export class UpdateProductMetaInput implements UpdateProductMeta {
  @Field(() => [String], { nullable: true })
  keywords?: string[];

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  friendlyPageName?: string;
}

@ObjectType('ProductPhoto')
@InputType('ProductPhotoInput')
export class GraphqlProductPhoto implements ProductPhoto {
  @Field({ nullable: true })
  url?: string;

  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  alt?: string;

  @Field(() => Int, { nullable: true })
  displayOrder?: number;
}

@ObjectType('ProductCategory')
@InputType('ProductCategoryInput')
export class GraphqlProductCategory implements ProductCategory {
  @Field()
  id: string;

  @Field()
  name: string;
}

@InputType('UpdateProductCategoryInput')
export class UpdateProductCategoryInput implements UpdateProductCategory {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  name?: string;
}

@ObjectType('ProductManufacturer')
@InputType('ProductManufacturerInput')
export class GraphqlProductManufacture implements ProductManufacturer {
  @Field()
  id: string;

  @Field()
  name: string;
}

@InputType()
export class UpdateProductManufacturerInput
  implements UpdateProductManufacturer
{
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  id?: string;
}

@ObjectType('Product')
export class GraphqlProduct implements Product {
  @Field({ nullable: true })
  id?: string;

  @Field(() => GraphqlProductInfo)
  info: GraphqlProductInfo;

  @Field(() => GraphqlProductMeta)
  meta: GraphqlProductMeta;

  @Field(() => [String], { nullable: true })
  tags?: string[];

  @Field(() => [GraphqlProductPhoto], { nullable: true })
  photos?: GraphqlProductPhoto[];

  @Field(() => [String], { nullable: true })
  brands?: string[];

  @Field(() => GraphqlProductManufacture, { nullable: true })
  manufacturer?: GraphqlProductManufacture;

  @Field(() => [GraphqlProductCategory])
  categories: GraphqlProductCategory[];
}

@InputType('ProductInput')
export class GraphqlProductInput implements Product {
  @Field(() => GraphqlProductInfo)
  info: GraphqlProductInfo;

  @Field(() => GraphqlProductMetaInput, { nullable: true })
  meta?: GraphqlProductMetaInput;

  @Field(() => [String], { nullable: true })
  tags?: string[];

  @Field(() => [GraphqlProductPhoto], { nullable: true })
  photos?: GraphqlProductPhoto[];

  @Field(() => [String], { nullable: true })
  brands?: string[];

  @Field(() => GraphqlProductManufacture, { nullable: true })
  manufacturer?: GraphqlProductManufacture;

  @Field(() => [GraphqlProductCategory])
  categories: GraphqlProductCategory[];
}

@InputType()
export class UpdateProductInput implements UpdateProductRequest {
  @Field(() => UpdateProductInfoInput, { nullable: true })
  info?: UpdateProductInfoInput;

  @Field(() => UpdateProductMetaInput, { nullable: true })
  meta?: UpdateProductMetaInput;

  @Field(() => [String], { nullable: true })
  tags?: string[];

  @Field(() => [GraphqlProductPhoto], { nullable: true })
  photos?: GraphqlProductPhoto[];

  @Field(() => [String], { nullable: true })
  brands?: string[];

  @Field(() => UpdateProductManufacturerInput, { nullable: true })
  manufacturer?: UpdateProductManufacturerInput;

  @Field(() => [UpdateProductCategoryInput], { nullable: true })
  categories?: UpdateProductCategoryInput[];
}

@InputType()
export class SearchConditionInput implements GetProductsByConditionQuery {
  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  limit?: number;

  @Field({ nullable: true })
  brand?: string;

  @Field({ nullable: true })
  categoryId?: string;

  @Field({ nullable: true })
  productName?: string;

  @Field(() => Boolean, { nullable: true })
  isFeatured?: boolean;

  @Field({ nullable: true })
  slug?: string;

  @Field({
    nullable: true,
    description: 'Price Low to High -> asc or High to Low -> desc',
  })
  @IsIn(['asc', 'desc'])
  orderBy?: string;
}

@InputType()
export class GetCustomerAllProductsQueryInput
  implements GetCustomerAllProductsQuery
{
  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  limit?: number;

  @Field({ nullable: true })
  brand?: string;

  @Field({ nullable: true })
  categoryId?: string;

  @Field({ nullable: true })
  productName?: string;

  @Field(() => Boolean, { nullable: true })
  isFeatured?: boolean;

  @Field({ nullable: true })
  slug?: string;

  @Field({
    nullable: true,
    description: 'Price Low to High -> asc or High to Low -> desc',
  })
  @IsIn(['asc', 'desc'])
  orderBy?: string;

  @Field(() => Int, { nullable: true })
  minPrice?: number;

  @Field(() => Int, { nullable: true })
  maxPrice?: number;
}

@InputType()
export class GetAllProductsQueryInput implements GetAllProductsQuery {
  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  limit?: number;
}

@InputType()
export class UpdateProductsForBrandBody
  implements UpdateProductsForBrandRequest
{
  @Field(() => [String])
  productIds: string[];

  @Field()
  brandId: string;
}

@ObjectType()
export class ProductResponse {
  @Field(() => Int)
  code: number;

  @Field(() => GraphqlProduct, { nullable: true })
  data?: GraphqlProduct;
}

@ObjectType()
export class ProductSuccessMessage {
  @Field()
  message: string;
}

@ObjectType()
export class ProductDeletedResponse {
  @Field(() => Int)
  code: number;

  @Field(() => ProductSuccessMessage, { nullable: true })
  data?: ProductSuccessMessage;
}

@ObjectType()
export class ProductArrayResponse {
  @Field(() => Int)
  code: number;

  @Field(() => [GraphqlProduct], { nullable: true })
  data?: GraphqlProduct[];
}

@ObjectType()
export class GetCustomerAllProductsResponse
  implements GetCustomerAllProductsResponseType
{
  @Field(() => [GraphqlProduct], { nullable: true })
  products: GraphqlProduct[];

  @Field(() => [String], { nullable: true })
  manufacturers: string[];

  @Field(() => [String], { nullable: true })
  brands: string[];

  @Field(() => Int, { nullable: true })
  totalProducts: number;
}

@ObjectType()
export class ProductArrayWithBrandAndManufacturersResponse {
  @Field(() => Int)
  code: number;

  @Field(() => GetCustomerAllProductsResponse, { nullable: true })
  data?: GetCustomerAllProductsResponse;
}

@ObjectType()
export class ProductArrayWithCount {
  @Field(() => [GraphqlProduct])
  products: GraphqlProduct[];

  @Field(() => Int)
  count: number;
}

@ObjectType()
export class ProductArrayWithCountResponse {
  @Field(() => Int)
  code: number;

  @Field(() => ProductArrayWithCount, { nullable: true })
  data?: ProductArrayWithCount;
}

@ObjectType()
export class Count {
  @Field(() => Int)
  count: number;
}

@ObjectType()
export class ProductCount {
  @Field(() => Int)
  code: number;

  @Field(() => Count, { nullable: true })
  data?: Count;
}
