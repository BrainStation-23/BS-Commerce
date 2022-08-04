import { JwtService } from '@nestjs/jwt';
import { authConfig } from 'config/auth';

export interface JwtPayload {
  id: string;
  username: string;
  logInTime: number;
  role: string;
}

export interface JwtTokenRes {
  token: string;
}

const createPayloadForUserToken = (id: string, username: string, role: string): JwtPayload => {
  return {
    id,
    username,
    logInTime: Date.now(),
    role
  };
};

export const getDemoUserToken = (id: string, username: string, role: string): JwtTokenRes => {
  if (!id.trim() || !username.trim()) {
    throw new Error('invalid userId or username found in token generation');
  }
  const jwtService = new JwtService({
    secret: authConfig.jwt_key!,
    signOptions: {
      expiresIn: authConfig.expiration_time!,
    },
  });
  const payload = createPayloadForUserToken(id, username, role);
  const token = jwtService.sign(payload);
  return { token };
};