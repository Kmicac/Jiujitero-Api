import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Athlete } from 'src/entities/athlete.entity';
import { Academy } from 'src/entities/academy.entity';
import { User } from 'src/entities/user.entity';
import { inicialData } from '../dataset/data.seed'

@Injectable()
export class SeedService {

    constructor(
        @InjectModel(Academy.name)
        private academysModel: Model<Academy>,
        @InjectModel(Athlete.name)
        private athletesModel: Model<Athlete>,
        @InjectModel(User.name)
        private usersModel: Model<User>,
    ) { }

    async runSeed() {
        await this.academysModel.deleteMany();
        await this.athletesModel.deleteMany();
        await this.usersModel.deleteMany();
        const data = inicialData;

        await this.academysModel.insertMany(inicialData.academys);
        await this.athletesModel.insertMany(inicialData.athletes);
        await this.usersModel.insertMany(inicialData.users);

        return "Seed Excecuted";
    }
}
