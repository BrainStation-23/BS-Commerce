import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StoreService } from '../services';

@Controller('store')
@ApiTags('Store API')
export class StoreController {
  constructor(private storeService: StoreService) {}
}
