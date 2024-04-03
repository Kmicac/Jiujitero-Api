import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAthleteDto {

    @ApiProperty({
        example: 'Marcio',
        description: 'Name of the Athlete',
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        example: 'Pontes',
        description: 'The last name of the Athlete',
    })
    @IsNotEmpty()
    @IsString()
    lastName: string;

    @ApiProperty({
        example: 'Lotus Club Academy',
        description: 'The team o academy where the athlete is training',
    })
    @IsString()
    @IsOptional()
    team: string;
    
    @ApiProperty({
        example: 'marcio@gmail.com',
        uniqueItems: true,
    })
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

}