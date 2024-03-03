import { Module } from '@nestjs/common';
import { AthletesController } from '../controllers/athletes.controller';
import { AthletesService } from './athletes.service';

@Module({
  controllers: [AthletesController],
  providers: [AthletesService]
})
export class AthletesModule {}
