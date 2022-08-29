import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { FindRequest } from '../tran/dto/request';
import { memberResponse } from '../tran/dto/response';


@Injectable()
export class TranRepository {
  constructor(private readonly datasource: DataSource) {}

  private queryExcuter(sql: string) {
    return this.datasource.query(sql);
  }
    
  public async createAdmin(request: FindRequest): Promise<any> {
    const {
        memberNumber,          
        pageSize,      
        searchKeyword
    } = request;

    //const password = await PasswordUtils.encrypt(originPassword.toString());

    const sql = `INSERT INTO TB_ADMIN (clubIdx, deletedAt, email, password, name, phone, role, approval, failCount, \`lock\`) VALUES (${
        memberNumber || null
    }, ${null}, '${pageSize}', '${pageSize}', '${pageSize}', '${pageSize}', '${pageSize}', '${
        pageSize
    }', 0, '${pageSize}')`;

    await this.queryExcuter(sql);

    return;
  }

//   async findAllWithMaster(request: FindRequest, companyIndex: number) {
//     const { page, pageSize, searchKeyword } = request;

//     let sql = `
//       SELECT
//         *
//       FROM
//         (SELECT
//            TA.id,
//            TA.role,
//            TC.krName,
//            TC.logoImage,
//            TC.index,
//            TC.createdAt,
//            TC.code,
//            (SELECT
//               CONCAT(TCT1.contractDate, ' ', TCT1.expiredDate)
//             FROM
//               TB_CONTRACT TCT1
//             WHERE
//               TCT1.companyIndex = TA.companyIndex
//               AND TCT1.contractState = '${ContractState.PROGRESS}'
//               AND TCT1.contractCompanyIndex IS NULL
//             LIMIT 1) '${ContractState.PROGRESS}',
//            (SELECT
//               COUNT(TCT2.contractState)
//             FROM
//               TB_CONTRACT TCT2
//             WHERE
//               TCT2.companyIndex = TA.companyIndex
//               AND TCT2.contractState = '${ContractState.EXPIRED}'
//               AND TCT2.contractCompanyIndex IS NULL) '${ContractState.EXPIRED}',
//            (SELECT
//               CONCAT(TCT3.contractDate, ' ', TCT3.expiredDate)
//             FROM
//               TB_CONTRACT TCT3
//             WHERE
//               TCT3.companyIndex = TA.companyIndex
//               AND TCT3.contractState = '${ContractState.RESERVED}'
//               AND TCT3.contractCompanyIndex IS NULL
//             LIMIT 1) '${ContractState.RESERVED}'
//          FROM
//            TB_COMPANY TC,
//            TB_ADMIN TA
//          WHERE
//            TC.index = TA.companyIndex
//            AND TA.role = '${AdminRole.COMPANY}'
//            AND TC.deleteState = '${State.NO}'
//          UNION
//            ALL SELECT
//               TAA.id,
//               TAA.role,
//               TCA.krName,
//               TCA.logoImage,
//               TCA.index,
//               TCA.createdAt,
//               TCA.code,
//               (SELECT
//                  CONCAT(TCTA1.contractDate, ' ', TCTA1.expiredDate)
//                FROM
//                  TB_CONTRACT TCTA1
//                WHERE
//                  TCTA1.companyIndex = TAA.companyIndex
//                  AND TCTA1.contractState = '${ContractState.PROGRESS}'
//                  AND TCTA1.contractCompanyIndex IS NOT NULL) '${ContractState.PROGRESS}',
//              (SELECT
//                 COUNT(TCTA2.contractState)
//               FROM
//                 TB_CONTRACT TCTA2
//               WHERE
//                 TCTA2.companyIndex = TAA.companyIndex
//                 AND TCTA2.contractState = '${ContractState.EXPIRED}'
//                 AND TCTA2.contractCompanyIndex IS NOT NULL) '${ContractState.EXPIRED}',
//              (SELECT
//                 CONCAT(TCTA3.contractDate, ' ', TCTA3.expiredDate)
//               FROM
//                 TB_CONTRACT TCTA3
//               WHERE
//                 TCTA3.companyIndex = TAA.companyIndex
//                 AND TCTA3.contractState = '${ContractState.RESERVED}'
//                 AND TCTA3.contractCompanyIndex IS NOT NULL
//               LIMIT 1) '${ContractState.RESERVED}'
//          FROM
//            TB_COMPANY TCA,
//            TB_ADMIN TAA
//          WHERE
//            TCA.index = TAA.companyIndex
//            AND TAA.role = '${AdminRole.AFFILIATED}'
//            AND TCA.deleteState = '${State.NO}'
//         ) A
//     `;
//     sql = this.companyNameEqualsTo(sql, searchKeyword);
//     sql = this.orderBy(sql, orderBy, companyIndex);
//     const count = await this.countQuery(sql);
//     sql = this.pagination(sql, page, pageSize);
//     const companyList = await this.connection.query(sql);

//     return [companyList, count];
//   }

}