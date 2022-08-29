import { Injectable } from '@nestjs/common';
import { FindRequest } from '../tran/dto/request';
import { TranRepository } from '../tran/tran.respository';

@Injectable()
export class TranService {
    constructor(private readonly tranRepository: TranRepository) {}

    async findAdminByEmail(memberIndex: number) {
        const [adminInfo] = await this.tranRepository.createAdmin(memberIndex);
        return adminInfo;
      }
    
}
