import { Module } from '@nestjs/common';
import { AcademysController } from '../controllers/academys.controller';
import { AcademysService } from './academys.service';

@Module({
  controllers: [AcademysController],
  providers: [AcademysService]
})
export class AcademysModule {}
