import { Test, TestingModule } from '@nestjs/testing';
import { AcademysController } from './academys.controller';

describe('AcademysController', () => {
  let controller: AcademysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcademysController],
    }).compile();

    controller = module.get<AcademysController>(AcademysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
