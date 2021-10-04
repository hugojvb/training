import { Test, TestingModule } from '@nestjs/testing';
import { AnotherTestControllerController } from './another-test-controller.controller';

describe('AnotherTestControllerController', () => {
  let controller: AnotherTestControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnotherTestControllerController],
    }).compile();

    controller = module.get<AnotherTestControllerController>(AnotherTestControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
