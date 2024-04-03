import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { Auth, GetUser } from './decorator';
import { ValidRoles } from './interfaces/valid-roles';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from 'src/entities/user.entity';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }


  @Get('check-status')
  @Auth()
  checkAuthStatus(
    @GetUser() user: User
  ) {
    return this.authService.checkAuthStatus(user);
  }


  @Get('private')
  @Auth(ValidRoles.admin)
  privateRoute(
    @GetUser() user: User,

  ) {
    return {
      user
    };
  }

  // @SetMetadata('roles', ['admin','super-user'])
  // @Get('private')
  // @RoleProtected( )
  // @UseGuards( AuthGuard() )
  // testingPrivateRoute(
  //   @GetUser() user: User,
  //   @GetUser('email') userEmail: string

  // ) {
  //   return {
  //     ok: true,
  //     message: 'Here is a private route',
  //     user,
  //     userEmail
  //   };
  // }


}
