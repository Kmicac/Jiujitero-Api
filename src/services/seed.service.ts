import { Injectable } from '@nestjs/common';
import { ATHLETES_SEED } from 'src/dataset/athletes.seed';
import { ACADEMYS_SEED } from 'src/dataset/academys.seed';
import { AthletesService } from './athletes.service';
import { AcademysService } from './academys.service';

@Injectable()
export class SeedService {

    constructor(
        private readonly athletesService: AthletesService,
        private readonly academysService: AcademysService,
    ) {}

    populateDB() {

        this.academysService.fillAcademyWithSeed(ACADEMYS_SEED);
        this.athletesService.fillAthleteswithSeed(ATHLETES_SEED);

        return "Seed Excecuted";
    }
}
