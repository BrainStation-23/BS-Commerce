import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { IReOrderQuery } from "models";

export class ReOrderQuery implements IReOrderQuery{
    @ApiProperty()
    orderId: string

    @ApiProperty()
    @IsOptional()
    overWriteCart?: boolean;

    @ApiProperty()
    @IsOptional()
    ignoreInvalidItems?: boolean;
}