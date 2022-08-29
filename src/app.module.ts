import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TranModule } from './tran/tran.module';

@Module({
  imports: [TranModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
