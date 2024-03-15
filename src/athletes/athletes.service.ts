import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Athlete } from 'src/entities/athlete.entity';

@Injectable()
export class AthletesService {
    constructor(
        @InjectModel(Athlete.name)
        private readonly athleteModele: Model<Athlete>
    ) {}

    getAllAthletes() {
        return this.athleteModele.find().exec();
    }

}
