import { ApiProperty } from "@nestjs/swagger"
import { IsArray, IsEmail, IsEnum, IsOptional, IsString, MaxLength, MinLength } from "class-validator"
import { string } from "joi"
import { ISuperAdminSignupReq } from "models"

export enum MfaType{
    EMAIL='EMAIL',
    PHONE='PHONE',
}
export class SuperAdminSignupReq implements ISuperAdminSignupReq{ 
    @ApiProperty({example:'Adam', required: true})
    @IsString()
    @MaxLength(30)
    @MinLength(2)
    firstName: string

    @ApiProperty({example:'Smit', required: true})
    @IsString()
    @MaxLength(30)
    @MinLength(2)
    lastName: string

    @ApiProperty({example:'super-admin', required: true})
    @IsString()
    role: string

    @ApiProperty({example:'sadmin@mail.com', required: true})
    @IsEmail()
    email: string

    @ApiProperty({example:'12345678', required: true})
    @IsString()
    @MinLength(8)
    password: string

    @ApiProperty({example:'880'})
    @IsString()
    @IsOptional()
    countryCode?: string

    @ApiProperty({example:'1512001122'})
    @IsString()
    @IsOptional()
    phone?: string

    @ApiProperty({example: false})
    @IsOptional()
    isMfaEnabled?: boolean

    @ApiProperty({enum: MfaType,  example: MfaType.EMAIL})
    @IsOptional()
    @IsEnum(MfaType)
    mfaType?: string
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
    isMfaEnabled?: boolean

    @ApiProperty({enum: MfaType,  example: MfaType.EMAIL})
    mfaType?: string
}