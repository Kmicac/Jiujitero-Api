import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "src/entities/user.entity";
import { JwtPayload } from "../interfaces/jwt-payload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy( Strategy ) {

    constructor( 
        @InjectModel(User.name)
        private userModel: Model<User>,

        configService: ConfigService
    ) {
        super({
            secretOrKey: configService.get('JWT_SECRET'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }

    // Validamos desde el token que posea el Id del usuario requerido y que sea un usuario activo...
   async validate( payload: JwtPayload ): Promise<User> {

    const { id } = payload;

    const user = await this.userModel.findById( id );

    if (!user.id) throw new UnauthorizedException('Token not valid');

    if (!user.isActive) throw new UnauthorizedException('User is Inactive, please get in touch with administration');
   
    return user;
   }
}