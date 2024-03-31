import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';

@Controller('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService
  ) { }

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }


  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updatedUser: any) {
    return this.usersService.updateUser(id, updatedUser);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseMongoIdPipe) id: string) {
    return this.usersService.deleteUser(id);
  }

}
