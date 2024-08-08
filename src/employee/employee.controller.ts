import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { UpdateEmployeeDto } from 'src/dto/updateEmployee.dto';
import mongoose from 'mongoose';
import { EmployeeDto } from 'src/dto/employee.dto';

@Controller('employees')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}
  @Get()
  getEmployees() {
    return this.employeeService.getEmployees();
  }

  @Get(':id')
  async getEmployee(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 404);
    const findEmployee = await this.employeeService.getEmployee(id);
    if (!findEmployee) throw new HttpException('Invalid ID', 404);
    return findEmployee;
  }

  @Post()
  createEmployee(@Body(ValidationPipe) employeeDto: EmployeeDto) {
    console.log(employeeDto);
    return this.employeeService.createEmployee(employeeDto);
  }
  @Patch(':id')
  async updateEmployee(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 404);
    const updatedEmployee = await this.employeeService.updateEmployee(
      id,
      updateEmployeeDto,
    );
    if (!updatedEmployee) throw new HttpException('Employee not found', 404);
    return updatedEmployee;
  }
  @Delete(':id')
  async deleteEmployee(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 404);
    const deletedEmployee = await this.employeeService.deleteEmployee(id);
    if (!deletedEmployee) throw new HttpException('Employee not found', 404);
    return deletedEmployee;
  }
}
