import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
  IsOptional,
} from 'class-validator';
import { IRoleInfo } from 'models';

export enum MfaType {
  EMAIL = 'EMAIL',
  PHONE = 'PHONE',
}

export class StoreAdminCreateReq {
  @ApiProperty({ example: 'Adam', required: true })
  @IsString()
  @MaxLength(30)
  @MinLength(2)
  firstName: string;

  @ApiProperty({ example: 'Smit', required: true })
  @IsString()
  @MaxLength(30)
  @MinLength(2)
  lastName: string;

  @ApiProperty({ example: 'role-id', required: true })
  @IsString()
  @IsOptional()
  roleId?: string;

  @ApiProperty({ example: '' })
  @IsOptional()
  branchId?: string[];

  @ApiProperty({ example: 'sadmin@mail.com', required: true })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '12345678', required: true })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({ example: '880' })
  @IsString()
  @IsOptional()
  countryCode?: string;

  @ApiProperty({ example: '1512001122' })
  @IsString()
  @IsOptional()
  phone?: string;
}

export class RoleInfo implements IRoleInfo {
  @ApiProperty()
  name: string;

  @ApiProperty()
  roleId: string;

  @ApiProperty()
  roleType: string;
}

export class CreateStoreAdminDto {
  firstName: string;
  lastName: string;
  role?: RoleInfo;
  storeId?: string;
  branchId?: string[];
  email: string;
  countryCode?: string;
  phone?: string;
  isMfaEnabled?: boolean;
  mfaType?: MfaType;
}

export class StoreAdminSignupRes {
  @ApiProperty({ example: 'Adam' })
  firstName: string;

  @ApiProperty({ example: 'Smit' })
  lastName: string;

  @ApiProperty()
  role: RoleInfo;

  @ApiProperty({ example: 'store-id' })
  @IsString()
  storeId: string;

  @ApiProperty({ example: ['branch-id'] })
  @IsString()
  branchId: string[];

  @ApiProperty({ example: 'sadmin@mail.com' })
  email: string;

  @ApiProperty({ example: '880' })
  countryCode?: string;

  @ApiProperty({ example: '1512001122' })
  phone?: string;

  @ApiProperty({ example: false })
  isMfaEnabled?: boolean;

  @ApiProperty({ enum: MfaType, example: MfaType.EMAIL })
  mfaType?: MfaType;
}
