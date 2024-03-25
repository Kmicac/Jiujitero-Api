import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, Matches } from "class-validator";

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

    @IsUrl({}, { message: 'Should be a valid URL' })
    @Matches(/\.(jpeg|jpg|png|gif)$/, { message: 'Must be a URL ending in a valid image extension' })
    image: string;
}