import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { AcademysService } from 'src/academys/academys.service';
import { Academy } from 'src/entities/academy.entity';
import { CreateAcademyDto } from './dto/create-academy.dto';
import { PaginationDto } from 'src/common/pagination.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';
import { UpdateAcademyDto } from './dto/update-academy.dto';

@Controller('academys')
export class AcademysController {

    constructor(
        private readonly academysService: AcademysService,
    ) { }

    @Post()
    createAcademy(@Body() createAcademyDto: CreateAcademyDto) {
        return this.academysService.createAcademy(createAcademyDto);
    }

    @Get()
    findAll(@Query() paginationDto: PaginationDto) {
        return this.academysService.getAll(paginationDto)
    }

    @Get('search')
    searchByName(@Query('name') name: string): Promise<Academy[]> {
        return this.academysService.searchByName(name);
    }

    // @Patch(':id')
    // update(@Param('id')id: string, @Body() updateAcademyDto: UpdateAcademyDto) {
    //     return this.academysService.update(id, updateAcademyDto)
    // }

    @Delete(':id')
    remove(@Param('id', ParseMongoIdPipe) id: string) {
        return this.academysService.remove(id);
    }

}
