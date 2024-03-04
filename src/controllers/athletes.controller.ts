import { Controller, Get } from '@nestjs/common';
import { AthletesService } from 'src/services/athletes.service';

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
