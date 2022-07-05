import { ManufacturerMiddleware } from './manufacturer.middleware';

describe('ManufacturerMiddleware', () => {
  it('should be defined', () => {
    expect(new ManufacturerMiddleware()).toBeDefined();
  });
});
