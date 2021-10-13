import { Test, TestingModule } from '@nestjs/testing';
import { QuanhuyenService } from './quanhuyen.service';

describe('QuanhuyenService', () => {
  let service: QuanhuyenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuanhuyenService],
    }).compile();

    service = module.get<QuanhuyenService>(QuanhuyenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
