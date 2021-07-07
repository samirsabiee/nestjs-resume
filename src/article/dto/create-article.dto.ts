import {IsString} from 'class-validator'
export class CreateArticleDto {
    @IsString()
    title: string

    @IsString()
    cover: string

    @IsString()
    content: string

    @IsString()
    author: string

}
