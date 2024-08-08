import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { MongooseModule } from '@nestjs/mongoose';
import { employee, employeeSchema } from 'src/schema/Employee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: employee.name,
        schema: employeeSchema,
      },
    ]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
