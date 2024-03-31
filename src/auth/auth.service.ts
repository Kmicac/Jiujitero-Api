import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

import { User } from 'src/entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';

import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,

    private readonly jwtService: JwtService
  ) { }



  async login(loginUserDto: LoginUserDto) {

    const { email, password } = loginUserDto;

    const user = await this.userModel.findOne({ email }).select({ email: 1, password: 1 });

    if (!user) {
      throw new UnauthorizedException('Credentials are not valid');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      throw new UnauthorizedException('Credentials are not valid');

    return {
      email: user.email,
      password: user.password,
      token: this.getJwtToken({ email: user.email })
    };
  }

  private getJwtToken(payload: JwtPayload) {

    const token = this.jwtService.sign(payload);

    return token;
  }
}
