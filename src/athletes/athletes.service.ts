import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, mongo } from 'mongoose';
import { PaginationDto } from 'src/common/pagination.dto';
import { Athlete } from 'src/entities/athlete.entity';
import { CreateAthleteDto } from './dto/create-athlete.dto';
import { errorExceptionHandler } from 'src/common/errorExceptionHandler';

@Injectable()
export class AthletesService {
    constructor(
        @InjectModel(Athlete.name)
        private readonly athleteModel: Model<Athlete>
    ) { }

    async createAthlete(createAthleteDto: CreateAthleteDto): Promise<Athlete> {
        try {
            const athlete = await this.athleteModel.create(createAthleteDto)
            return athlete;
        } catch (error) {
            if (error instanceof mongo.MongoError) errorExceptionHandler(error);
            else throw error;
        }
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
            .sort({
                name: 1
            })
            .select('-__v')
    }

    async remove(id: string): Promise<string> {
        const {deletedCount} = await this.athleteModel.deleteOne({ _id: id })
        if (deletedCount === 0)
            throw new BadRequestException(`Athlete with id ${id} does not exist`);

        return (`Athlete with id ${id} its been deteled`);
    }

}
