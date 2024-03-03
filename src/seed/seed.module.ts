import { Module } from '@nestjs/common';
import { SeedController } from '../controllers/seed.controller';
import { SeedService } from '../services/seed.service';

@Module({
  controllers: [SeedController],
  providers: [SeedService]
})
export class SeedModule {}
