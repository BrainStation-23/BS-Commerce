import { ObjectType, Field , Int, InputType} from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Brand, BrandInfo, BrandMeta, CreateBrandRequest } from '@bs-commerce/models';

@ObjectType({ description: 'The Brand Info model' })
export class BrandInfoModel implements BrandInfo{
    @Field({ nullable: false })
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    allowToSelectPageSize?: boolean;

    @Field({ nullable: true })
    published?: boolean;

    @Field(type => Int, { nullable: true })
    displayOrder?: number;

    @Field(type => [Int], { nullable: true })
    pageSizeOptions?: number[];
}

@ObjectType({ description: 'The Brand Meta model' })
export class BrandMetaModel implements BrandMeta{
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
export class BrandInfoInput implements BrandInfo{
    @Field({ nullable: false })
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    allowToSelectPageSize?: boolean;

    @Field({ nullable: true })
    published?: boolean;

    @Field(type => Int, { nullable: true })
    displayOrder?: number;

    @Field(type => [Int], { nullable: true })
    pageSizeOptions?: number[];
}

@InputType({ description: 'Input for Brand Meta' })
export class BrandMetaInput implements BrandMeta{
    @Field({ nullable: true })
    keywords?: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    title?: string;
    
    @Field({ nullable: true })
    SEFN?: string;
}

@ObjectType({ description: 'Brand Model'})
export class BrandModel implements Brand{
    @Field()
    id: string;

    @Field(type => BrandInfoModel, { nullable: false })
    info: BrandInfoModel;

    @Field(type => BrandMetaModel, { nullable: false })
    meta: BrandMetaModel;
}

@InputType({ description: 'Input for Brand' })
export class BrandInput implements CreateBrandRequest{
    @Field(type => BrandInfoInput, { nullable: false })
    info: BrandInfoInput;

    @Field(type => BrandMetaInput, { nullable: true })
    meta?: BrandMetaInput;
}

@ObjectType()
export class SingleBrandResponse{
    @Field()
    error?: string;
    
    @Field(type=> Int, { nullable: false })
    code: number;

    @Field(type=> BrandModel, { nullable: false })
    data: Brand;
}

@ObjectType()
export class BrandResponse{
    @Field()
    error?: string;
    
    @Field(type=> Int, { nullable: false })
    code: number;

    @Field(type=> [BrandModel], { nullable: false })
    data: Brand[];
} 

    