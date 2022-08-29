import { Controller, Get, Param } from '@nestjs/common';
import { TranService } from './tran.service';

@Controller('tran')
export class TranController {
    constructor(private readonly tranService: TranService) {}

    @Get('/:invoiceIndex')
    //@UseGuards(AccessGuard)
    async findByIndex(
      @Param('memberIndex') memberIndex: number,
      //@CurrentUser() curentUser: AdminEntity,
    ): Promise<any> {
      return await this.tranService.findAdminByEmail(memberIndex);
    }

}
