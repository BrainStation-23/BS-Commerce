import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { authConfig } from 'config/auth';
import { AdminJwtPayload } from 'src/entity/admin-auth';

@Injectable()
export class CustomerJwtStrategy extends PassportStrategy(Strategy, 'customer') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: authConfig.jwt_key!,
    });
  }

  async validate(payload: AdminJwtPayload) {
    return { ...payload };
  }
}