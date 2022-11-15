import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';
import { PERMISSIONS } from 'models';

export class CreateRoleDto {
  @ApiProperty({ example: 'store-admin' })
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  name: string;

  @ApiProperty({ example: [PERMISSIONS.VIEW_OWN_ROLE] })
  permissions: PERMISSIONS;

  @ApiProperty({ example: true })
  isActive: boolean;
}

export class UpdateRoleDto {
  @ApiProperty({ example: 'store-admin', required: true})
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  name: string;

  @ApiProperty({ example: [PERMISSIONS.VIEW_OWN_ROLE] })
  permissions?: PERMISSIONS;

  @ApiProperty({ example: true })
  isActive?: boolean;
}
