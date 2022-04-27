import {  HttpException, HttpStatus, Injectable, UnauthorizedException, } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err: any, user: any, info: string) {
    if (err || !user) {
      if (!user) {
        throw new HttpException('Sorry! You are not a valid User.', HttpStatus.UNAUTHORIZED);
      }
      throw err || new UnauthorizedException('Unauthorized');
    }
    return user;
  }
}