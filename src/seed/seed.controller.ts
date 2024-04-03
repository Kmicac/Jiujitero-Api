import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SeedService } from './seed.service';
import { Auth } from 'src/auth/decorator';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';

@ApiTags('Seed')
@Controller('seed')
export class SeedController {

    constructor(
        private readonly seedService: SeedService
    ) {}

    @Get()
    runSeed() {
        return this.seedService.runSeed();
    }
}
