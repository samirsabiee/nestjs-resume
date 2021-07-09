import {Injectable} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {CommentRepository} from "./comment.repository";
import {Comment} from "./entities/comment.entity";
import {ArticleService} from "../article/article.service";

@Injectable()
export class CommentService {
  constructor(@InjectRepository(CommentRepository) private commentRepository: CommentRepository, private articleService: ArticleService) {
  }
  async create(createCommentDto: CreateCommentDto) {
    const {articleId} = createCommentDto;
    const article = await this.articleService.findOne(articleId)
    let comment = new Comment()
    comment.comment = createCommentDto.comment
    comment.writer = createCommentDto.writer
    comment.article = article
    return await comment.save()
  }

  findAll() {
    return this.commentRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
