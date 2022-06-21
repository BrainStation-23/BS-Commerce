import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { customerAuthConfig } from 'config/auth';
import { JwtPayload } from 'src/entity/auth';

@Injectable()
export class CustomerJwtStrategy extends PassportStrategy(Strategy, 'customer') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: customerAuthConfig.jwt_key!,
    });
  }

  async validate(payload: JwtPayload) {
    return { ...payload };
  }
}