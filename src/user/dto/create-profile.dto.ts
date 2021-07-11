import {IsString, Length, Matches, MaxLength} from "class-validator";

export class CreateProfileDto {
    @IsString()
    @Matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    email: string
    @IsString()
    @Length(11,11)
    mobile: string

    @IsString()
    @MaxLength(300)
    bio: string

    avatar: string
}
