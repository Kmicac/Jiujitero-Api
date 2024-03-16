import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Academy } from 'src/entities/academy.entity';

@Injectable()
export class AcademysService {

    constructor(
        @InjectModel(Academy.name)
        private readonly academyModel: Model<Academy>
    ) { }

    async createAcademy(createAcademy: any): Promise<Academy> {
        const academy = this.academyModel.create(createAcademy);
        return academy;
    }

    async getAll() {
        return this.academyModel.find().exec();
    }

    async searchByName(name: string): Promise<Academy[]> {
        const academyName = await this.academyModel.find({ name: { $regex: name, $options: 'i' } }).exec();
        return academyName;
    }

}

