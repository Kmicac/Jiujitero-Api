import { Module } from '@nestjs/common';
import { AcademysController } from './academys.controller';
import { AcademysService } from './academys.service';
import { Academy, AcademySchema } from 'src/entities/academy.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [AcademysController],
  providers: [AcademysService],
  imports: [ MongooseModule.forFeature([
    {
      name: Academy.name,
      schema: AcademySchema,
    }
  ]), 
  AuthModule
],
exports: [MongooseModule],
})
export class AcademysModule {}
