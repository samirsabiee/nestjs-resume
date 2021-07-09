import {Module} from '@nestjs/common';
import { ArticleCommentService } from './article.comment.service';
import { ArticleCommentController } from './article.comment.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Comment} from './entities/article.comment.entity'
import {ArticleModule} from "../article/article.module";
@Module({
  imports:[TypeOrmModule.forFeature([Comment]), ArticleModule],
  controllers: [ArticleCommentController],
  providers: [ArticleCommentService]
})
export class CommentModule {}
