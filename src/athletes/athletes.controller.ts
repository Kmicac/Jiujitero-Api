import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { AthletesService } from 'src/athletes/athletes.service';
import { PaginationDto } from 'src/common/pagination.dto';
import { Athlete } from 'src/entities/athlete.entity';
import { CreateAthleteDto } from './dto/create-athlete.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';

@Controller('athletes')
export class AthletesController {

    constructor(
        private readonly athletesService: AthletesService,
    ) { }

    @Post()
    createAthlete(@Body() createAthleteDto: CreateAthleteDto) {
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

    @Delete(':id')
    remove(@Param('id', ParseMongoIdPipe) id: string) {
        return this.athletesService.remove(id);
    }


}
