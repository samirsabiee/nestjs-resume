import {Module} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Comment} from './entities/comment.entity'
import {ArticleModule} from "../article/article.module";
@Module({
  imports:[TypeOrmModule.forFeature([Comment]), ArticleModule],
  controllers: [CommentController],
  providers: [CommentService]
})
export class CommentModule {}
