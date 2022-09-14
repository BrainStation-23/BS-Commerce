import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { 
    AddCompareItem,
    CompareData, 
    ICompareItems,
    IProductDetails,
    IProductInfo,
    IProductMeta
} from '@bs-commerce/models';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/guards/auth.guard';

@ObjectType({ description: 'Product Info Model'})
export class ProductInfoModel implements IProductInfo {
    @Field({ nullable: false})
    name: string;

    @Field({ nullable: false})
    price: number;

    @Field({ nullable: false})
    shortDescription: string;

    @Field({ nullable: false})
    fullDescription: string;

    @Field({ nullable: false})
    oldPrice: number;
}

@ObjectType({ description: 'Product Meta Model'})
export class ProductMetaModel implements IProductMeta {
    @Field({ nullable: true})
    friendlyPageName?: string;
}

@ObjectType({ description: 'Commpare Products Details Model'})
export class ProductDetailsModel implements IProductDetails{
    @Field(() => ProductInfoModel,{ nullable: false})
    info: IProductInfo;

    @Field(() => ProductMetaModel,{ nullable: false})
    meta: IProductMeta;

    @Field(() => [String],{ nullable: false})
    photos: string[];
}

@ObjectType({ description: 'Commpare Items Model'})
export class CompareItemsModel implements ICompareItems{
    @Field({ nullable: false})
    productId: string;

    @Field((type) => ProductDetailsModel,{ nullable: false})
    productDetails?: ProductDetailsModel;
}

@ObjectType({ description: 'Compare Model'})
export class CompareDataModel implements CompareData{
    @Field({ nullable: false})
    id: string;

    @Field({ nullable: false})
    userId: string;

    @Field((type)=> [CompareItemsModel])
    items: CompareItemsModel[]   
}

@InputType({ description: 'Add Compare Item Input Model'})
export class AddCompareItemModel implements AddCompareItem {
    @Field({ nullable: false})
    productId: string;
}

@ObjectType({ description: 'Compare Response' })
export class CompareResponseModel {
  @Field({ nullable: true })
  error?: string;

  @Field((type) => Int, { nullable: false })
  code: number;

  @Field((type) => CompareDataModel, { nullable: true })
  data?: CompareDataModel;
}

@ObjectType({ description: 'Compare Public Response' })
export class ComparePublicResponseModel {
  @Field({ nullable: true })
  error?: string;

  @Field((type) => Int, { nullable: false })
  code: number;

  @Field((type) => [CompareItemsModel], { nullable: true })
  data?: CompareItemsModel[];
}




