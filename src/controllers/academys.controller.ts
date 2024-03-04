import { Controller, Get } from '@nestjs/common';
import { AcademysService } from 'src/services/academys.service';

@Controller('academys')
export class AcademysController {

    constructor(
    private readonly academysService: AcademysService,
    ) {}

    @Get()
    findAll() {
       return this.academysService.getAll(); 
    }

}
