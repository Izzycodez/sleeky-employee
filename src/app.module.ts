import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee/employee.module';
require('dotenv').config; //({ path: './uri.env' });
const URI = process.env.URI;

@Module({
  imports: [MongooseModule.forRoot(URI), EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
