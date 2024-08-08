import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeDto } from 'src/dto/employee.dto';
import { employee } from 'src/schema/Employee.schema';
import { UpdateEmployeeDto } from 'src/dto/updateEmployee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(employee.name) private employeeModel: Model<employee>,
  ) {}
  getEmployees() {
    return this.employeeModel.find();
  }
  createEmployee(employeeDto: EmployeeDto) {
    const newEmployee = new this.employeeModel(employeeDto);
    return newEmployee.save();
  }
  getEmployee(id: string) {
    return this.employeeModel.findById(id);
  }
  updateEmployee(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeModel.findByIdAndUpdate(id, updateEmployeeDto, {
      new: true,
    });
  }
  deleteEmployee(id: string) {
    return this.employeeModel.findByIdAndDelete(id);
  }
}
