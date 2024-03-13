import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users: any[] = [];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: string) {
    return this.users.find(user => user.id === id);
  }

  createUser(newUser: any) {
    const user = { ...newUser };
    this.users.push(user);
    return user;
  }

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
