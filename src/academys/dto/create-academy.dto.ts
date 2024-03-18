import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateAcademyDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    location: string;

    @IsNotEmpty()
    @IsString()
    professor: string;

    @IsNumber()
    @IsOptional()
    phone?: number;
}