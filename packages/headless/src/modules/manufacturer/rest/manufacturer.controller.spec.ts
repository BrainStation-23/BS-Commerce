import { Test, TestingModule } from '@nestjs/testing';
import { ManufacturerController } from './manufacturer.controller';

describe('ManufacturerController', () => {
  let controller: ManufacturerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManufacturerController],
    }).compile();

    controller = module.get<ManufacturerController>(ManufacturerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
