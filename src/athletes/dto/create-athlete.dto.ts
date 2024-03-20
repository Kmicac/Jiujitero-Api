import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateAthleteDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;
}