import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService
    ) {}

    @Get()
    getAllUsers() {
      return this.usersService.getAllUsers();
    }
  
    @Get(':id')
    getUserById(@Param('id') id: string) {
      return this.usersService.getUserById(id);
    }
  
    // @Post()
    // createUser(@Body() newUser: any) {
    //   return this.usersService.createUser(newUser);
    // }

  //   @Patch(':id')
  // updateUser(@Param('id') id: string, @Body() updatedUser: any) {
  //   return this.usersService.updateUser(id, updatedUser);
  // }

  // @Delete(':id')
  // deleteUser(@Param('id') id: string) {
  //   return this.usersService.deleteUser(id);
  // }
    
}
