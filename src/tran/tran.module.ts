import { Module } from '@nestjs/common';
import { TranController } from './tran.controller';
import { TranService } from './tran.service';

@Module({
  controllers: [TranController],
  providers: [TranService]
})
export class TranModule {}
