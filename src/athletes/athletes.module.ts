import { Module } from '@nestjs/common';
import { AthletesService } from './athletes.service';
import { AthletesController } from './athletes.controller';
import { Athlete, AthleteSchema } from 'src/entities/athlete.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [AthletesController],
  providers: [AthletesService],
  imports: [ MongooseModule.forFeature([
    {
      name: Athlete.name,
      schema: AthleteSchema,
    }
  ]), 
  AuthModule
],
exports: [MongooseModule],
})
export class AthletesModule {}
