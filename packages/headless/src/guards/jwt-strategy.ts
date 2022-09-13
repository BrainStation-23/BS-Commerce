import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { authConfig } from 'config/auth';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([(request: Request) => {
        const data = request?.cookies['jwt']?.split(' ')[1] || request?.headers['authorization']?.split(' ')[1];
        if (!data) { return null; }
        return data;
      }]),
      ignoreExpiration: false,
      secretOrKey: authConfig.jwt_key!,
    });
  }

  async validate(payload: any) {
    if (payload === null) {
      throw new UnauthorizedException('Sorry! You are not a valid user for this action.');
    }
    return { ...payload };
  }
}