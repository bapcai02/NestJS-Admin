import { Test, TestingModule } from '@nestjs/testing';
import { QuanhuyenController } from './quanhuyen.controller';

describe('QuanhuyenController', () => {
  let controller: QuanhuyenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuanhuyenController],
    }).compile();

    controller = module.get<QuanhuyenController>(QuanhuyenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
