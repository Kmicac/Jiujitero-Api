import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Academy } from 'src/entities/academy.entity';

@Injectable()
export class AcademysService {

    constructor(
        @InjectModel(Academy.name)
        private readonly academyModel: Model<Academy>
    ) {}


    getAll() {
       return this.academyModel.find().exec();
    }
}

