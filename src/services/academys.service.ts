import { Injectable } from '@nestjs/common';
import { Academy } from 'src/entities/academy.entity';

@Injectable()
export class AcademysService {

    private academys: Academy[] = [];

    getAll() {
       return this.academys;
    }

    fillAcademyWithSeed( academys: Academy[]) {
        this.academys = academys;
    }
}

