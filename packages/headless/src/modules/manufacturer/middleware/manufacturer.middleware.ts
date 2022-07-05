import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ManufacturerMiddleware implements NestMiddleware {
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
