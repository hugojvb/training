import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestService } from './services/testqw/test.service';
import { AnotherService } from './services/another/another.service';
import { TestControllerController } from './controllers/test-controller/test-controller.controller';
import { AnotherTestControllerController } from './controllers/another-test-controller/another-test-controller.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    TestControllerController,
    AnotherTestControllerController,
  ],
  providers: [AppService, TestService, AnotherService],
})
export class AppModule {}
