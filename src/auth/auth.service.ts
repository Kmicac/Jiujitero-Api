import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

import { User } from 'src/entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';

import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces/jwt-payload.interface';

const EXPIRE_TIME = 8 * 60 * 60 * 1000;

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,

    private readonly jwtService: JwtService
  ) { }



  async login(loginUserDto: LoginUserDto) {

    const { email, password } = loginUserDto;

    const user = await this.userModel.findOne({ email }).select({ id: true, email: true, password: true });

    if (!user) {
      throw new UnauthorizedException('Credentials are not valid');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      throw new UnauthorizedException('Credentials are not valid');

    return {
      email: user.email,
      password: user.password,
      token: this.getJwtToken({ id: user.id })
    };
  }

// Metodo para revalidar u obtener nuevo token junto con la info del usuario en caso de que perdamos session o solo necesitemos uno nuevo.
  async checkAuthStatus(user: User) {
    return {
      user,
      token: this.getJwtToken({ id: user.id }),
      expiresIn: new Date().setTime(EXPIRE_TIME),
    };
  }


  private getJwtToken(payload: JwtPayload) {

    const token = this.jwtService.sign(payload);

    return token;
  }

}
