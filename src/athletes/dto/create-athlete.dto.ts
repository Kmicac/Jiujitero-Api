import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class createAthleteDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;
}