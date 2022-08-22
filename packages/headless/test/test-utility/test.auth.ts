import { JwtService } from '@nestjs/jwt';
import { authConfig } from 'config/auth';

export class CustomerJwtPayload {
  id: string;
  email?: string;
  phone?: string;
  logInTime: number;
  role: string;
}

export interface JwtPayload {
  id: string;
  username: string;
  logInTime: number;
  role: string;
}

export interface JwtTokenRes {
  token: string;
}

const CreatePayloadForUserToken = (id: string, username: string, role: string): JwtPayload => {
  return {
    id,
    username,
    logInTime: Date.now(),
    role
  };
};

const CreatePayloadForCustomerToken = (id: string, role: string, email?: string, phone?: string): CustomerJwtPayload => {
  return {
    id,
    email,
    phone,
    logInTime: Date.now(),
    role
  };
};

export const GetDemoUserToken = (id: string, username: string, role: string): JwtTokenRes => {
  if (!id.trim() || !username.trim()) {
    throw new Error('Invalid userId or username found in token generation');
  }
  const jwtService = new JwtService({
    secret: authConfig.jwt_key!,
    signOptions: {
      expiresIn: authConfig.expiration_time!,
    },
  });
  const payload = CreatePayloadForUserToken(id, username, role);
  const token = jwtService.sign(payload);
  return { token };
};

export const GetDemoCustomerToken = (id: string, role: string, email?: string, phone?: string): JwtTokenRes => {
  if (!id.trim()) {
    throw new Error('Invalid customerId found in token generation');
  }
  const jwtService = new JwtService({
    secret: authConfig.jwt_key!,
    signOptions: {
      expiresIn: authConfig.expiration_time!,
    },
  });
  const payload = CreatePayloadForCustomerToken(id, role, email, phone);
  const token = jwtService.sign(payload);
  return { token };
};