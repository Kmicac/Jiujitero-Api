import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, Matches } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAcademyDto {

    @ApiProperty({
        example: 'Lotus Club Academy',
        description: 'Name of the Academy',
        uniqueItems: true,
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        example: 'London, England',
        description: 'Name of the City where is located the academy'
    })
    @IsNotEmpty()
    @IsString()
    location: string;

    @ApiProperty({
        example: 'Fabio Gurgel',
        description: 'Name of the Master or owner of the Organisation'
    })
    @IsNotEmpty()
    @IsString()
    professor: string;

    @ApiProperty({
        example: '17854567855',
        description: 'Number of the Academy or the professor',
    })
    @IsNumber()
    @IsOptional()
    phone?: number;

    @ApiProperty({
        example: 'https://www.jiujitsuacademy.com/logo.png',
        description: 'Logo or Image that represent the Academy',
    })
    @IsUrl({}, { message: 'Should be a valid URL' })
    @Matches(/\.(jpeg|jpg|png|gif)$/, { message: 'Must be a URL ending in a valid image extension' })
    image: string;
}