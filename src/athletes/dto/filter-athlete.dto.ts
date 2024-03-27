import { IsEmail, IsOptional, IsString } from "class-validator";
import { PaginationDto } from "src/common/pagination.dto";

export class FilterAthleteDto extends PaginationDto {

    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    lastName: string;

    @IsString()
    @IsOptional()
    team: string;

    @IsString()
    @IsOptional()
    @IsEmail()
    email: string;
};