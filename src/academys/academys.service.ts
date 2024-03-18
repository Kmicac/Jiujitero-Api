import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Academy } from 'src/entities/academy.entity';
import { CreateAcademyDto } from './dto/create-academy.dto';
import { PaginationDto } from 'src/common/pagination.dto';

@Injectable()
export class AcademysService {

    constructor(
        @InjectModel(Academy.name)
        private readonly academyModel: Model<Academy>
    ) { }

    async createAcademy(createAcademyDto: CreateAcademyDto): Promise<Academy> {
        const academy = this.academyModel.create(createAcademyDto);
        return academy;
    }

    async getAll(paginationDto: PaginationDto) {
        const { limit = 10, offset = 0 } = paginationDto

        return this.academyModel.find()
            .limit(limit)
            .skip(offset);
    }

    async searchByName(name: string): Promise<Academy[]> {
        const academyName = await this.academyModel.find({ name: { $regex: name, $options: 'i' } })
        return academyName;
    }

}

