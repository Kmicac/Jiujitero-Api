import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AthletesService } from 'src/athletes/athletes.service';
import { PaginationDto } from 'src/common/pagination.dto';
import { Athlete } from 'src/entities/athlete.entity';
import { createAthleteDto } from './dto/create-athlete.dto';

@Controller('athletes')
export class AthletesController {

    constructor(
        private readonly athletesService: AthletesService,
    ) { }

    @Post()
    createAthlete(@Body() createAthleteDto: createAthleteDto) {
        return this.athletesService.createAthlete(createAthleteDto)
    }

    @Get('search')
    async searchByName(@Query('name') name: string): Promise<Athlete[]> {
        return this.athletesService.searchByName(name);
    }

    @Get()
    findAll(@Query() paginationDto: PaginationDto) {
        return this.athletesService.getAllAthletes(paginationDto);
    }


}
