import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';
import { PERMISSIONS } from 'models';

export class CreateRoleDto {
  @ApiProperty({ example: 'admin' })
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  name: string;

  @ApiProperty({ example: [PERMISSIONS.VIEW_ROLE] })
  permissions: PERMISSIONS;

  @ApiProperty({ example: true })
  isActive: boolean;
}

export class UpdateRoleDto extends CreateRoleDto {}
