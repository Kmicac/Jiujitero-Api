import { Controller, Get } from '@nestjs/common';
import { AthletesService } from 'src/athletes/athletes.service';

@Controller('athletes')
export class AthletesController {

    constructor(
        private readonly athletesService: AthletesService,
    ) {}

    @Get()
    findAll() {
        return this.athletesService.getAllAthletes();
    }
}
