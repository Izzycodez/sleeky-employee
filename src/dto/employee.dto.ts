import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EmployeeDto {
  @IsNotEmpty()
  @IsString()
  first_name: string;
  @IsNotEmpty()
  @IsString()
  address: string;
  @IsNumber()
  phone_number: number;
  @IsNumber()
  emergency_number: number;
  @IsString()
  bank_name: string;
  @IsNumber()
  account_number: number;
  @IsString()
  account_name: string;
  @IsString()
  next_of_kin_name: string;
  @IsNumber()
  next_of_kin_number: number;
  @IsString()
  next_of_kin_relationship: string;
  @IsEnum(['software-engineer', 'UI_UX-designer', 'product-manager'], {
    message: 'Valid role is required',
  })
  role: 'software-engineer' | 'UI_UX-designer' | 'product-manager';
  @IsString()
  employment_start_date: string;
  @IsString()
  birthday: string;
  @IsString()
  education_level: string;
}
