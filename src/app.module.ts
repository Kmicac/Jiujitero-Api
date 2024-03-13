import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { User, UserSchema } from './entities/user.entity';
import { Athlete, AthleteSchema } from './entities/athlete.entity';
import { UsersModule } from './users/users.module';
import { AcademysdModule } from './academys/academys.module';
import { AthleteModule } from './athletes/athletes.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017//jiujitero-api'),
    UsersModule, 
    AcademysdModule, 
    AthleteModule, 
    SeedModule,
  MongooseModule.forFeature([
    {
      name: User.name,
      schema: UserSchema,
    },
    {
      name: Athlete.name,
      schema: AthleteSchema,
    },
  ])
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
