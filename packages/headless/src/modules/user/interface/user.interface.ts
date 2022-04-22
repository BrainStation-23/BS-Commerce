import { ApiProperty } from '@nestjs/swagger';

export class ICreateUser {
  id: string;
  @ApiProperty({ example: 'firstName' })
  firstName: string;
  @ApiProperty({ example: 'lastName' })
  lastName: string;
  displayName?: string;
  username?: string;
  email: string;
  @ApiProperty({ example: '01711223344' })
  phone: string;
  @ApiProperty({ example: '12345678' })
  password: string;
  provider?: string;
  providerData?: Record<string, any>;
  additionalProviderData?: Record<string, any>;
}

export class ILoginData {
  @ApiProperty({ example: '01711223344' })
  phone: string;
  @ApiProperty({ example: '12345678' })
  password: string;
}

export interface IJwtPayload {
  id: string;
  username: string;
  phone: string;
  logInTime: number;
}
