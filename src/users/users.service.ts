import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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

      const { password, ...userData } = createUserDto

      const user = await this.userModel.create({
        ...userData,
        password: bcrypt.hashSync(password, 10)
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


  async getUserById(id: string): Promise<User>  {
    return this.userModel.findById(id);
  }


  async updateUser(id: string, updatedUser: any): Promise<User> {
    const index = await this.userModel.findByIdAndUpdate(id, updatedUser);

    if (!index) throw new NotFoundException('User not Found');
    return index;

  }

  async deleteUser(id: string): Promise<string> {

    const { deletedCount } = await this.userModel.deleteOne({ _id: id })

    if (deletedCount === 0)
      throw new BadRequestException(`User with id ${id} does not exist`);

    return `User of id: ${id} successfully deleted!`;

  }
}
