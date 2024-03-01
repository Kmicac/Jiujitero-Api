import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AcademysModule } from './academys/academys.module';
import { AthletesModule } from './athletes/athletes.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [UsersModule, AcademysModule, AthletesModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
