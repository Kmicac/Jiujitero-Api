import { Injectable } from '@nestjs/common';
import { Athlete } from 'src/entities/athlete.entity';

@Injectable()
export class AthletesService {

    private athletes: Athlete[] = [];

    getAllAthletes() {
        return this.athletes;
    }

}
