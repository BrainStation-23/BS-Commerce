import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, MinLength } from "class-validator" 
import { IUserAdminLoginReq, IUserAdminLoginRes } from "models"

export class UserAdminLoginDto implements IUserAdminLoginReq{
    @ApiProperty({example: 'sadmin@mail.com', required: true})
    @IsEmail()
    email: string

    @ApiProperty({example: '12345678', required: true})
    @IsString()
    @MinLength(8)
    password: string
}

export class UserAdminLoginRes implements IUserAdminLoginRes{
    @ApiProperty()
    token: string
}