import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, MinLength } from "class-validator" 
import { IStoreAdminLoginReq, IStoreAdminLoginRes } from "models"

export class StoreAdminLoginDto implements IStoreAdminLoginReq{
    @ApiProperty({example: 'sadmin@mail.com', required: true})
    @IsEmail()
    email: string

    @ApiProperty({example: '12345678', required: true})
    @IsString()
    @MinLength(8)
    password: string
}

export class StoreAdminLoginRes implements IStoreAdminLoginRes{
    @ApiProperty()
    token: string
}