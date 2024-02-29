import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AcademysModule } from './academys/academys.module';
import { AthletesModule } from './athletes/athletes.module';

@Module({
  imports: [UsersModule, AcademysModule, AthletesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
