import { JwtService } from '@nestjs/jwt';
import { authConfig } from 'src/config/auth';

export interface JwtPayload {
  id: string;
  username: string;
  logInTime: number;
}

export interface JwtTokenRes {
  token: string;
}

const createPayloadForUserToken = (
  id: string,
  username: string,
): JwtPayload => {
  return {
    id,
    username,
    logInTime: Date.now(),
  };
};

export const getDemoUserToken = (id: string, username: string): JwtTokenRes => {
  if (!id.trim() || !username.trim()) {
    throw new Error('invalid userId or username found in token generation');
  }
  const jwtService = new JwtService({
    secret: authConfig.jwt_key!,
    signOptions: {
      expiresIn: authConfig.expiration_time!,
    },
  });
  const payload = createPayloadForUserToken(id, username);
  const token = jwtService.sign(payload);
  return { token };
};
