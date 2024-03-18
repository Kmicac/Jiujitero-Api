import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationDto } from 'src/common/pagination.dto';
import { Athlete } from 'src/entities/athlete.entity';
import { createAthleteDto } from './dto/create-athlete.dto';

@Injectable()
export class AthletesService {
    constructor(
        @InjectModel(Athlete.name)
        private readonly athleteModel: Model<Athlete>
    ) { }

    async createAthlete(createAthleteDto: createAthleteDto): Promise<Athlete> {
        const athlete = this.athleteModel.create(createAthleteDto)
        return athlete;
    }
    
    async searchByName(name: string): Promise<Athlete[]> {
        const athleteName = await this.athleteModel.find({ name: { $regex: name, $options: 'i' } }).exec();
        return athleteName;
    }
    
    getAllAthletes(paginationDto: PaginationDto) {
        const { limit = 10, offset = 0 } = paginationDto;

        return this.athleteModel.find()
            .limit(limit)
            .skip(offset)
    }


}
