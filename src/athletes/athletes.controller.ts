import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

import { Athlete } from 'src/entities/athlete.entity';
import { AthletesService } from 'src/athletes/athletes.service';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';

import { CreateAthleteDto } from './dto/create-athlete.dto';
import { UpdateAthleteDto } from './dto/update-athlete.dto';
import { FilterAthleteDto } from './dto/filter-athlete.dto';
import { Auth } from 'src/auth/decorator';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';

@Controller('athletes')
export class AthletesController {

    constructor(
        private readonly athletesService: AthletesService,
    ) { }

    @Post()
    @Auth()
    createAthlete(@Body() createAthleteDto: CreateAthleteDto) {
        return this.athletesService.createAthlete(createAthleteDto)
    }

    @Get('search')
    async searchByName(@Query('name') name: string): Promise<Athlete[]> {
        return this.athletesService.searchByName(name);
    }

    @Get()
    findAll(@Query() props?: FilterAthleteDto) {
        return this.athletesService.getAllAthletes(props);
    }

    @Get('pagination')
    findByPagination(@Query() props?: FilterAthleteDto) {
        return this.athletesService.getByPagination(props);
    }

    @Patch(':id')
    @Auth()
    update(@Param('id', ParseMongoIdPipe) id: string, @Body() updateAthleteDto: UpdateAthleteDto) {
        return this.athletesService.update(id, updateAthleteDto)
    }

    @Delete(':id')
    @Auth( ValidRoles.admin )
    remove(@Param('id', ParseMongoIdPipe) id: string) {
        return this.athletesService.remove(id);
    }


}
