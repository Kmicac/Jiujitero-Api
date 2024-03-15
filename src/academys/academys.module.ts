import { Module } from '@nestjs/common';
import { AcademysController } from './academys.controller';
import { AcademysService } from './academys.service';
import { Academy, AcademySchema } from 'src/entities/academy.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [AcademysController],
  providers: [AcademysService],
  imports: [ MongooseModule.forFeature([
    {
      name: Academy.name,
      schema: AcademySchema,
    }
  ]), 
],
exports: [MongooseModule],
})
export class AcademysModule {}
