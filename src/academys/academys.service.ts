import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, mongo } from 'mongoose';
import { Academy } from 'src/entities/academy.entity';
import { CreateAcademyDto } from './dto/create-academy.dto';
import { PaginationDto } from 'src/common/pagination.dto';
import { errorExceptionHandler } from 'src/common/errorExceptionHandler';

@Injectable()
export class AcademysService {

    constructor(
        @InjectModel(Academy.name)
        private readonly academyModel: Model<Academy>
    ) { }

    async createAcademy(createAcademyDto: CreateAcademyDto): Promise<Academy> {

        try {
            const academy = await this.academyModel.create(createAcademyDto);
            return academy;
        } catch (error) {
            if (error instanceof mongo.MongoError) errorExceptionHandler(error);
            else throw error;
        }
    }

    async getAll(paginationDto: PaginationDto) {
        const { limit = 10, offset = 0 } = paginationDto

        return this.academyModel.find()
            .limit(limit)
            .skip(offset)
            .sort({
                name: 1
            })
            .select('-__v')
    }

    async searchByName(name: string): Promise<Academy[]> {
        const academyName = await this.academyModel.find({ name: { $regex: name, $options: 'i' } })
        return academyName;
    }

    async remove(id: string): Promise<string> {
        const { deletedCount } = await this.academyModel.deleteOne({ _id: id })
        if ( deletedCount === 0 ) 
        throw new BadRequestException( `Academy with id ${id} does not exist`);

        return (`Academy with id ${id} its been deteled`);
    }

}

