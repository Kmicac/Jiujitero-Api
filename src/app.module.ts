import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './users/users.module';
import { AcademysModule } from './academys/academys.module';
import { AthletesModule } from './athletes/athletes.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joiSchema.validation';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load:[ EnvConfiguration ],
      validationSchema: JoiValidationSchema
    }),
    MongooseModule.forRoot(process.env.MONGODB, {
      dbName: 'jiujitsu-api'
    }),
    UsersModule, 
    AcademysModule, 
    AthletesModule, 
    SeedModule, 
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
