import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>
  ) { }

  async createUser(newUser: any): Promise<User> {
    const user = this.userModel.create(newUser);
    return user;
  }


  async getAllUsers() {
    return this.userModel.find().exec();
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
