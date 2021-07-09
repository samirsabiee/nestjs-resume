import {Injectable} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {CommentRepository} from "./comment.repository";
import {Comment} from "./entities/article.comment.entity";
import {ArticleService} from "../article/article.service";

@Injectable()
export class ArticleCommentService {
  constructor(@InjectRepository(CommentRepository) private commentRepository: CommentRepository, private articleService: ArticleService) {
  }
  async create(articleId:string, createCommentDto: CreateCommentDto) {
    const article = await this.articleService.findOne(articleId)
    let comment = new Comment()
    comment.comment = createCommentDto.comment
    comment.article = article
    const cmt = await comment.save()
    delete cmt.article
    return cmt
  }

  findAll() {
    return this.commentRepository.find();
  }

  findOne(id: number) {
    return this.commentRepository.findOne(id);
  }

  remove(id: number) {
    return this.commentRepository.delete(id);
  }
}
