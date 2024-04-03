import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @ApiProperty({
        example: 'Michael Angstrom',
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    name: string;
   
    @ApiProperty({
        example: 'angstrom@gmail.com',
        uniqueItems: true,
    })
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;

    @ApiProperty({
        example: 'Abcd0987',
        description: 'The password must have a Uppercase, lowercase letter and a number',
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;

    @ApiProperty({
        example: 14325874554,
    })
    @IsNumber()
    @IsOptional()
    phone: number;

};