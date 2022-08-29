import { LocalDate } from '@js-joda/core';
import { IsDateString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import {
  ClientFilter,
  OrderBy,
  YesNoFilter,
} from '../../constants/search';

export class FindRequest {
  @IsOptional()
  page?: number = 0;

  memberNumber?: number = 0;
  
  @IsOptional()
  pageSize?: number = Number.MAX_SAFE_INTEGER;

  @IsDateString()
  @IsNotEmpty()
  startDate: LocalDate;

  @IsDateString()
  @IsNotEmpty()
  endDate: LocalDate;

  @IsOptional()
  searchKeyword?: string = '';

  @IsOptional()
  companyIndex?: number = 0;

  @IsOptional()
  @IsEnum(YesNoFilter)
  payment?: YesNoFilter = YesNoFilter.ALL;

  @IsOptional()
  @IsEnum(YesNoFilter)
  taxBill?: YesNoFilter = YesNoFilter.ALL;

  @IsOptional()
  @IsEnum(OrderBy)
  order?: OrderBy = OrderBy.DESC;

  @IsEnum(ClientFilter)
  clientFilter: ClientFilter;
}
