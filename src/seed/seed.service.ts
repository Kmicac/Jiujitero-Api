import { Injectable } from '@nestjs/common';
import { AthletesService } from '../athletes/athletes.service';
import { AcademysService } from '../academys/academys.service';
import { InjectModel } from '@nestjs/mongoose';
import { Athlete } from 'src/entities/athlete.entity';
import { Academy } from 'src/entities/academy.entity';

@Injectable()
export class SeedService {

    populateDB() {

        return "Seed Excecuted";
    }
}
