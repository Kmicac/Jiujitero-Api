import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, mongo } from 'mongoose';
import { PaginationDto } from 'src/common/pagination.dto';
import { Athlete } from 'src/entities/athlete.entity';
import { CreateAthleteDto } from './dto/create-athlete.dto';
import { errorExceptionHandler } from 'src/common/errorExceptionHandler';
import { UpdateAthleteDto } from './dto/update-athlete.dto';
import { FilterAthleteDto } from './dto/filter-athlete.dto';

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
        const athleteName = await this.athleteModel.find({ name: { $regex: name, $options: 'i' } }).select('-__v').exec();
        return athleteName;

    }

    async getAllAthletes(props: FilterAthleteDto): Promise<Athlete[]> {
        try {
            const QUERY = {};

            if (props.name) {
                QUERY["name"] = { $regex: props.name, $options: 'i' };
            }

            if (props.lastName) {
                QUERY["lastName"] = { $regex: props.lastName, $options: 'i' };
            }

            if (props.team) {
                QUERY["team"] = { $regex: props.team, $options: 'i' };
            }

            if (props.email) {
                QUERY["email"] = { $regex: props.email, $options: 'i' };
            }

            const result = await this.athleteModel.find(QUERY).select('-__v');
            if (!result) throw new NotFoundException('Could not find any Athlete');
            return result;

        } catch (error) {
            throw new BadRequestException(error.message);
        }

    }

    async getByPagination(params: FilterAthleteDto) {
        try {
            const query = {};
            if (params.name) {
                query["name"] = { $regex: params.name, $options: 'i' };
            }

            if (params.lastName) {
                query["lastName"] = { $regex: params.lastName, $options: 'i' };
            }

            if (params.team) {
                query["team"] = { $regex: params.team, $options: 'i' };
            }

            const limit = params.limit || 10;
            const offset = params.offset || 0;

            const data = await this.athleteModel.find(query)
            .limit(limit)
            .skip(offset)
            .select('-__v');

            const total = await this.athleteModel.countDocuments(query);

            return { data, total };

        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async update(id: string, updateAthleteDto: UpdateAthleteDto) {

        const athlete = await this.athleteModel.findByIdAndUpdate(id, updateAthleteDto);

        return { ...athlete.toJSON(), ...updateAthleteDto };
    }

    async remove(id: string): Promise<string> {
        const { deletedCount } = await this.athleteModel.deleteOne({ _id: id })
        if (deletedCount === 0)
            throw new BadRequestException(`Athlete with id ${id} does not exist`);

        return (`Athlete with id ${id} its been deteled`);
    }

}
