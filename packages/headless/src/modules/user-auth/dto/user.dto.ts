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
  @ApiProperty({ example: '01711223344' })
  phone: string;
  @ApiProperty({ example: '12345' })
  password: string;
}

export class UserEntityResponse {
  firstName: string;
  lastName: string;
  phone: string;
}

export interface IJwtPayload {
  userId: string;
  username: string;
  phone: string;
  logInTime: number;
}
