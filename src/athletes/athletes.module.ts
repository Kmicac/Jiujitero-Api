import { Module } from '@nestjs/common';
import { AthletesService } from './athletes.service';
import { AthletesController } from './athletes.controller';
import { Athlete, AthleteSchema } from 'src/entities/athlete.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [AthletesController],
  providers: [AthletesService],
  imports: [ MongooseModule.forFeature([
    {
      name: Athlete.name,
      schema: AthleteSchema,
    }
  ]), 
],
exports: [MongooseModule],
})
export class AthletesModule {}
