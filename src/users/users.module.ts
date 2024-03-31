import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [ 
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      }
    ]), 
    AuthModule,
],
exports: [MongooseModule],
})
export class UsersModule {}
