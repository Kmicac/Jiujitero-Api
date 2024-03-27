import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAthleteDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsString()
    @IsOptional()
    team: string;
    
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

}