import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { adminAuthConfig } from 'config/auth';
import { JwtPayload } from 'src/entity/auth';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: adminAuthConfig.jwt_key!,
    });
  }

  async validate(payload: JwtPayload) {
    return { ...payload };
  }
}