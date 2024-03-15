import { Module } from '@nestjs/common';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';

import { AthletesModule } from 'src/athletes/athletes.module';
import { AcademysModule } from 'src/academys/academys.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [AthletesModule, AcademysModule, UsersModule],
})
export class SeedModule {}
