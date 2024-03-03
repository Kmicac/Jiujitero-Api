import { Module } from '@nestjs/common';
import { AcademysController } from './controllers/academys.controller';
import { UsersController } from './controllers/users.controller';
import { AthletesController } from './controllers/athletes.controller';
import { SeedController } from './controllers/seed.controller';
import { AcademysService } from './services/academys.service';
import { UsersService } from './services/users.service';
import { AthletesService } from './services/athletes.service';
import { SeedService } from './services/seed.service';

@Module({
  imports: [],
  controllers: [
    AcademysController, 
    UsersController, 
    AthletesController, 
    SeedController
  ],
  providers: [
    AcademysService, 
    UsersService, 
    AthletesService, 
    SeedService],
})
export class AppModule {}
