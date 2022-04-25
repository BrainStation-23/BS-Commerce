import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ProductMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(
      'Using local middleware:: Requested url:',
      req.baseUrl,
      'method:',
      req.method,
    );
    next();
  }
}
