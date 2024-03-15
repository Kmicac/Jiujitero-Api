import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>
  ) {}

 async getAllUsers() {
    return this.userModel.find().exec();
  }

  async getUserById(id: string) {
    return this.userModel.findById(id);
  }

  // async createUser(newUser: any) {
  //   const user = { ...newUser };
  //   this.users.push(user);
  //   return user;
  // }

  // updateUser(id: string, updatedUser: any) {
  //   const index = this.users.findIndex(user => user.id === id);

  //   if (index !== -1) {
  //     this.users[index] = { ...this.users[index], ...updatedUser };
  //     return this.users[index];
  //   }

  //   return null;
  // }

  // deleteUser(id: string) {
  //   const index = this.users.findIndex(user => user.id === id);

  //   if (index !== -1) {
  //     this.users.splice(index, 1);
  //     return true;
  //   }

  //   return false;
  // }
}
