import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class IOrderDatabase {
  abstract createOrder: (userId: string, body: any) => Promise<any>;
}
