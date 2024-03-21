import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './users/users.module';
import { AcademysModule } from './academys/academys.module';
import { AthletesModule } from './athletes/athletes.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joiSchema.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
      validationSchema: JoiValidationSchema,
    }),

    MongooseModule.forRoot( process.env.MONGODB) ,
    UsersModule, 
    AcademysModule, 
    AthletesModule, 
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
