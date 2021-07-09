import {IsString} from "class-validator";

export class CreateCommentDto {
    @IsString()
    writer: string

    @IsString()
    comment: string

    @IsString()
    articleId: string
}
