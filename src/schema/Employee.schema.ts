import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail } from 'class-validator';

@Schema()
export class employee {
  @Prop()
  first_name: string;
  @Prop()
  last_name: string;
  @Prop() //({ unique: true, required: true })
  @IsEmail()
  email_address: string;
  @Prop()
  address: string;
  @Prop()
  phone_number: number;
  @Prop()
  emergency_number: number;
  @Prop()
  bank_name: string;
  @Prop()
  account_number: number;
  @Prop()
  account_name: string;
  @Prop()
  next_of_kin_name: string;
  @Prop()
  next_of_kin_number: number;
  @Prop()
  next_of_kin_relationship: string;
  @Prop()
  role: 'software engineer' | 'UI_UX designer' | 'product manager';
  @Prop()
  employment_start_date: string;
  @Prop()
  birthday: string;
  @Prop()
  education_level: string;
}

export const employeeSchema = SchemaFactory.createForClass(employee);

/**
 *  First name
 * last name
 * email
 * Address
 * phone number
 * emergency number
 * bank name
 * bank account number
 * Account name
 * next of kin name
 * next of kin Number
 * next of kin relationsip
 * role
 * employment start date
 * birthday
 * education level
 *
 */
