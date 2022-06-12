import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class SearchConditionDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    skip?: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    limit?: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    brandId?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    categoryId?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    productName?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    isFeatured?: boolean;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    slug?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    orderBy?: string;
}