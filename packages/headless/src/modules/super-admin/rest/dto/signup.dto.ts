import { ApiProperty } from "@nestjs/swagger"
import { IsArray, IsEmail, IsEnum, IsString, MaxLength, MinLength } from "class-validator"
import { ISuperAdminSignupReq } from "models"


export enum AccountTypeEnum{
    PRIMARY = 'PRIMARY',
    SECONDARY = 'SECONDARY'
}
export enum MfaType{
    EMAIL='EMAIL',
    PHONE='PHONE',
    BOTH='BOTH'
}
export class SuperAdminSignupReq implements ISuperAdminSignupReq{ 
    @ApiProperty({example:'Adam'})
    @IsString()
    @MaxLength(30)
    @MinLength(2)
    firstName: string

    @ApiProperty({example:'Smit'})
    @IsString()
    @MaxLength(30)
    @MinLength(2)
    lastName: string

    @ApiProperty({example:'super-admin'})
    @IsString()
    role: string

    @ApiProperty({example:'sadmin@mail.com'})
    @IsEmail()
    email: string

    @ApiProperty({example:'880'})
    @IsString()
    countryCode?: string

    @ApiProperty({example:'1512001122'})
    @IsString()
    phone?: string

    @ApiProperty({example:'12345678'})
    @IsString()
    password: string

    @ApiProperty({example: false})
    isMfa?: boolean

    @ApiProperty({example: []})
    @IsArray()
    mfaType?: string[]

    @ApiProperty({example: AccountTypeEnum.PRIMARY})
    @IsEnum(AccountTypeEnum)
    accountType: AccountTypeEnum
}

export class SuperAdminSignupRes implements ISuperAdminSignupReq{ 
    @ApiProperty({example:'Adam'})
    firstName: string

    @ApiProperty({example:'Smit'})
    lastName: string

    @ApiProperty({example:'super-admin'})
    role: string

    @ApiProperty({example:'sadmin@mail.com'})
    email: string

    @ApiProperty({example:'880'})
    countryCode?: string

    @ApiProperty({example:'1512001122'})
    phone?: string

    @ApiProperty({example: false})
    isMfa?: boolean

    @ApiProperty({example: []})
    mfaType?: string[]

    @ApiProperty({example: AccountTypeEnum.PRIMARY})
    accountType: AccountTypeEnum
}