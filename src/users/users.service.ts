import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model, mongo } from 'mongoose';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { errorExceptionHandler } from 'src/common/errorExceptionHandler';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>
  ) { }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    try {

      const { passport, ...userData } = createUserDto

      const user = await this.userModel.create({
        ...userData,
        passport: bcrypt.hashSync(passport, 10)
      });
      return user;
    } catch (error) {
      if (error instanceof mongo.MongoError) errorExceptionHandler(error);
      else throw error;
    }
  }


  async getAllUsers() {
    return this.userModel.find().select('-__v').exec();
  }


  async getUserById(id: string) {
    return this.userModel.findById(id);
  }


  async updateUser(id: string, updatedUser: any): Promise<User> {
    const index = await this.userModel.findByIdAndUpdate(id, updatedUser);

    if (!index) throw new NotFoundException('User not Found');
    return updatedUser;

  }

  async deleteUser(id: string): Promise<string> {
    const index = await this.userModel.findByIdAndDelete(id);

    if (!index) throw new NotFoundException('User not Found');
    return `User of id: ${id} successfully deleted!`;

  }
}
