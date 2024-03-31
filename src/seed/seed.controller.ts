import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';
import { Auth } from 'src/auth/decorator';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';

@Controller('seed')
export class SeedController {

    constructor(
        private readonly seedService: SeedService
    ) {}

    @Get()
    @Auth( ValidRoles.admin )
    runSeed() {
        return this.seedService.runSeed();
    }
}
