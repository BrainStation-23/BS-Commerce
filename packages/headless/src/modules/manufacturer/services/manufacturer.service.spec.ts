import { Test, TestingModule } from '@nestjs/testing';
import { ManufacturerService } from './manufacturer.service';

describe('ManufacturerService', () => {
  let service: ManufacturerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManufacturerService],
    }).compile();

    service = module.get<ManufacturerService>(ManufacturerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
