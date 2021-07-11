import {IsString, Matches, MaxLength, MinLength} from "class-validator";

export class LoginDto {
    @IsString()
    @MinLength(8)
    @MaxLength(30)
    username: string

    @IsString()
    @MinLength(8)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
    password: string
}
