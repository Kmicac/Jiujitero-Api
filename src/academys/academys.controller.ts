import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AcademysService } from 'src/academys/academys.service';
import { Academy } from 'src/entities/academy.entity';

@Controller('academys')
export class AcademysController {

    constructor(
        private readonly academysService: AcademysService,
    ) { }

    @Post()
    createAcademy(@Body() newAcademy: any) {
        return this.academysService.createAcademy(newAcademy);
    }
    @Get()
    findAll() {
        return this.academysService.getAll();
    }

    @Get('search')
    async searchByName(@Query('name') name: string): Promise<Academy[]> {
        return this.academysService.searchByName(name);
    }

}
