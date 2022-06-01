import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty({ example: '01711223344' })
  phone: string;
  @ApiProperty()
  password: string;
}

export class LoginDto {
  @ApiProperty()
  phone: string;
  @ApiProperty()
  password: string;
}

export class UserEntityResponse {
  firstName: string;
  lastName: string;
  phone: string;
}
