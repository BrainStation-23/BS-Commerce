import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, MinLength } from "class-validator" 
import { ISuperAdminLoginReq, ISuperAdminLoginRes } from "models"

export class SuperAdminLoginDto implements ISuperAdminLoginReq{
    @ApiProperty({example: 'sadmin@mail.com', required: true})
    @IsEmail()
    email: string

    @ApiProperty({example: '12345678', required: true})
    @IsString()
    @MinLength(8)
    password: string
}

export class SuperAdminLoginRes implements ISuperAdminLoginRes{
    @ApiProperty()
    token: string
}