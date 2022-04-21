import { ApiProperty } from '@nestjs/swagger';

export class ILoginData {
  @ApiProperty({ example: '01711223344' })
  phone: string;
  @ApiProperty({ example: '12345' })
  password: string;
}

export interface IJwtPayload {
  userId: string;
  username: string;
  phone: string;
  logInTime: number;
}
