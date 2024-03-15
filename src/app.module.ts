import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/users.module';
import { AcademysModule } from './academys/academys.module';
import { AthletesModule } from './athletes/athletes.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/jiujitero-api'),
    UsersModule, 
    AcademysModule, 
    AthletesModule, 
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
