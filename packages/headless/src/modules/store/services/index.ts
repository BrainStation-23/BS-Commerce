import { Injectable } from '@nestjs/common';
import { Helper } from 'src/helper/helper.interface';
import { StoreRepository } from '../repositories';

@Injectable()
export class StoreService {
  constructor(private storeRepo: StoreRepository, private helper: Helper) {}
}
